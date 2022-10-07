declare module '*';
import session from 'express-session';
declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DB_URL: string;
        }
    }
}
declare module 'express-session' {
    export interface SessionData {
        // user: { [key: string]: any };
        cookie: Cookie;
        isAdmin: boolean;
        user: any;
    }
}

export = session;
