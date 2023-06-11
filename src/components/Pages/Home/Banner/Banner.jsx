
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import img from '../../../../assets/bannerImg/pexels-alax-matias-17042277.jpg'
import img2 from '../../../../assets/bannerImg/pexels-jakayla-toney-5763335.jpg'

const Banner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 5000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  return (
    <div className="h-96">
      <div ref={sliderRef} className="keen-slider max-h-screen">
        <div className="keen-slider__slide number-slide1"><img src={img} alt="" /></div>
        <div className="keen-slider__slide number-slide2"><img src={img2} alt="" /></div>
      </div>
    </div>
  );
};

export default Banner;


