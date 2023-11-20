import Link from 'next/link';
import React from 'react'

export const navItemsData=[
{
name:"Home",
url:"/",
},
{
name:"Courses",
url:"/courses"
},
{
name:"About",
url:"/about"
},
{
name:"Policy",
url:"/policy"
},
{
name:"FAQ",
url:"/faq"
}
]
type Props={
    activeItem:number;
    isMobile:boolean
}
const NavItems : React.FC<Props> = ({activeItem,isMobile}) => {
  return (
<>
<div className="hidden 800px:flex">
{
    navItemsData && navItemsData.map((i,index)=>(
<Link href={`${i.url}`} key={index} passHref>
<span className={`${activeItem === index ? "dark:text-[#37a39a] text-[crimson]":"dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[400] `}>
{i.name}
</span>
</Link>
    ))
}
</div>
{
    isMobile &&(
        <div className='800px:hidden mt-5'>
            <div className='w-full text-center py-6'>
                <Link href={"/"} passHref>
                <span className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
ELearning
</span>
                </Link>

            </div>
{
    navItemsData && navItemsData.map((i,index)=>(
<Link href="/" passHref>
<span className={`${activeItem === index ? "dark:text-[#37a39a] text-[crimson]":"dark:text-white text-black"} text-[18px] px-6 font-Poppins font-[400] `}>
{i.name}
 </span>

</Link>
    ))
}
</div>
    )
}
</>
    )
}
export default NavItems;
{/*
<div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
    <h2 className="dark:text-white text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[]">
Improve Your Online Learning Experience Better Instantly
    </h2>
<br/>
<p className="dark:text-[#edfff4] text-[#000000ac] font-Josefin font-[600] text-[18px] 1500px:!w-[55%] 1100px:!w-[78%]">We have 40k+ Online courses & 500k+ Online registered student. Find your desired courses</p>
<br/>
<br/>
<div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] h-[50px] bg-transparent relative">
<input type="search" placeholder="Search Courses..." className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none"/>
<div className="absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 rounded-r-[5px]">
<BiSearch className="text-white" size={30}/>
</div>
</div>

<br/>
<br/>
<div className="1500px:w-[55%] 1100px:w-[78%] w-[90%] flex items-center">
<img src="https://edmy-react.hibootstrap.com/images/banner/client-3.jpg" className="rounded-full"/>
<img src="https://edmy-react.hibootstrap.com/images/banner/client-1.jpg" className="rounded-full ml-[-20px]"/>
<img src="https://edmy-react.hibootstrap.com/images/banner/client-2.jpg" className="rounded-full ml-[-20px]"/>
<p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] 1000px:pl-3 text-[18px] font-[600]">
500K+ People already trusted us.{""}
<Link href="/courses" className="dark:-[#46e256] text-[crimson]">
View Courses
</Link>{""}
</p>

</div>
<br/>
</div> */}
