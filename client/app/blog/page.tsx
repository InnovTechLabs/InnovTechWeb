'use client'
import Navbar from '@/components/Navbar'
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import BlogPostCard from "@/components/UI/Cards/BlogPostCard"
import Image from 'next/image';
import AnimateButton from '@/components/UI/Buttons/AnimateButton'
import PopularTag from "@/components/UI/Cards/PopluarTag"
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from "@fortawesome/free-regular-svg-icons"

import generateSlug from '@/utils/slug';

import go from "@/public/assets/images/icon/go.svg"
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import blogImage from "@/public/assets/images/blog/blog-1.jpg"
import postImage from "@/public/assets/images/blog/blog-2.jpg"
import marketingProjectImage from "@/public/assets/images/img-box/about-3.png"
import RecentPost from '@/components/RecentPost'


export default function Blog() {
    const [category, setCategory] = useState([])
    const [blogs, setBlogs] = useState([]);

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
        fetchCategoryData();
        fetchBlogData()
    },[])

  return (
    <>
    <Navbar/>
    <div className='flex flex-col space-y-16 space-x-0 md:space-x-16 md:flex-row justify-around items-center py-32 mx-10'>
        <div>
            <CurrentPageCard text={"Blogs"} parent={"Home"} child={"Blogs"}/>
        </div>
        <div>
            <Image
                src={markinner}
                alt='markinner'
            />
        </div>
    </div>

    <div className='bg-white p-10 '>
        <div className='flex flex-col lg:flex-row space-x-14'>
            <div className='flex-col space-y-10 w-fit lg:w-3/4'>
                {blogs.slice(0,10).map((blog) => (
                    <div key={blog.id} className='cursor-pointer'>
                        <Link href = {`/blog/${generateSlug(blog.blog_title)}`}>
                            <BlogPostCard date={blog.createdAt} title={blog.blog_title} content={blog.blog_content} image={blog.blog_image}/>
                        </Link>
                    </div>
                ))}
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

                    <RecentPost image={blogImage} date={"September 22, 2025"} />
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
        <div className='py-10'>
            <NewsLetter/>
        </div>
        <Footer/>
    </div>
    </>
  )
}
