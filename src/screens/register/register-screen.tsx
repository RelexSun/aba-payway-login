"use client";

import Image from "next/image";
import RegisterForm from "./register-form";
import { FaGithub, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

const RegisterScreen = () => {
  return (
    <div className="login-bg h-screen flex items-center justify-center">
      <div className="w-[880px] flex items-center justify-center z-10 relative">
        <div className="rounded-xl shadow-lg bg-white overflow-hidden h-full">
          <div className="px-[115px] py-[20px] border">
            <RegisterForm />
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
        className="absolute max-lg:top-0 left-0 lg:bottom-0 lg:left-0 mix-blend-overlay"
      />
      <Image
        src={"/pattern-right.svg"}
        alt="pattern right"
        width={535}
        height={535}
        className="absolute bottom-0 right-0 lg:bottom-0 lg:right-0 mix-blend-overlay"
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

export default RegisterScreen;
