import prisma from "@/lib";
import { revalidatePath } from "next/cache";
import React from "react";

const CreatePost = () => {
  const PostThePost = async (formData: FormData) => {
    "use server";
    if (
      (formData.get("title") as string) != "" &&
      (formData.get("content") as string) != ""
    ) {
      await prisma.post.create({
        data: {
          title: formData.get("title") as string,
          content: formData.get("content") as string,
        },
      });
    }
    revalidatePath("../app/posts");
  };

  return (
    <div className="w-[700px] h-80 flex flex-col ">
      <h1 className="text-5xl mb-2 tracking-wide text-cool">Create a post</h1>
      <form action={PostThePost}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-[700px] h-12 mb-2 pl-2 rounded-xl text-3xl tracking-wide text-black border-black border-4"
        />
        <input
          type="text"
          name="content"
          placeholder="What is going through your head right now..."
          className="w-[700px] h-32 mb-2 pl-2 rounded-xl text-3xl tracking-wide text-black bg-grey border-black border-4"
        />
        <button
          type="submit"
          className="w-40 h-14 border-4 rounded-2xl border-black text-4xl text-black tracking-wider bg-cool hover:bg-[#ffe780]"
        >
          POST
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
