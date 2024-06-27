import { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Item {
  /**
   * @title título
   */
  title: string;
  /**
   * @title subtitulo
   */
  subtitle?: string;
  /**
   * @title icone
   */
  icon?: ImageWidget;
}

export interface Props {
  informationBar: Item[];
}

export default function InformationBar({ informationBar }: Props) {
  return (
    <div class="flex flex-col items-center">
      <div class="flex justify-between items-center bg-primary lg:w-[1300px] w-full h-14 px-10">
        {informationBar?.map((item) => (
          <div class="flex justify-center items-center gap-5">
            <Image
              width={41}
              class=""
              src={item.icon || ""}
              alt={item.title}
              decoding="async"
              loading="lazy"
            />
            <div>
              <h5 class="font-bold text-[10px] text-white">{item.title}</h5>
              <p class="font-normal text-[10px] text-white">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
