import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen p-[2.8rem] flex flex-col items-center">
      <Header />
      <main className="w-full flex flex-col">
        <Hero/>
      </main>
    </div>
  );
}