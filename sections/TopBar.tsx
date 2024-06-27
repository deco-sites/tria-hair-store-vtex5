import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface TopItem {
  /**
   * @description The description of name.
   */
  image: ImageWidget;
  href?: string;
  title: string;
  subtitle?: string;
}

interface Props {
  imageFormat: "Quadrado" | "Circulo";
  content: TopItem[];
}

export default function TopBar({ imageFormat = "Quadrado", content }: Props) {
  return (
    <div class="md:flex md:max-w-[1103px] mx-auto justify-between hidden md:visible">
      {content.map((item) => (
        <a href={item.href} class="flex items-center">
          <div
            class={`flex items-center justify-center bg-accent w-[64px] h-[64px] ${
              imageFormat === "Quadrado" ? "" : "rounded-full"
            }`}
          >
            <Image
              class="object-cover"
              src={item.image}
              alt={item.title}
              width={60}
              height={42}
            />
          </div>
          <div class="ml-[20px] text-[12px] text-primary">
            <p>{item.title}</p>
            <p>{item.subtitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
