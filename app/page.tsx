import Image from "next/image";
import {NavbarDemo} from "@/components/NavBar";
import Hero from "@/components/Hero";
import { Services } from "@/components/Services";
import RetroGrid from "@/components/magicui/retro-grid";



export default function Home() {
  return (
    <div>
    <div className="flex flex-col w-full h-full overflow-auto">
    <NavbarDemo/>
    <RetroGrid className="border-b-8"/>
    <Hero/>
    </div>
    <div>
      <Services/>
    </div>
    </div>
  );
}
