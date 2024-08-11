import LoginForm from "@/components/LoginForm";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import banner from "../../public/banner-img.png";
import patternL from "../../public/pattern-left.svg";
import patternR from "../../public/pattern-right.svg";
import logo from "../../public/pw-new-logo.svg";
import smlogo from "../../public/aba-logo.svg";
import { FaLinkedin, FaYoutubeSquare, FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="login-bg h-screen flex items-center justify-center">
      <div className="h-[468px] w-[880px] flex items-center justify-center z-10 relative">
        <div className="flex rounded-xl shadow-lg bg-white overflow-hidden h-full">
          <div className="hidden md:block">
            <Image
              src={banner}
              alt="banner"
              className="object-cover max-w-full h-auto"
            />
          </div>
          <div className="">
            <div className="flex justify-center items-center pr-[36px] pl-[66px] pt-[26px]">
              <div className="flex w-full"></div>
              <Button
                variant={"outline"}
                size={"icon"}
                className="flex gap-2 text-slate-400"
              >
                <CiGlobe size={"xl"} />
                <span className="text-slate-700 font-semibold">EN</span>
              </Button>
            </div>
            <div className="px-[115px]">
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={logo}
        alt="logo"
        className="absolute top-[50px] left-[100px]"
      />
      <Image
        src={patternL}
        alt="pattern left"
        className="absolute bottom-0 left-0 mix-blend-overlay"
      />
      <Image
        src={patternR}
        alt="pattern right"
        className="absolute bottom-0 right-0 mix-blend-overlay"
      />
      <div className="absolute bottom-[45px] left-[100px]">
        <div className="flex gap-2">
          <Image src={smlogo} alt="small logo" />
          <div className="text-[11px]">
            <div>
              <span className="font-semibold">Advanced Bank of Asia Ltd.</span>
              148, Preah Sihanouk Blvd, Phnom Penh, 12321, Cambodia
            </div>
            <a
              href="https://www.ababank.com/privacy-policy/"
              target="_blank"
              className="text-cyan-500 font-semibold"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <a href="https://github.com/RelexSun" target="_blank">
            <FaGithub className="text-slate-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/relexsun-nop-93721b2a5/"
            target="_blank"
          >
            <FaLinkedin className="text-slate-500" />
          </a>
          <a href="https://www.youtube.com/@relexsunnop9186" target="_blank">
            <FaYoutubeSquare className="text-slate-500" />
          </a>
        </div>
      </div>
    </main>
  );
}
