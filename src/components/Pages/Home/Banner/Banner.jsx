
// import { useKeenSlider } from "keen-slider/react"
// import "keen-slider/keen-slider.min.css"
// import img from '../../../../assets/bannerImg/pexels-alax-matias-17042277.jpg'
// import img2 from '../../../../assets/bannerImg/pexels-jakayla-toney-5763335.jpg'

// const Banner = () => {

//   return (
//     <div className="carousel w-full h-[500px]">
//       <div id="slide1" className="carousel-item relative w-full">
//         <img src={img} className="w-full " />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide4" className="btn btn-circle">❮</a>
//           <a href="#slide2" className="btn btn-circle">❯</a>
//         </div>
//       </div>
//       <div id="slide2" className="carousel-item relative w-full">
//         <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide1" className="btn btn-circle">❮</a>
//           <a href="#slide3" className="btn btn-circle">❯</a>
//         </div>
//       </div>
//       <div id="slide3" className="carousel-item relative w-full">
//         <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide2" className="btn btn-circle">❮</a>
//           <a href="#slide4" className="btn btn-circle">❯</a>
//         </div>
//       </div>
//       <div id="slide4" className="carousel-item relative w-full">
//         <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//           <a href="#slide3" className="btn btn-circle">❮</a>
//           <a href="#slide1" className="btn btn-circle">❯</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 55500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-[700px]"
      >
        
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1503506584117-5ed92741077a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full" />
          <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-24">
            <p className="text-2xl text-white  font-semibold w-1/2">Learn drum with  <p className="text-5xl uppercase"><span className="text-[#F45050]">Ashton</span> Irwin</p></p>
            <button className="btn mt-4 ">Enroll now</button>
          </div>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" className="w-full" />
          <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-24">
            <p className="text-2xl text-white  font-semibold w-1/2">Learn piano with  <p className="text-5xl uppercase"><span className="text-[#F45050]">Leif Ove </span> Andsnes</p></p>
            <button className="btn mt-4 ">Enroll now</button>
          </div>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1621784166258-c6fdfff31879?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" className="w-full" />
          <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-24">
            <p className="text-2xl text-white  font-semibold w-1/2">Learn <span className="text-[#F45050]">guiter</span> with  <p className="text-5xl uppercase"><span className="text-[#F45050]">Lzzy</span> Hale</p></p>
            <button className="btn mt-4 ">Enroll now</button>
          </div>
        </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide1" className="carousel-item relative w-full">
          <img src="https://images.unsplash.com/photo-1610716632424-4d45990bcd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80" className="w-full" />
          <div className="absolute  transform -translate-y-1/2 left-5 right-5 top-24">
            <p className="text-2xl text-white  font-semibold w-1/2">Learn music composition with  <p className="text-5xl uppercase"><span className="text-[#F45050]">Jonathon </span>Heyward</p></p>
            <button className="btn mt-4 bg-[#F45050] border-[#F45050] text-white ">Enroll now</button>
          </div>
        </div> 
        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
