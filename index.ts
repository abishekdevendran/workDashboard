import express from "express";
import path from "path";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    console.log("production");
    app.use(express.static(path.join(__dirname, "dist")));
}
app.get("/api/users", (req, res) => {
    res.send({
        message: "Hello World!",
        id: 1,
        name: "John Doe",
        age: 25,
    });
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.listen(PORT, () => {
    console.log("Server started on port ", PORT);
});
