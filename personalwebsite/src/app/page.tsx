import Image from "next/image";
import ThreeScene from "@/customComponents/threeScene";
export default function Home() {
  return (
    <>
      <section className="flex flex-row justify-center roboto-mono">
        <p>
          Hello World
        </p>
        <ThreeScene />
      </section>
    </>
  );
}
