import SideBar from "@/components/SideBar.client";
import ContentNav from "@/components/ContentNav.client";

export default function contentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 p-0">
      <body className=" h-screen flex flex-col">
        <ContentNav />
        <div className="flex flex-row h-full bg-gradient-to-r from-cyan-500 to-blue-500">
          <div className=" w-3/12">
            <SideBar />
          </div>
          <div className=" w-9/12">{children}</div>
        </div>
      </body>
    </html>
  );
}
