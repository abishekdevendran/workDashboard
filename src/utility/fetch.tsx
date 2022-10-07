import toast from "react-hot-toast";
export const userFetch = () => {
    const prom1 = fetch("/api/users").then((res) => {
        if (res.status === 404) {
            throw Error("404 Not Found");
        } else if (res.status === 500) {
            throw Error("500 Internal Server Error");
        } else if (res.status === 503) {
            throw Error("503 Service Unavailable");
        } else if (!res.ok) {
            throw Error("An unknown error occured");
        }
        return res.json();
    });
    const prom2 = new Promise((resolve) => setTimeout(resolve, 1000));
    //wait for both promises to resolve
    const data = toast.promise(
        Promise.all([prom1, prom2]).then((values) => {
            return values[0];
        }),
        {
            loading: "Refetching...",
            success: "Success!",
            error: (err) => err.message,
        }
    );
    return data;
};
