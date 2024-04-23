import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../components/useTitle";

const Profile = () => {
    const { user, loading, setLoading } = useContext(AuthContext);

    useTitle({title: "Update Profile"})

    // user profile data
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if(user){
            setFullname(user?.displayName ? user.displayName : "")
            setEmail(user?.email ? user.email : "")
            setPhoto(user?.photoURL ? user.photoURL : "")
            setPhone(user?.phoneNumber ? user.phoneNumber : "")
        }
    }, [user])

    const { handleSubmit } = useForm();

    const updateUser = () => {
        updateProfile(user, {
            displayName: fullname,
            email: email,
            photoURL: photo,
            phoneNumber: phone,
        })
            .then(() => {
                toast.success("User Updated Successfully!");
                setLoading(false);
            })
            .catch((error) => {
                toast.error(error.message);
                setLoading(false);
            });
    };

    const onSubmit = () => {
        setLoading(true)
        updateUser();
    };

    return (
        <div>
            <div className="container py-14 font-medium">
                <div className="max-w-xl mx-auto">
                    <div className="bg-gray-100 rounded p-10">
                        <h4 className="mb-5">Update your profile</h4>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col gap-7"
                        >
                            <div className="">
                                <input
                                    type="text"
                                    value={fullname}
                                    onChange={(e) =>
                                        setFullname(e.target.value)
                                    }
                                    placeholder="Full Name"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <div className="">
                                <input
                                    type="email"
                                    value={email}
                                    placeholder="Email address"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    placeholder="Photo URL"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    value={phone}
                                    placeholder="Phone Number"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <button
                                type="submit"
                                className="tw-btn tw-btn-primary w-full"
                            >
                                {loading ? (
                                    <span className="loading loading-spinner loading-md"></span>
                                ) : (
                                    "Update Profile"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
