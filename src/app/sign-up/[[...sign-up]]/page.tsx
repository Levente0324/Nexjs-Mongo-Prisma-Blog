import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-44">
      <SignUp forceRedirectUrl="/posts" />
    </div>
  );
}
