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
    <div className="mx-auto px-10">
      <div className="flex flex-none justify-around items-center">
        <button onClick={handlePreviousContent} className="hidden md:block">
          <p>Previous</p>
        </button>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="flex flex-col w-50 h-96 overflow-hidden">
            {sliderData.map((data, index) => (
              <div key={index} className={`py-24 ${activeIndex === index ? "block" : "hidden"}`}>
                <p className="text-2xl">Web Design Agency In Nepal</p>
                <p className="text-7xl">{data.category_name}</p>
                <p className="text-xl">{data.category_description}</p>
              </div>
            ))}
            <div className="flex flex-row justify-center space-x-2">
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
          <div className="flex flex-1 w-50 h-96 overflow-hidden">
            <Image
              src={sampleImage}
              alt="sampleImage"
              className="object-cover w-full h-full"
              width={750}
              height={750}
            />
          </div>
        </div>
        <button onClick={handleNextContent} className="hidden md:block">
          <p>Next</p>
        </button>
      </div>
    </div>
  )
}
