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
        <div className="flex flex-row h-full bg-slate-500">
          <div className="bg-slate-50 w-1/5">
            <SideBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
