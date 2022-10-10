import loadingGIF from '../assets/loading.gif';
const Loading = () => {
    return (
        <div className="filter blur-[1px] saturate-150 flex items-center justify-center w-full h-full">
            <img
                src={loadingGIF}
                alt="loading spinner"
                className="self-center w-5"
            />
        </div>
    );
};

export default Loading;
