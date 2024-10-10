import CreatePost from "@/components/CreatePost";
import Nav from "@/components/Nav";
import Post from "@/components/Post";
import prisma from "@/lib";

export default async function Posts() {
  const posts = await prisma.post.findMany();
  return (
    <>
      <Nav />
      <div className="flex justify-center">
        <div className="w-min h-min border-2 p-4 rounded-3xl bg-black bg-opacity-70 mt-6 ">
          <CreatePost />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="border-t border-white mt-6 w-[1600px]"></div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </>
  );
}
