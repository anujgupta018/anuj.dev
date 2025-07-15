"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import profile from "../public/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Leetcode from "../public/leetcode.svg";
import gfg from "../public/gfg.svg";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { data, hackathons, Projects } from "@/Data/dataInfo";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import photo from "../public/profile.jpg";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/project-card";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={0.04}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-5xl/none"
                yOffset={8}
                text={`Hi, I'm ${data.name} 👋`}
              />
              <BlurFadeText
                delay={0.04}
                className="max-w-[600px] md:text-xl"
                text={data.description}
              />
            </div>

            <BlurFade delay={0.04}>
              <Avatar className="size-28 border">
                <AvatarImage src={photo.src} alt="Anujj" />
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-2xl space-y-4">
        <BlurFade delay={0.04 * 3}>
          <h2 className="text-2xl font-bold ">About</h2>
        </BlurFade>

        <BlurFade delay={0.04 * 4} className="text-muted-foreground">
          {data.summary}
        </BlurFade>
      </section>

      <section id="Education" className="mx-auto w-full max-w-2xl space-y-4">
        <BlurFade delay={0.04 * 5}>
          <h2 className="text-2xl font-bold">Education</h2>
        </BlurFade>
        {data.Education.map((education) => (
          <div key={education.College}>
            <div className="flex justify-between">
              <BlurFade delay={0.04 * 5}>{education.College}</BlurFade>
              <BlurFade delay={0.04 * 5}>{education.time}</BlurFade>
            </div>
            <BlurFade delay={0.04 * 5}>
              <p className="text-muted-foreground">{education.degree}</p>
            </BlurFade>
          </div>
        ))}
      </section>

      <section id="skill" className="mx-auto w-full max-w-2xl space-y-4">
        <BlurFade delay={0.05}>
          <h2 className="font-bold text-2xl mb-2">Skills</h2>
        </BlurFade>
        <BlurFade delay={0.05}>
          {data.skills.map((skill) => (
            <Badge key={skill} className="mr-2 mb-2">
              {skill}
            </Badge>
          ))}
        </BlurFade>
      </section>

      <section id="project" className="mx-auto w-full max-w-2xl space-y-4">
        <BlurFade delay={0.04 * 5} className="text-center">
          <Badge className="text-md">My Projects</Badge>
        </BlurFade>
        <BlurFade delay={0.04 * 5}>
          <h1 className="text-5xl text-center font-bold">
            Check Out my Projects
          </h1>
        </BlurFade>
        <BlurFade delay={0.04 * 5}>
          <p className="text-muted-foreground text-center text-xl">
            Here are a few standout projects I've enjoyed building along the
            way.
          </p>
        </BlurFade>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {Projects.map((project, id) => (
            <BlurFade key={project.id} delay={0.04 * 12 + id * 0.05}>
              <ProjectCard
                title={project.title}
                description={project.description}
                code={project.code}
                live={project.live}
                image={project.image}
                tech={project.tech}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="Hackathon" className="mx-auto w-full max-w-2xl space-y-4">
        <BlurFade className="text-center" delay={0.04 * 5}>
          <Badge className="text-md">Hackathons</Badge>
        </BlurFade>
        <BlurFade className="text-center mb-4">
          <p className="text-muted-foreground">
            I have participated in 2 hackathons
          </p>
        </BlurFade>
        {hackathons.map((hackathon) => (
          <BlurFade key={hackathon.name} delay={0.04 * 6}>
            <div>
              <h3 className="text-md  font-bold">{hackathon.name}</h3>
              <p className="text-sm text-muted-foreground">
                {hackathon.description}
              </p>
            </div>
            <Separator className="bg-gray-600" />
          </BlurFade>
        ))}
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-2xl space-y-4 items-center h-40"
      >
        <BlurFade className="text-center mb-4" delay={0.04 * 6}>
          <Badge className="text-md">Contact</Badge>
        </BlurFade>
        <BlurFade className="text-center">
          <h2 className="text-4xl  font-bold mt-1 ">Get in Touch</h2>
        </BlurFade>
        <BlurFade delay={0.04 * 7}>
          <p className="text-lg text-muted-foreground text-center">
            You can reach out to me on{" "}
            <Link
              href="https://x.com/AnujjGupta07"
              className="text-blue-600"
            >
              X
            </Link>
            {" "}or{" "}
            <Link href="mailto:invinciblenauj1718@gmail.com" className="text-blue-600">Mail</Link>
          </p>
        </BlurFade>
      </section>
    </main>
  );
}
