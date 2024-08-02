'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import sampleImage from "@/public/assets/images/slider/slider-1.png";
import worldmap from "@/public/assets/images/slider/mark-slider-2.png"
import StaticButton from "@/components/UI/Buttons/StaticButton"
import AnimateButtonSecondary from "./UI/Buttons/AnimateButtonSecondary";
import PlayButton from "@/components/UI/Buttons/PlayButton"
import styles from "@/public/styles/imageanimate.module.css"


export default function TopSlider(props) {
  const [sliderData, setsliderData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetchSliderData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextContent();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex, sliderData]);

  const fetchSliderData = async () => {
    await axios.get("http://localhost:5000/category/all-categories").then((result) => {
      setsliderData(result.data);
    }).catch((err) => {
      console.log(err);
    });
  }

  const handleNextContent = () => {
    setActiveIndex((activeIndex + 1) % sliderData.length);
  }

  const handlePreviousContent = () => {
    setActiveIndex(activeIndex === 0 ? sliderData.length - 1 : activeIndex - 1);
  }

  const handlePlayVideo = (id) => {
    props.onVideoPlayClick(id);
  }


  return (
    <div className="mx-10 my-28">
      <div className="flex flex-none justify-around py-5">
        <button onClick={handlePreviousContent} className="hidden md:block">
          <FontAwesomeIcon
            icon={faAngleLeft}
            size="lg"
            className="bg-white text-purple shadow-lg py-4 px-5 rounded-full transition-all delay-150 ease-in-out hover:bg-purple hover:text-white hover:[box-shadow:-3_-3_0_0_#120A21]"
          />
        </button>
        <div className="flex flex-col-reverse items-start justify-around lg:flex-row lg:justify-around md:mx-52">
          <div className="w-fit" >          
            {sliderData.map((data, index) => (
              <div key={index} className="space-y-10">
                <div className={`w-[400] sm:w-[500] ${activeIndex === index? "" : "hidden"}`}>
                  <StaticButton text={`Best ${data.category_name} Agency In Nepal`}/>
                </div>
                <div className={`space-y-5 ${activeIndex === index ? "" : "hidden"}`}>
                  <h1 className="text-6xl w-min text-navyblue capitalize underline underline-offset-8 font-bold">{data.category_name}</h1>
                  <h3 className="">{data.category_description}</h3>
                </div>
                <div className = {`flex flex-row space-x-5 items-center ${activeIndex === index ? "" : "hidden"}`}>
                  <button>
                    <AnimateButtonSecondary text={"Discover More"}/>
                  </button>
                  <button onClick={() => handlePlayVideo(data.id)}>
                    <PlayButton/>
                  </button>
                  <p>Watch Video</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative left-0 bottom-0 top-0 right-0 w-3/4 mx-5 my-5">
            <div className="absolute z-10 p-4">
              <Image
                src={sampleImage}
                alt="sampleImage"
                width={600}
                height={600}
              />
            </div>
            <div className="mx-auto z-0 ">
              <Image
                src={worldmap}
                alt="worldmap"
                className="w-[350] md:w-[650]"
              />
            </div>
          </div>
        </div>
        <button onClick={handleNextContent} className="hidden md:block">
          <FontAwesomeIcon
              icon={faAngleRight}
              size="lg"
              className="bg-white text-purple shadow-lg py-4 px-5 rounded-full transition-all delay-150 ease-in-out hover:bg-purple hover:text-white hover:[box-shadow:-3_-3_0_0_#120A21]"
            />
        </button>
      </div>
      <div className="flex justify-start pl-16 lg:pl-32 xl:pl-72">
        <div className="space-x-2">
          {sliderData.map((_, index) => (
            <button key={index} onClick={() => setActiveIndex(index)}>
              <FontAwesomeIcon 
                icon={faCircle}
                className={activeIndex === index ? "border-[1px] size-2 rounded-full p-2 transition-all ease-in-out" : "text-black size-2 transition-all delay-100 ease-in-out"}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
