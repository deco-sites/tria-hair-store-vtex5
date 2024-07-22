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
      <div id={id} class="relative overflow-y-hidden">
        <div class="flex flex-col items-center">
          <a
            href={content?.href}
            class="flex items-center justify-center w-[115px] h-[115px] rounded-full border border-primary hover:bg-accent"
          >
            <div>
              <Image
                class="object-cover hover:w-[135px] hover:h-[135px]"
                alt={content?.alt}
                src={content?.image || ""}
                width={83}
                height={83}
              />
            </div>
          </a>
          <a href={content?.href}>
            <p class="text-[10px] text-primary text-center font-bold pt-2">
              {content?.categorieName}
            </p>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div class="w-screen flex flex-col items-center pb-[56px] ">
      <div class="max-w-[1300px]">
        <h2 class="text-2xl text-primary text-center font-bold uppercase pt-[37px] pb-[25px]">
          {title}
        </h2>

        <div
          id={id}
          class={`grid ${
            layout?.showArrows
              ? "grid-cols-[48px_1fr_48px] items-center"
              : "grid-cols-1"
          }`}
        >
          {layout?.showArrows && (
            <>
              <div class="col-start-1 flex justify-center">
                <Slider.PrevButton class="w-12 h-12 flex justify-center items-center">
                  <Icon
                    size={24}
                    id="ChevronLeft"
                    strokeWidth={3}
                    class="w-5"
                  />
                </Slider.PrevButton>
              </div>
            </>
          )}

          <div class="col-span-1">
            <Slider class="lg:w-[1171px] carousel carousel-center  col-span-full row-span-full gap-[61px] ">
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
    </div>
  );
}

export default Categories;
