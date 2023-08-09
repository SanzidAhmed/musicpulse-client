import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonial = () => {
    return (
        <div className="my-10 container mx-auto">
            <h1 className="text-3xl uppercase text-center ">Testimonial</h1>
            <div className=" mx-auto w-1/2  border-solid border mt-2 border-[#F45050] mb-10"></div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
            >
                <SwiperSlide className="text-center mx-auto">
                    <img src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="h-48 w-48 rounded-full mx-auto" alt="" />
                    <p className=" mx-auto w-[500px] mt-5">You have great teachers who combine unparalleled skills and virtuosity with all-inclusive and ingenious methods of teaching that cover all aspects of guitar, music, and all things in between and beyond.</p>
                    <h1 className="text-3xl mt-8 mb-20">John Doe</h1>
                </SwiperSlide>
                <SwiperSlide className="text-center mx-auto">
                    <img src="https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="h-48 w-48 rounded-full mx-auto" alt="" />
                    <p className=" mx-auto w-[500px] mt-5">The benefits I have received by taking guitar lessons from you, have been numerous and priceless! Within the 2+ yrs, we have known each other, I have grown as a person and a player, thanks to Guitar Band.</p>
                    <h1 className="text-3xl mt-8 mb-20">Rico Miller</h1>
                </SwiperSlide>
                <SwiperSlide className="text-center mx-auto">
                    <img src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" className="h-48 w-48 rounded-full mx-auto" alt="" />
                    <p className=" mx-auto w-[500px] mt-5">I would say that the benefits of taking guitar lessons with Guitar Band were that I had somebody to constantly motivate me from a level I wanted to be at. Someone who knew what I wanted to learn and helped me.</p>
                    <h1 className="text-3xl mt-8 mb-20">John Abraham</h1>
                </SwiperSlide>
                <SwiperSlide className="text-center mx-auto">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="h-48 w-48 rounded-full mx-auto" alt="" />
                    <p className=" mx-auto w-[500px] mt-5">You have great teachers who combine unparalleled skills and virtuosity with all-inclusive and ingenious methods of teaching that cover all aspects of guitar, music, and all things in between and beyond.</p>
                    <h1 className="text-3xl mt-8 mb-20">Kelly McMillan</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonial;