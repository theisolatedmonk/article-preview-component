import Image from "next/image";
import avtar from "@/Components/images/avatar-michelle.jpg";
import drawers from "@/Components/images/drawers.jpg";
import facebook from "@/Components/images/icon-facebook.svg";
import pinteest from "@/Components/images/icon-pinterest.svg";
import share from "@/Components/images/icon-twitter.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
      <Image src={drawers} alt={""} />
      <div className="flex flex-col">
        <p className="">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </p>
        <p className="">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="flex justify-between">
          <div className="flex items-center justify-center">
            <Image src={avtar} alt={""}/>
            <div className="flex flex-col">
              <p className="">Michelle Appleton</p>
              <p className="">28 Jun 2020</p>
            </div>
          </div>
          <Image src={share} alt={""}/>
        </div>
      </div>
      </div>
    </main>
  );
}
