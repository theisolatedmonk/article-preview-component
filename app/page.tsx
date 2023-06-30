import Image from "next/image";
import avtar from "@/Components/images/avatar-michelle.jpg";
import drawers from "@/Components/images/drawers.jpg";
import facebook from "@/Components/images/icon-facebook.svg";
import pinteest from "@/Components/images/icon-pinterest.svg";
import twitter from "@/Components/images/icon-twitter.svg";
import share from "@/Components/images/icon-share.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center   bg-[hsl(210,46%,95%)] ">
      <div className="flex w-[700px] ">
      <Image src={drawers} alt={""} className=" w- h-full" />
      <div className="flex flex-col justify-between p-4 bg-white ">
        <p className=" font-bold text-[hsl(217,19%,35%)]">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p className=" text-xs text-[hsl(212,23%,69%)]">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center justify-center gap-2">
            <Image src={avtar} alt={""} className="rounded-full w-10 h-10"/>
            <div className="flex flex-col text-xs">
              <p className="text-[hsl(217,19%,35%)] ">Michelle Appleton</p>
              <p className=" text-[hsl(212,23%,69%)]">28 Jun 2020</p>
            </div>
          </div>
          <Image src={share} alt={""} className=" w-8 h-8 rounded" />
        </div>
      </div>
      </div>
    </main>
  );
}
