import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation()

    useEffect( () => {
        if (!user && !loading) {
            navigate("/login", {state: location.state})
        }
    }, [user, loading, location, navigate])

    return user ? children : null;
};

export default PrivateRouter;
