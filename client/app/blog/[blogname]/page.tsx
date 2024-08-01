'use client'

import Navbar from '@/components/Navbar'
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import BlogStatsCard from "@/components/UI/Cards/BlogStatsCard"
import AnimateButton from '@/components/UI/Buttons/AnimateButton'
import AuthorCard from "@/components/UI/Cards/AuthorCard"
import CircleLinkButton from '@/components/UI/Buttons/CircleLinkButton';
import RecentPost from "@/components/RecentPost"
import CommentCard from "@/components/UI/Cards/CommentCard"
import NewsLetter from '@/components/NewsLetter'
import ReplyBox from "@/components/ReplyBox"
import Footer from '@/components/Footer'
import PopularTag from "@/components/UI/Cards/PopluarTag"

import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

import generateSlug from '@/utils/slug'
import formatDate from '@/static/formatDate'

import go from "@/public/assets/images/icon/go.svg"
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import blogImage from "@/public/assets/images/blog/blog-details-1.jpg"
import postImage from "@/public/assets/images/blog/blog-2.jpg"
import marketingProjectImage from "@/public/assets/images/img-box/about-3.png"
import facebook from "@/public/assets/images/icon/facebook.svg"
import twitter from "@/public/assets/images/icon/twitter.svg"
import instagram from "@/public/assets/images/icon/instagram.svg"
import linkedin from "@/public/assets/images/icon/linkedin.svg"
import authorImage from "@/public/assets/images/blog/author-1.jpg"
import commentImage from "@/public/assets/images/blog/avatar-1.jpg"
import { useRouter } from 'next/navigation'

export default function BlogDetail({params} : {params : {blogname : String}}) {
  const [category, setCategory] = useState([]);
  const [blog, setBlog] = useState(null);
  const [member, setMember] = useState(null);
  const [comments, setComments] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/category/all-categories");
      setCategory(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  const fetchBlogData = async () => {
    const slug = generateSlug(params.blogname);
    try {
      const response = await axios.get(`http://localhost:5000/blog/${slug}`);
      setBlog(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setRedirect(true);
      } else {
        console.error("Error fetching blog data:", err);
      }
    }
  };

  const fetchMemberData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/member/all-members");
      const members = response.data;
      if (blog && blog.member_id) {
        const matchedMember = members.find((m) => m.id === blog.member_id);
        setMember(matchedMember || null);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const fetchCommentsData = async () => {
    try {
      if (blog && blog.id) {
        const response = await axios.get(`http://localhost:5000/comment/all-comments/${blog.id}`);
        setComments(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCategoryData();
    fetchBlogData();
  }, []);

  useEffect(() => {
    if (blog) {
      fetchMemberData();
      fetchCommentsData();
    }
  }, [blog]);

  useEffect(() => {
    if (redirect) {
      router.push('/404');
    }
  }, [redirect, router]);
  
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
          {
            blog && member && comments ? 
            <>
              <div className='[box-shadow:8_8_0_0#8B54FF] w-fit'>
                <Image
                src={`/assets/images/blog/${blog.blog_image}`}
                alt='blogImage'
                width={1000}
                height={1000}
                />
              </div>
              <div>
                <BlogStatsCard author={member.member_name} date={`${formatDate(blog.createdAt)}`} comments={comments.length}/>
              </div>
              <div>
                <h1 className='text-2xl font-bold'>{blog.blog_title}</h1>
                <p>{blog.blog_content}</p>
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
                  <AuthorCard author={member.member_name} about={member.member_about} image={member.member_image}/>
              </div>
              <div className='flex flex-col md:flex-row justify-between items-center'>
                <RecentPost image={postImage} date={"September 25, 2022"}/>
                <RecentPost image={postImage} date={"September 25, 2022"}/>
              </div>
              <div className='outline outline-1 flex flex-col p-5 space-y-10'>
                  <p className='text-3xl'>Recent Comments</p>
                  {comments.length? (
                    comments.map((c) => (
                      <div key={c.id}>
                        <CommentCard image={commentImage} name={c.fullname} date={c.createdAt} comment={c.comment}/>
                      </div>
                    ))
                  ) : (
                  <div className='flex md:flex-row flex-col justify-center items-center bg-cream [box-shadow:5_5_0_0#120A21] p-5 space-y-3 space-x-5'>
                      No Comments
                  </div>
                  )}
              </div>
                </> : 
                <>
                </>
              }
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
