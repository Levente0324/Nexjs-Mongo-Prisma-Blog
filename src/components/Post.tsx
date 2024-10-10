import prisma from "@/lib";
import { revalidatePath } from "next/cache";
import React from "react";

type PostType = {
  id: string;
  title: string;
  content: string;
};

const Post = (props: PostType) => {
  const deletePost = async () => {
    "use server";
    await prisma.post.delete({
      where: {
        id: props.id,
      },
    });
    revalidatePath("/posts");
  };

  return (
    <div className="bg-black mt-8 text-white w-[450px] h-fit flex flex-col rounded-3xl">
      <div className="w-full h-12 content-center px-6 pt-4 flex flex-row justify-between">
        <h1 className="text-4xl">{props.title}</h1>
        <form action={deletePost}>
          <button type="submit" className="pt-1 hover:cursor-pointer">
            <img src="/delete.png" className="h-8 w-8"></img>
          </button>
        </form>
      </div>
      <div className="border-t border-white mt-4 ml-4 w-[418px]"></div>
      <div className="w-full h-fit py-6 pl-6">
        <p className="text-2xl">{props.content}</p>
      </div>
    </div>
  );
};

export default Post;
