import { ImageWidget } from "apps/admin/widgets.ts";

export interface ImagesList {
  brandImage: ImageWidget;
  alt?: string | "Brand";
}

interface Props {
  /**
  * @description The description of name.
  */
  title?: string;
  brandImages?: ImagesList[];
}

export default function Section({ title, brandImages }: Props) {
  return (
    <div class="flex flex-col items-center mt-[71px]">
      <p class="text-2xl text-primary uppercase text-center">{title}</p>
      <div class="max-w-[1084px] min-w-[211px] flex flex-wrap lg:gap-20">
        {brandImages?.map((item) => (
          <div class="w-[211px] h-[68px] mx-auto">
            <img
              class="object-cover"
              src={item.brandImage}
              alt={item.alt}
              decoding="async"
              loading="lazy"
              width={211}
              height={68}
            />
          </div>
        ))}
      </div>
    </div>
  );
}