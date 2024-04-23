import { Pagination, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { VscQuote } from "react-icons/vsc";

const Testimonial = () => {
    return (
        <div className="container tm-sec">
            <div className="max-w-2xl mx-auto text-center py-20">
                <Swiper
                    modules={[Pagination, Autoplay, FreeMode]}
                    pagination={{ clickable: true }}
                    autoplay={{ autoplay: true }}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-3">
                            <VscQuote className="text-5xl text-primary mb-2"/>
                            <p>Working with Luxury Real Estate was an absolute pleasure. Their team professionalism, attention to detail, and market expertise made the home buying process seamless and stress-free. I could not be happier with my new home, and I highly recommend Luxury Real Estate to anyone in search of their dream home</p>
                            <h5>Mark Neel</h5>
                            <span className="text-primary">CEO (Grodin Group)</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col items-center gap-3">
                            <VscQuote className="text-5xl text-primary mb-2"/>
                            <p>Working with Luxury Real Estate was an absolute pleasure. Their team professionalism, attention to detail, and market expertise made the home buying process seamless and stress-free. I could not be happier with my new home, and I highly recommend Luxury Real Estate to anyone in search of their dream home</p>
                            <h5>John Doe</h5>
                            <span className="text-primary">QA Engineer</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;