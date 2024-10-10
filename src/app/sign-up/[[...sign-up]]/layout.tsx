import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "sign up",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full m-0 p-0">
      <body className="bg-black flex justify-center align-center h-full w-full">
        {children}
      </body>
    </html>
  );
}
