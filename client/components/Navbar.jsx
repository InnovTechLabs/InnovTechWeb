import Image from 'next/image'
import NavLogo from "@/public/assets/images/logo/logo@2x.png"
import BoxLogo from "@/public/assets/images/img-box/button.svg"
import Menu from "@/public/assets/images/icon/menu.png"
import MenuClose from "@/public/assets/images/icon/close.png"
import DropDown from "@/public/assets/images/icon/dropdown.svg"

export default function Navbar() {
    const NavHeadings = [
        {text : "Home",
        path : "/home",
        subpath : ""},

        {text : "Service", 
        path : "/service",
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
            subsubPath : "/page/about"},

            {subText : "Our Team",
            subsubPath : "/page/our-team"},

            {subText : "Our FAQ",
            subsubPath : "/page/our-faq"},

            {subText : "Career",
            subsubPath : "/page/career"}
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
        path : "/search",
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
                        <div key={index} className='group relative dropdown tracking-wider flex flex-row items-center cursor-pointer'>
                            {heading.text}{<Image src={DropDown} alt = "DropDown" width={20} height={20}/>}
                            <div className="group-hover:block dropdown-menu absolute hidden h-0 w-64 top-3 py-7">
                                    {heading.subpath.map((subheadings) => (
                                        <div className='group block hover:text-purple-700 cursor-pointer py-2'>{subheadings.subText}</div>
                                    ))}
                            </div>
                        </div>
                    ) : (
                        <div key={index} className='cursor-pointer'>{heading.text}</div>
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
