import Image, { StaticImageData } from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { Badge } from "./ui/badge";

interface Props {
  title: string;
  live: string;
  code: string;
  image?: StaticImageData;
  description: string;
  tech: string[];
}
export type { Props as ProjectInterface };
export function ProjectCard({
  title,
  live,
  code,
  image,
  description,
  tech,
}: Props) {
  return (
    <Card className="mr-2 flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Link href={live}>
        {image && (
          <Image
            src={image}
            alt="title"
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top hover:scale-110"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="text-base mt-1">{title}</CardTitle>
          <p className="text-muted-foreground max-w-full text-pretty text-xs ">
            {description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tech && tech.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tech.map((tags) => (
              <Badge
                key={tags}
                variant={"secondary"}
                className="px-1 py-0 text-[10px]"
              >
                {tags}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        <div className="flex flex-row flex-wrap items-start gap-2">
          <Link href={live}>
            <Badge>Website</Badge>
          </Link>

          <Link href={code}>
            <Badge>Github</Badge>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
