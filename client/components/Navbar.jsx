import Image from 'next/image'
import NavLogo from "@/public/assets/images/logo/logo@2x.png"
import BoxLogo from "@/public/assets/images/img-box/button.svg"
import Menu from "@/public/assets/images/icon/menu.png"
import MenuClose from "@/public/assets/images/icon/close.png"

export default function Navbar() {
    const NavHeadings = [
        {text : "Home",
        path : "/home",
        subpath : ""},

        {text : "Service", 
        path : "/services",
        subpath : [
            {subText : "Digital Marketing", 
            subsubPath : "/service/digital-marketing"},

            {subText : "Seo Service",
            subsubPath : "/service/seo-service"},

            {subText : "Web Development",
            subsubPath : "/service/web-development"},

            {subText : "Social Media Marketing",
            subsubPath : "/service/social-media-marketing"},

            {subText : "Graphics Design",
            subsubPath : "/service/graphics-desigining"},

            {subText : "Video Creation",
            subsubPath : "/service/video-creation"},

            {subText : "Mobile App Development",
            subsubPath : "/service/mobile-app-development"},
        ]},

        {text : "Pages",
        path : "/page",
        subpath : [
            {subText : "About",
            subsubPath : "/pages/about"},

            {subText : "Our Team",
            subsubPath : "/pages/our-team"},

            {subText : "Our FAQ",
            subsubPath : "/pages/our-faq"},

            {subText : "Career",
            subsubPath : "/pages/career"}
        ]},

        {text : "Portfolio",
        path : "/home",
        subpath : ""},

        {text : "Blog",
        path : "/blog",
        subpath : ""},

        {text : "Contact",
        path : "/contact",
        subpath : ""},

        {text : "Search Icon",
        path : "/",
        subpath : ""}
    ]

  return (
    <>
    <div className='mx-auto'>
        <div className='flex flex-row justify-evenly items-center pt-5'>
            <div className='cursor-pointer'>
                <Image
                src={NavLogo}
                alt='NavLogo'
                width={190}
                height={190}
            />
            </div>
            <div className='hidden lg:flex flex-row space-x-8 '>
                {NavHeadings.map((heading, index) => 
                    heading.subpath ? (
                        <div key={index}>{heading.text}</div>
                    ) : (
                        <div key={index} className=''>{heading.text}</div>
                    )
                )}
            </div>
            <div className='hidden sm:flex flex-row space-x-10'>
                <div>
                    <Image
                        src={BoxLogo}
                        alt='BoxLogo'
                    />
                </div>
                <div>
                    <button>
                        <span>Get Started</span>
                    </button>
                </div>
            </div>
            <div className='flex flex-row lg:hidden'>
                    <Image
                        src={Menu}
                        alt='MenuIcon'
                        width={25}
                        height={25}
                    />
                </div>
        </div>
    </div>
    </>
  )
}
