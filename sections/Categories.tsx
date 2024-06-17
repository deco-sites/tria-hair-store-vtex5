import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

export interface Categorie {
  content?: {
    categorieName: string;
    image: ImageWidget;
    /** @description Descrição da imagem */
    alt: string;
    href: string;
  };
}

export interface Props {
  title?: string;
  categories?: Categorie[];
  layout?: {
    numberOfCategories?: {
      mobile?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
      desktop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    };
    showArrows?: boolean;
  };
}

function Categories({
  title = "CATEGORIES",
  layout = {
    numberOfCategories: {
      mobile: 3,
      desktop: 7,
    },
    showArrows: true,
  } as Props["layout"],
  categories = [
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
    {
      content: {
        categorieName: "Product",
        image:
          "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/4f1e6f28-09e1-4fff-b33a-56495902beec",
        alt: "Avatar",
        href: "/",
      },
    },
  ],
}: Props) {
  const id = useId();

  if (!categories || categories.length === 0) {
    return null;
  }

  function SliderItem({ slide, id }: { slide: Categorie; id: string }) {
    const { content } = slide;

    return (
      <div id={id} class="relative overflow-y-hidden w-full min-h-[292px]">
        <div class="flex flex-col justify-center gap-16 p-8 h-[409px] w-[327px]">
          <div class="flex flex-col items-center gap-5">
            <Image
              class="object-cover rounded-full bg-primary"
              alt={content?.alt}
              src={content?.image || ""}
              width={186}
              height={186}
            />

            <p class="font-semibold  w-[327px] text-primary text-center text-base">
              {content?.categorieName}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div class="w-screen border-t-2 border-primary py-[52px]">
      <div class="flex flex-col  min-h-min  lg:container md:max-w-6xl lg:mx-auto mx-4  ">
        <h2 class="text-2xl text-primary font-bold pb-5 uppercase">{title}</h2>
        <p class="text-base text-primary">{subtitle}</p>
      </div>
      <div
        id={id}
        class={`grid lg:container md:max-w-6xl lg:mx-auto mx-4  ${
          layout?.showArrows
            ? "grid-cols-[48px_1fr_48px] items-center"
            : "grid-cols-1"
        }`}
      >
        {layout?.showArrows && (
          <>
            <div class="col-start-1 flex justify-center">
              <Slider.PrevButton class="w-12 h-12 flex justify-center items-center">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} class="w-5" />
              </Slider.PrevButton>
            </div>
          </>
        )}

        <div class="col-span-1 lg:w-[1141px]">
          <Slider class="lg:w-[1141px] carousel carousel-center  col-span-full row-span-full gap-20 pt-10">
            {categories?.map((slide, index) => (
              <Slider.Item index={index} class="carousel-item">
                <SliderItem slide={slide} id={`${id}::${index}`} />
              </Slider.Item>
            ))}
          </Slider>
          <Slider.JS rootId={id} />
        </div>

        {layout?.showArrows && (
          <>
            <div class="col-start-3 flex justify-center">
              <Slider.NextButton class="w-12 h-12 flex justify-center items-center">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Categories;
