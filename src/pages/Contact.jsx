import { FaLocationDot, FaEnvelope } from "react-icons/fa6";
import { AiFillEdit } from "react-icons/ai";
import useTitle from "../components/useTitle";

const Contact = () => {

    useTitle({title: "Contact"})

    return (
        <div className="py-20">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex gap-3">
                            <FaLocationDot className="mt-1 text-2xl text-primary" />
                            <div className="flex-1 flex flex-col gap-3">
                                <h4>Our Address</h4>
                                <p className="text-base">
                                    <strong>USA:</strong> DevSparkr Web
                                    Development Agency, 33169 Miami, Florida,
                                    United States of America
                                </p>
                                <p className="text-base">
                                    <strong>BD:</strong> DevSparkr Web
                                    Development Agency, House 13, Block-6,
                                    Avenue-5, Mirpur, Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <FaEnvelope className="mt-1 text-2xl text-primary" />
                            <div className="flex-1 flex flex-col gap-3">
                                <h4>Mail us</h4>
                                <p>contact@devsparkr.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h3><AiFillEdit className="text-primary inline-block mr-2" /> Send us a Message</h3>
                        <div className="">
                            <input type="text" className="w-full bg-gray-100 p-3 rounded mt-4" placeholder="Enter Name" />
                            <input type="text" className="w-full bg-gray-100 p-3 rounded mt-4" placeholder="Enter Email Address" />
                            <textarea className="w-full bg-gray-100 p-3 rounded mt-4 h-60" placeholder="Message"></textarea>
                            <input type="submit" value="Submit" className="tw-btn tw-btn-primary mt-4 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
