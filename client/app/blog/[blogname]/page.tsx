'use client'
import React, {useState, useEffect} from 'react'
import Navbar from '@/components/Navbar'
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import Image from 'next/image';
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import blogImage from "@/public/assets/images/blog/blog-details-1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from "@fortawesome/free-regular-svg-icons"
import go from "@/public/assets/images/icon/go.svg"
import postImage from "@/public/assets/images/blog/blog-2.jpg"
import AnimateButton from '@/components/UI/Buttons/AnimateButton'
import PopularTag from "@/components/UI/Cards/PopluarTag"
import marketingProjectImage from "@/public/assets/images/img-box/about-3.png"
import NewsLetter from '@/components/NewsLetter'
import BlogStatsCard from "@/components/UI/Cards/BlogStatsCard"
import axios from 'axios';
import Footer from '@/components/Footer'
import CircleLinkButton from '@/components/UI/Buttons/CircleLinkButton';
import facebook from "@/public/assets/images/icon/facebook.svg"
import twitter from "@/public/assets/images/icon/twitter.svg"
import instagram from "@/public/assets/images/icon/instagram.svg"
import linkedin from "@/public/assets/images/icon/linkedin.svg"
import AuthorCard from "@/components/UI/Cards/AuthorCard"
import authorImage from "@/public/assets/images/blog/author-1.jpg"
import RecentPost from "@/components/RecentPost"
import CommentCard from "@/components/UI/Cards/CommentCard"
import commentImage from "@/public/assets/images/blog/avatar-1.jpg"
import ReplyBox from "@/components/ReplyBox"

export default function BlogDetail({params} : {params : {blogname : String}}) {
  const [category, setCategory] = useState([])
  const [blogs, setBlogs] = useState([])

  const fetchCategoryData = async() => {
      const response = await axios.get("http://localhost:5000/category/all-categories").then((result) => {
          setCategory(result.data)
      }).catch((err) => {
          console.log(err);
      });
  }

  const fetchBlogData = async() => {
    const response = await axios.get("http://localhost:5000/blog/all-blogs").then((result) => {
      setBlogs(result.data)
    }).catch((err) => {
      console.log(err);
    });
  }

  useEffect(() => {
      fetchCategoryData()
      fetchBlogData()
  },[])
  return (
    <>
    <div>
      <Navbar/>
      <div className='flex flex-col space-y-16 space-x-0 md:space-x-16 md:flex-row justify-around items-center py-32 mx-10'>
        <div>
            <CurrentPageCard text={"Blog Detail"} parent={"Home"} child={"Blogs"}/>
        </div>
        <div>
            <Image
                src={markinner}
                alt='markinner'
            />
        </div>
      </div>
      <div className='bg-white py-10'>
        <div className='flex flex-col lg:flex-row space-x-14 justify-around items-center lg:items-start mx-10'>
          <div className='flex flex-col justify-center space-y-10 lg:w-1/2 w-full'>
            <div className='[box-shadow:8_8_0_0#8B54FF] w-fit'>
              <Image
              src={blogImage}
              alt='blogImage'
              />
            </div>
            <div>
              <BlogStatsCard author={"James B. Schwarz"} date={"September 25, 2022"} comments={"Comments (05)"}/>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>How Partytown Eliminates Website Bloat From Party Overcoming Imposter Syndrome</h1>
              <p>Sit amet consectetur adipiscing elit. Et id purus sem morbi. Integer a sollicitudin ac eget sed consectetur et nam. Elementum eu egestas faucibus bibendum aliquet ullamcorper quis aliquet lorem. Mor phasellus dictum tellus, massa congue sapien mollis suspendisse pretium. Malesuada id enim vitae dignissim. Sed sit mattis adipiscing lectus consectetur. Sagittis, praesent ullamcorper cras ac at iaculis elementum in. Faucibus massa libero sit laoreet. Scelerisque egestas molestie velit ultrices sed senectus rhoncus. Eget eget enim vitae suspendisse tincidunt mi nibh orci semper. Pellentesque turpis urna, dolor et et sed egestas ac. Mi velit, quam pretium, leo. Aliquam purus erat aliquet diam tortor</p>
            </div>
            <div>
              <p>Popular Tag : Marketing, Web Development, Agency </p>
            </div>
            <div className='flex flex-row items-center space-x-3'>
              <p>Share News</p>
              <CircleLinkButton image={facebook}/>
              <CircleLinkButton image={twitter}/>
              <CircleLinkButton image={twitter}/>
              <CircleLinkButton image={linkedin}/>
            </div>
            <div>
              <AuthorCard author={"Thomas B. Gibson"} about={"Dictum tellus massa congue sapien mollis suspendisse pretiumseen Malesuada id enim vitae dignissim. Sed sit mattis adipiscineg lectusey consectetur. Sagittis, praesent ullamcorper cras ac"} image={authorImage}/>
            </div>
            <div className='flex justify-between items-center'>
              <RecentPost image={postImage} date={"September 25, 2022"}/>
              <RecentPost image={postImage} date={"September 25, 2022"}/>
            </div>
            <div className='outline outline-1 flex flex-col p-5 space-y-10'>
                <p className='text-3xl'>Recent Comments</p>
                <CommentCard image={commentImage} name={"Stuart G. Buckley"} date={"5 minutes ago"} comment={"Dictum tellus massa congue sapien mollis suspendisse pretiumseen Malesuada id enim vitae dignissim. Sed sit mattis adipiscineg"}/>
                <CommentCard image={commentImage} name={"Stuart G. Buckley"} date={"5 minutes ago"} comment={"Dictum tellus massa congue sapien mollis suspendisse pretiumseen Malesuada id enim vitae dignissim. Sed sit mattis adipiscineg"}/>
                <CommentCard image={commentImage} name={"Stuart G. Buckley"} date={"5 minutes ago"} comment={"Dictum tellus massa congue sapien mollis suspendisse pretiumseen Malesuada id enim vitae dignissim. Sed sit mattis adipiscineg"}/>
            </div>
            <div>
              <ReplyBox/>
            </div>
          </div>
          <div className='flex flex-col py-10 lg:py-0 space-y-10'>
                <div className='outline outline-1 p-10 space-y-5'>
                    <p className='font-bold text-xl'>Search</p>
                    <div>
                        
                    </div>
                    <div className='relative flex [box-shadow:5_5_0_0#120A21]'>
                        <input type="text" className=' bg-purple py-3 px-4 text-white placeholder-white w-full focus:outline focus:rounded-none' placeholder='Search Here'/>
                        <div className='absolute top-1/2 transform -translate-y-1/2 right-3'>
                            <FontAwesomeIcon icon={faSearch} color='white'/>
                        </div>
                    </div>
                </div>

                <div className='outline outline-1 p-10 space-y-5'>
                    <p>Category</p>
                    {category.map((c) => (
                        <div key={c.category_name} className='bg-cream cursor-pointer flex flex-row items-center justify-between py-4 px-2 [box-shadow:5_5_0_0#120A21] font-bold font-manrope transition-all duration-200 hover:bg-purple hover:text-white hover:[box-shadow:5_5_0_0#120A21]'>
                            <p className='capitalize'>{c.category_name}</p>
                            <p>
                                <Image
                                src={go}
                                alt='go'
                                width={20}
                                />
                            </p>
                        </div>
                    ))}

                </div>

                <div className='outline outline-1 p-4'>
                    <p>Recent Post</p>

                    <RecentPost image={postImage} date={"September 25, 2022"}/>
                    <RecentPost image={postImage} date={"September 25, 2022"}/>
                    <RecentPost image={postImage} date={"September 25, 2022"}/>
                    <RecentPost image={postImage} date={"September 25, 2022"}/>
                </div>
                <div className='flex flex-col justify-center items-center p-14 space-y-10 bg-cream'>
                    <p>Lets Start Making New Marketing Project</p>
                    <div>
                        <AnimateButton text={"Get Started"}/>
                    </div>
                    <div>
                        <Image
                            src={marketingProjectImage}
                            alt='marketingProjectImage'
                        />
                    </div>
                </div>


                <div className='outline outline-1 p-4'>
                    <p>Popular Tag</p>
                    <div className='p-5 space-y-5 '>
                        <div className='flex flex-row justify-around'>    
                            <PopularTag text = {"Name"}/>
                            <PopularTag text = {"Name"}/>
                            <PopularTag text = {"Name"}/>
                        </div>
                        <div className='flex flex-row justify-around'>    
                            <PopularTag text = {"Name"}/>
                            <PopularTag text = {"Name"}/>
                            <PopularTag text = {"Name"}/>
                        </div>
                        <div className='flex flex-row justify-around'>    
                            <PopularTag text = {"Name"}/>
                            <PopularTag text = {"Name"}/>
                            <PopularTag text = {"Name"}/>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>

      </div>
      <NewsLetter/>
      <Footer/>
    </div>
    </>
  )
}
