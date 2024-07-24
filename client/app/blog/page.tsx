'use client'
import React, {useState, useEffect} from 'react'
import Navbar from '@/components/Navbar'
import CurrentPageCard from '@/components/UI/Cards/CurrentPageCard'
import BlogPostCard from "@/components/UI/Cards/BlogPostCard"
import Image from 'next/image';
import markinner from "@/public/assets/images/mark/mark-inner-page.png";
import blogImage from "@/public/assets/images/blog/blog-1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {faCalendar} from "@fortawesome/free-regular-svg-icons"
import go from "@/public/assets/images/icon/go.svg"
import axios from 'axios'
import postImage from "@/public/assets/images/blog/blog-2.jpg"

export default function Blog() {
    const [category, setCategory] = useState([])

    const fetchCategoryData = async() => {
        const response = await axios.get("http://localhost:5000/category/all-categories").then((result) => {
            setCategory(result.data)
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchCategoryData()
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
            <div className='flex-col space-y-10'>
                <BlogPostCard date={"September 25, 2022"} title={"How Partytown Eliminates Website Bloat From Party"} content={"Drive more leads, sales, and revenue for business digital marketing"} image={blogImage}/>
                <BlogPostCard date={"September 25, 2022"} title={"How Partytown Eliminates Website Bloat From Party"} content={"Drive more leads, sales, and revenue for business digital marketing"} image={blogImage}/>
                <BlogPostCard date={"September 25, 2022"} title={"How Partytown Eliminates Website Bloat From Party"} content={"Drive more leads, sales, and revenue for business digital marketing"} image={blogImage}/>
                <BlogPostCard date={"September 25, 2022"} title={"How Partytown Eliminates Website Bloat From Party"} content={"Drive more leads, sales, and revenue for business digital marketing"} image={blogImage}/>
                <BlogPostCard date={"September 25, 2022"} title={"How Partytown Eliminates Website Bloat From Party"} content={"Drive more leads, sales, and revenue for business digital marketing"} image={blogImage}/>
                <BlogPostCard date={"September 25, 2022"} title={"How Partytown Eliminates Website Bloat From Party"} content={"Drive more leads, sales, and revenue for business digital marketing"} image={blogImage}/>
            </div>
            <div className='flex flex-col'>
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

                    <div className='flex flex-row space-x-14 p-4 group '>
                        <div className='relative overflow-hidden transition-all duration-500 [box-shadow:5_5_0_0#120A21] group-hover:[box-shadow:5_5_0_0#8B54FF] h-fit'>
                            <div className='transition-transform duration-1000 ease-in-out group-hover:scale-125'>
                                <Image
                                    src={postImage}
                                    alt='postImage'
                                    width={100}
                                />
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='flex text-purple items-center space-x-2'>
                                <FontAwesomeIcon icon={faCalendar}/> 
                                <p>September 25, 2022</p>  
                            </div>
                            <p className='group-hover:text-lightpurple font-bold'>Fluid Sizing Instead Of Media Queries</p>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-14 p-4 group '>
                        <div className='relative overflow-hidden transition-all duration-500 [box-shadow:5_5_0_0#120A21] group-hover:[box-shadow:5_5_0_0#8B54FF] h-fit'>
                            <div className='transition-transform duration-1000 ease-in-out group-hover:scale-125'>
                                <Image
                                    src={postImage}
                                    alt='postImage'
                                    width={100}
                                />
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='flex text-purple items-center space-x-2'>
                                <FontAwesomeIcon icon={faCalendar}/> 
                                <p>September 25, 2022</p>  
                            </div>
                            <p className='group-hover:text-lightpurple font-bold'>Fluid Sizing Instead Of Media Queries</p>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-14 p-4 group '>
                        <div className='relative overflow-hidden transition-all duration-500 [box-shadow:5_5_0_0#120A21] group-hover:[box-shadow:5_5_0_0#8B54FF] h-fit'>
                            <div className='transition-transform duration-1000 ease-in-out group-hover:scale-125'>
                                <Image
                                    src={postImage}
                                    alt='postImage'
                                    width={100}
                                />
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='flex text-purple items-center space-x-2'>
                                <FontAwesomeIcon icon={faCalendar}/> 
                                <p>September 25, 2022</p>  
                            </div>
                            <p className='group-hover:text-lightpurple font-bold'>Fluid Sizing Instead Of Media Queries</p>
                        </div>
                    </div>

                    <div className='flex flex-row space-x-14 p-4 group '>
                        <div className='relative overflow-hidden transition-all duration-500 [box-shadow:5_5_0_0#120A21] group-hover:[box-shadow:5_5_0_0#8B54FF] h-fit'>
                            <div className='transition-transform duration-1000 ease-in-out group-hover:scale-125'>
                                <Image
                                    src={postImage}
                                    alt='postImage'
                                    width={100}
                                />
                            </div>
                        </div>
                        <div className='flex-col'>
                            <div className='flex text-purple items-center space-x-2'>
                                <FontAwesomeIcon icon={faCalendar}/> 
                                <p>September 25, 2022</p>  
                            </div>
                            <p className='group-hover:text-lightpurple font-bold'>Fluid Sizing Instead Of Media Queries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
