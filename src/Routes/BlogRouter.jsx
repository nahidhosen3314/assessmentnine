import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const BlogRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user && !loading) {
            navigate("/login", { state: location.pathname });
        }
    }, [user, location, navigate, loading]);

    return user ? children : null;
};

export default BlogRouter;
