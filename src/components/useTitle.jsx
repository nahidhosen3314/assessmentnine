import { useEffect } from "react";

const useTitle = ({ title }) => {
    useEffect(() => {
        document.title = `${title} | Luxury Real Estate`;
    }, [title]);
};

export default useTitle;
