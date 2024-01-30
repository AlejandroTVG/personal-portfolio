import SideBar from "@/components/SideBar.server";
import ContentNav from "../../components/ContentNav.server";

export default function contentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" h-full grid grid-rows-2 grid-rows-max">
        <ContentNav />
        <div className="grid grid-cols-2 h-full">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
