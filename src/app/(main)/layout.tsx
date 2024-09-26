import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import { toast, Toaster } from "sonner";
import SideBar from "@/components/sidebar";
import NavBar from "@/components/nav";
import AppInitializer from "./AppInitializer";
import { getMe } from "@/actions/get-me";
import { getShop } from "@/actions/shop/get";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getMe();
  let shops = null;
  if (data?.id) {
    const { shop } = await getShop(data.id);
    shops = shop;
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors />
        <AppInitializer user={data} shop={shops}>
          <div className="flex">
            <div className="hidden md:block">
              <SideBar />
            </div>
            <div className="w-screen relative">
              <div className="fixed w-full">
                <NavBar />
              </div>
              <div className="pt-16 max-w-[1500px] my-0 mx-auto md:pl-64 mb-5">
                {children}
              </div>
            </div>
          </div>
        </AppInitializer>
      </body>
    </html>
  );
}
