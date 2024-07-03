import WorkCard from "@/components/WorkCard";
import cardsList from "@/content/work-cards";
import { useState } from "react";
import Head from "next/head";
import LinkWithIcon from "@/components/LinkWithIcon";

export default function Home() {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="page flex flex-col w-full">
      <Head>
        <title>Andrew Levada</title>
      </Head>

      <div className="flex flex-col w-full gap-10">
        <div className="flex flex-col w-full gap-1.5">
          <h1>Andrew <span className="px-2">•</span> available for work</h1>
          <p>Product Designer with a background in Computer Science</p>

          {showBio ? (
            <p className="max-w-[600px]">
              I believe crafting friendly and expressive interfaces is inherently important.
              So that’s what I strive to do, all while concepting, prototyping, and user testing. Along the way, advanced
              JTBD became my absolute favorite framework to understanding and evolving products. I’d love to work on
              something non-profit or public benefit.
            </p>
          ) : ""}

          <button className="w-fit text-[#0E235899]" onClick={() => setShowBio(!showBio)}>
            Show more...
          </button>
        </div>

        <ul>
          <li>Ex. <a href="https://icons8.com/" target="_blank">Icons8</a></li>
          <li>CS degree from <a href="https://innopolis.university/en/" target="_blank">Innopolis University</a></li>
          <li>Founding Product Designer at Croissan Studio, making <a href="https://neuroartist.ru/en/"
            target="_blank">NeuroArtist</a></li>
        </ul>

        <div className="flex flex-row w-full gap-5">
          <p>Contact me at →</p>

          <LinkWithIcon href="https://read.cv/andrewlevada" iconSrc="/inno-fwd-2024/icons/readcv.svg" label="Read CV" />
          <LinkWithIcon href="https://instagram.com/andrewlevada/" iconSrc="/inno-fwd-2024/icons/instagram.svg" label="Instagram" />
          <LinkWithIcon href="https://linkedin.com/in/andrewlevada/" iconSrc="/inno-fwd-2024/icons/linkedin.svg" label="LinkedIn" />
          <LinkWithIcon href="https://t.me/andrewlevada" iconSrc="/inno-fwd-2024/icons/telegram.svg" label="Telegram" />
          <LinkWithIcon href="https://github.com/andrewlevada" iconSrc="/inno-fwd-2024/icons/github.svg" label="GitHub" />

          <a href="mailto:levada.andrew@gmail.com" target="_blank" id="email">Email</a>
        </div>
      </div>

      <div className="flex flex-col w-full gap-6">
        <h2>New works</h2>

        <div className="flex flex-row w-full gap-5">
          {[0, 1, 2].map(col => (
            <div className="flex flex-col gap-5" key={col}>
              {cardsList.filter((_, index) => index % 3 == col).map((card, j) => (
                <WorkCard key={j} {...card} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <h3>More coming soon...</h3>
    </div>
  );
}
