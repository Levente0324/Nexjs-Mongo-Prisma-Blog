import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Nav = () => {
  return (
    <div className="w-full bg-black text-white flex flex-row space-x-96 h-20 content-center">
      <div className="mr-96 ml-8 content-center w-[100px] text-3xl font-amsterdam tracking-widest text-cool">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="text-5xl mt-4 ml-96">
        <h1 className="text-cool font-amsterdam tracking-wide">MyBlogs</h1>
      </div>
    </div>
  );
};

export default Nav;
