import Image from "next/image";
import Hero from "./ui/pages/Hero";
import About from "./ui/pages/About";
import TrainAnimation from "./ui/mainanimation/TrainAnimation";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <TrainAnimation/>
    </main>
  );
}
