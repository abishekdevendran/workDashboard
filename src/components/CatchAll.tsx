/// <reference types="vite-plugin-svgr/client" />
import { Link } from 'react-router-dom';
import { ReactComponent as Catchall } from '../assets/CatchAllIcon.svg';

const CatchAll = () => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center">
            <div className="font-poppins font-extrabold text-8xl">404</div>
            <div className="font-poppins font-extrabold text-4xl">
                Couldn't find the resource that you're looking for.
            </div>
            <Link
                to="/"
                className="my-4 px-12 py-4 font-bold text-center text-white rounded-full bg-black">
                Back Home
            </Link>
            <Catchall className="absolute w-2/5 -z-10 opacity-20" />
            <a
                href="https://storyset.com/"
                className="absolute bottom-0 opacity-30">
                Work illustrations by Storyset
            </a>
        </div>
    );
};

export default CatchAll;
