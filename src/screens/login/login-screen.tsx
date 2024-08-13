import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CiGlobe } from "react-icons/ci";
import LoginForm from "./login-form";
import { FaGithub, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

export const LoginScreen: React.FC = () => {
  return (
    <div className="login-bg h-screen flex items-center justify-center">
      <div className="h-[468px] w-[880px] flex items-center justify-center z-10 relative">
        <div className="flex rounded-xl shadow-lg bg-white overflow-hidden h-full">
          <div className="hidden md:block">
            <Image
              src={"/banner-img.png"}
              alt="banner"
              width={370}
              height={468}
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
        src={"/pw-new-logo.svg"}
        alt="logo"
        width={232}
        height={232}
        className="absolute top-[50px] left-[100px]"
      />
      <Image
        src={"/pattern-left.svg"}
        width={535}
        height={535}
        alt="pattern left"
        className="absolute bottom-0 left-0 mix-blend-overlay"
      />
      <Image
        src={"/pattern-right.svg"}
        alt="pattern right"
        width={535}
        height={535}
        className="absolute bottom-0 right-0 mix-blend-overlay"
      />
      <div className="absolute bottom-[45px] left-[100px]">
        <div className="flex gap-2">
          <Image
            src={"/aba-logo.svg"}
            alt="small logo"
            width={146}
            height={146}
          />
          <div className="text-[11px]">
            <div>
              <span className="font-semibold">Advanced Bank of Asia Ltd.</span>{" "}
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
    </div>
  );
};
