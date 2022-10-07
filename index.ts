import express from "express";
import path from "path";
import helmet from "helmet";
import session from "express-session";
import * as dotenv from 'dotenv';
dotenv.config();
import mongoose,{ConnectOptions} from 'mongoose';
import {createClient} from 'redis';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

//db connection
mongoose
    .connect(process.env.DB_URL!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }as ConnectOptions)
    .then(()=>console.log('db connection success'))
    .catch((err) => console.log(err));
const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
});
const User=mongoose.model('User',UserSchema);

//session store
const SECRET = process.env.SECRET || 'secret';
const redisClient =
    process.env.NODE_ENV === 'production'
        ? createClient({
              legacyMode: true,
              url: process.env.REDIS_URL
          })
        : createClient({ legacyMode: true });
redisClient
    .connect()
    .then(() => console.log('redis connected successfully'))
    .catch(() => console.log('redis connection failed'));
const RedisStore = require('connect-redis')(session);
const sessionMiddleware = session({
    store: new RedisStore({ client: redisClient }),
    saveUninitialized: false,
    secret: SECRET,
    resave: false,
    proxy: true,
    name: 'work-dashboard',
    cookie: {
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 30, //30 mins
        httpOnly: true
    }
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(sessionMiddleware);

//auth middleware
const auth = (req: any, res: any, next: any) => {
    if (req.user) {
        return next();
    }
    res.redirect('/login');
}

//admin middleware
const admin = (req: any, res: any, next: any) => {
    if (req.user.isAdmin) {
        return next();
    }
    res.send({ message: 'You are not authorized to view this page' });
}

if (process.env.NODE_ENV === "production") {
    console.log("production");
    app.use(express.static(path.join(__dirname, "dist")));
}

//login route
app.post("/api/login", (req, res) => {
    console.log("login");
    //check if username exists in db
    console.log(req.body);
    User.findOne({ username: req.body.username }, async (err:any, user:any) => {
        //if user does not exist
        if (!user) {
            res.send({ message: "User does not exist" });
            return;
        }
        //check password
        if (bcrypt.compareSync(req.body.password, user.password)) {
            console.log("user validated");
            req.session.user = user;
            req.session.isAdmin = user.admin;
            res.send({ message: "Success", user: user });
        } else {
            res.send({ message: "wrong password" });
        }
    })
});

//register route
app.post("/api/register", (req, res) => {
    console.log("register");
    console.log(req.body);
    //check if username exists in db
    User.findOne({ username: req.body.username }, async (err:any, user:any) => {
        //if user does not exist
        if (!user) {
            const hashedPassword = bcrypt.hashSync(req.body.password, 10);
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                password: hashedPassword,
                isAdmin: req.body.isAdmin
            });
            console.log("new user: ", newUser);
            newUser.isNew = true;
            await newUser.save();
            console.log("new user saved");
            req.body.user = newUser;
            req.body.isAdmin = newUser.isAdmin;
            res.send({ message: "Success", user: newUser });
        } else {
            res.send({ message: "User already exists" });
        }
    })
})

//check user route
app.get("/api/user", (req, res) => {
    console.log("check user");
    if (req.session.user) {
        res.send({ message: "Success", user: req.session.user });
    } else {
        res.send({ message: "no user" });
    }
})

//logout route
app.get("/api/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.send({ message: "Success" });
    });
})
app.get("/api/users", (req, res) => {
    User.find({}, (err:any, users:any) => {
        res.send(users);
    });
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.listen(PORT, () => {
    console.log("Server started on port ", PORT);
});
