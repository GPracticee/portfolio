import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="">
      <Image
        src="/images/author1.jpg"
        width={400}
        height={400}
        className="rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan"><span className="text-green">John</span> Doe</h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>

      <Link
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download=""
      >
        <GiTie className="w-6 h-6 text-black" /> Download resume
      </Link>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <Link href="">
          <AiFillGithub className="w-6 h-8 cursor-pointer" />{" "}
        </Link>
        <Link href="">
          <AiFillLinkedin className="w-6 h-8 cursor-pointer" />{" "}
        </Link>
        <Link href="">
          <AiFillYoutube className="w-6 h-8 cursor-pointer" />{" "}
        </Link>
      </div>
      <div className="py-4 my-5 bg-gray-200 " style={{marginLeft:"-1rem",marginRight:"-1rem"}}>
        <div className="flex items-center justify-center space-x-2">
        <GoLocation />
          <span>
             India
          </span>
        </div>
        <p className="my-2">abc@gmail.com</p>
        <p className="my-2">9865689565</p>
      </div>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400"
        onClick={()=>window.open('mailto:abc@gmail.com')}  >Email me</button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">Toggle</button>
    </div>
  );
};

export default Sidebar;
