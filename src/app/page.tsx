import Banner from "./components/Banner/Banner";
import Features from "./components/Features/Features";

export default function Home() {
  return (
    <main className="mt-[150px] flex flex-col gap-[100px]">
      <Banner />
      <Features />
    </main>
  )
}
