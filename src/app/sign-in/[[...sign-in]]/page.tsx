import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-44">
      <SignIn forceRedirectUrl="/posts" />
    </div>
  );
}
