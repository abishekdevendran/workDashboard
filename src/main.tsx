import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <>
            <App />
            <Toaster
                toastOptions={{
                    className: "rounded-full",
                }}
            />
        </>
    </React.StrictMode>
);
