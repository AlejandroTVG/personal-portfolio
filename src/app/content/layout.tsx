import SideBar from "@/components/SideBar.client";
import ContentNav from "@/components/ContentNav.client";

export default function contentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" h-full grid grid-rows-2 grid-rows-max">
        <ContentNav />
        <div className="flex h-full bg-slate-500">
          <div className="bg-slate-50 w-1/5">
            <SideBar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
