import { useQuery } from "react-query";
import { userFetch } from "../utility/fetch";

const TestComponent = () => {
    const { data, status } = useQuery("repoData",userFetch);
    return (
        <>
            {status === "loading" ? (
                <h1 className="w-full text-center">Loading...</h1>
            ) : (
                <h1 className="w-full text-center">{JSON.stringify(data)}</h1>
            )}
        </>
    );
};

export default TestComponent;
