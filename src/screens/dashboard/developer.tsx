import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

const Developers = () => {
  return (
    <div className="">
      <div className="flex my-10 justify-center w-full text-[30px] font-semibold">
        <h1>Developer</h1>
      </div>
      <div className="flex flex-col gap-5 justify-center items-center lg:flex-row lg:justify-evenly pt-10">
        <div className="w-[450px]">
          <Card>
            <AspectRatio ratio={4 / 3}>
              <Image
                src="/sun.jpeg"
                alt="Image"
                className="rounded-md object-cover"
                fill={true}
              />
            </AspectRatio>
            <CardFooter className="flex justify-evenly  mt-6 ">
              Relexsun Nop
              <a href="https://github.com/RelexSun" target="_blank">
                <FaGithub className="text-slate-500" />
              </a>
            </CardFooter>
          </Card>
        </div>
        <div className="w-[450px]">
          <Card>
            <AspectRatio ratio={4 / 3}>
              <Image
                src="/somon.JPG"
                alt="Image"
                className="rounded-md object-cover"
                fill={true}
              />
            </AspectRatio>
            <CardFooter className="flex mt-6 justify-evenly ">
              Soum Somon
              <a href="https://github.com/SOMONSOUM" target="_blank">
                <FaGithub className="text-slate-500" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Developers;
