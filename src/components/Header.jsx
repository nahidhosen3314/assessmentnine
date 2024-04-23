import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";
import 'animate.css';

const Header = () => {

    const { user, loading, setLoading, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("Logged Out Successfully!");
                setLoading(false);
            })
            .catch((error) => {
                toast.success(error.message);
                setLoading(false);
            });
    };

    const navItems = (
        <>
            <li className="animate__animated animate__fadeIn">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="animate__animated animate__fadeIn">
                <NavLink to="/blog">Blog</NavLink>
            </li>
            {user && (
                <li className="animate__animated animate__fadeIn animate__delay-2s">
                    <NavLink to="/profile">Update Profile</NavLink>
                </li>
            )}
            <li className="animate__animated animate__fadeIn animate__delay-3s">
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </>
    );

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="bg-gray-50 py-2">
                <div className="navbar container">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="mr-4 lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-9 w-9"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <Link to="/">
                            <Logo height="45"></Logo>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {loading && (
                            <span className="loading loading-spinner loading-lg"></span>
                        )}
                        {!loading && user && (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        {user.photoURL ? (
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName}
                                            />
                                        ) : (
                                            <RxAvatar className="w-10 h-10" />
                                        )}
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="z-30 mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    {user.displayName && (
                                        <li>
                                            <div className="font-bold">
                                                {user.displayName}
                                            </div>
                                        </li>
                                    )}
                                    <li>
                                        <div>{user.email}</div>
                                    </li>
                                    <li>
                                        <button onClick={handleLogout}>
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {!loading && !user && (
                            <Link to="/login" className="tw-btn tw-btn-primary">
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
