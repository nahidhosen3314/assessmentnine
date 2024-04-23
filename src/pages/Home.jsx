import Hero from "../components/Hero";
import RecentBlogs from "../components/RecentBlogs";
import RecentProperties from "../components/RecentProperties";
import Subscribe from "../components/Subscribe";
import Testimonial from "../components/Testimonial";
import useTitle from "../components/useTitle";

const Home = () => {
    useTitle({ title: "Home" });

    return (
        <>
            <Hero></Hero>
            <RecentProperties></RecentProperties>
            <Testimonial></Testimonial>
            <RecentBlogs></RecentBlogs>
            <Subscribe></Subscribe>
        </>
    );
};

export default Home;
