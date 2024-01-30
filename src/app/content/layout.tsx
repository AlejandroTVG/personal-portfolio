import SideBar from "@/components/SideBar.server";
import ContentNav from "../../components/ContentNav.server";

export default function contentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 to-indigo-600 ">
        <ContentNav />
        <SideBar />
        {children}
      </body>
    </html>
  );
}
