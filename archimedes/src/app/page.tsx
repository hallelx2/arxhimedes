import { Hero } from "@/components/landing/hero";
import { Story } from "@/components/landing/story";
import { Gemini } from "@/components/landing/gemini";
import { Technology } from "@/components/landing/technology";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Hero />
      <Story />
      <Gemini />
      <Technology />
      <footer className="py-12 bg-gray-950 text-center text-gray-500 text-sm border-t border-gray-900">
        <p>&copy; {new Date().getFullYear()} Archimedes Surgical Robotics. All rights reserved.</p>
      </footer>
    </main>
  );
}
