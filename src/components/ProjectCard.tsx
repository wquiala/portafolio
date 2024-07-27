import cn from "clsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./shadcn/Card";
import { Switch } from "@radix-ui/react-switch";
import { Button } from "./shadcn/Button";
import { GithubIconCard, HtmlIconCard, SpotifyIcon } from "./Icons";
import type { Projects } from "./Proyectos.astro";

export function ProjectCard({
  img,
  name,
  tecnologies,
  urlWeb,
  urlGithub,
}: Projects) {
  return (
    <Card className={cn("w-64")}>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{tecnologies}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify -center">
          <img
            className="w-56 h-56 hover:scale-100 transition-all scale-90"
            src={img}
            alt=""
          />
        </div>
        <div>
          {/* <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{}</p>
              <p className="text-sm text-muted-foreground">{name}</p>
            </div>
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="justify-around">
        <a
          href={urlWeb}
          className="scale-90 hover:scale-100 transition-all"
          target="_blank"
        >
          <HtmlIconCard />
        </a>
        <a
          href={urlGithub}
          className="scale-90 hover:scale-100 transition-all"
          target="_blank"
        >
          <GithubIconCard />
        </a>
      </CardFooter>
    </Card>
  );
}
/* 
<!-- <article class="group relative">
  <a
    href={url}
    class="flex flex-col w-56 h-72 transition-all duration-300 relative p-2 overflow-hidden gap-3 rounded-md shadow-lg hover:shadow-xl hover:bg-zinc-800 bg-zinc-500/30"
  >
    <picture class="flex-none h-[60%]">
      <img src={img} class="h-[70%] w-full" alt="" />
    </picture>
    <div class="">
      <h4 class="text-white text-sm">
        {name}
      </h4>
      <span class="text-xs text-zinc-400">{tecnologies}</span>
    </div>
    <div class="flex flex-row justify-around">
      <div class="h-10 w-10"><HtmlIconCard /></div>
      <div class="h-10 w-10"><GithubIconCard /></div>
    </div>
  </a>
</article>
 --> */
