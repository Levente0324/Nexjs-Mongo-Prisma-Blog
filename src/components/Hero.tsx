import Link from "next/link";
import Example from "./Example";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-violet-600 text-white w-full h-full font-amsterdam flex flex-row content-center">
      <div className="w-[1000px] pt-36 px-36 ml-24 text-center">
        <h1 className="text-9xl -mb-16">Welcome to</h1>
        <h1 className="text-[170px] mb-8 text-cool tracking-wide">MyBlogs</h1>
        <p className="text-5xl">
          If you want to post or see all the existing posts, please{" "}
          <a className="text-cool">Sign in!</a>
        </p>
        <Link href="./posts">
          <button className="bg-black w-56 h-20 mt-12 text-cool text-4xl tracking-wider font-amsterdam rounded-2xl hover:bg-hovercool hover:text-black hover:border-black border-2 border-white">
            Homepage
          </button>
        </Link>
      </div>
      <Example />
    </div>
  );
};

export default Hero;
