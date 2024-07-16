'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import sampleImage from "@/public/assets/images/slider/slider-1.png";

export default function TopSlider() {
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

  return (
    <div className="mx-auto px-10 my-32">
      <div className="flex flex-none justify-between">
        <button onClick={handlePreviousContent} className="hidden md:block">
          <p>Previous</p>
        </button>
        <div className="flex flex-col-reverse items-start lg:flex-row">
          <div className="w-1/2 py-14 space-y-5">
          <p className="text-2xl">Web Design Agency In Nepal</p>
            {sliderData.map((data, index) => (
              <div key={index}>
                <div className={`space-y-5 md:h-64 md:w-64 ${activeIndex === index ? "" : "hidden"}`}>
                  <p className="text-7xl w-min text-navyblue capitalize underline underline-offset-8 font-bold">{data.category_name}</p>
                  <p className="text-xl">{data.category_description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <Image
              src={sampleImage}
              alt="sampleImage"
              width={1000}
            />
          </div>
        </div>
        <button onClick={handleNextContent} className="hidden md:block">
          <p>Next</p>
        </button>
      </div>
      <div className="flex justify-start pl-2 lg:pl-32 xl:pl-72">
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
