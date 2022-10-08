import { Link } from "react-router-dom";

const CatchAll = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="font-poppins font-extrabold text-8xl">404</div>
            <div className="font-poppins font-extrabold text-4xl">Couldn't find the resource that you're looking for.</div>
            <Link to="/" className="my-4 px-12 py-4 font-bold text-center text-white rounded-full bg-black">Back Home</Link>
        </div>
    );
};

export default CatchAll;
