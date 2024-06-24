import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import Icon from "../components/ui/Icon.tsx";
import Slider from "../components/ui/Slider.tsx";
import { useId } from "../sdk/useId.ts";

export interface GroupNews {
  titleNews?: string;
  subtitleNews?: string;
  image: {
    src: ImageWidget;
    alt?: string;
  };
  post?:string;
}

export interface Props {
  title?: string;
  news: GroupNews[];
  layout?: {
    variation?: "Grid" | "Slider";
  };
}

const DEFAULT_PROPS: Props = {
  title: "NOTÍCIAS DO GRUPO",
  news: [
    {
      titleNews: "TÍTULO: XXXXXXXX",
      subtitleNews: "XXXXXXXXXXXXXXX",
      image: {
        src: "",
        alt: "",
      },
      post: "Lorem ipsum dolor sit amet consectetur. Non arcu nisl posuere eget proin maecenas ante quisque risus. Ut lorem penatibus lectus venenatis integer. Volutpat id habitasse duis phasellus pulvinar purus.",
    },
    {
      titleNews: "TÍTULO: XXXXXXXX",
      subtitleNews: "XXXXXXXXXXXXXXX",
      image: {
        src: "",
        alt: "",
      },
      post: "Lorem ipsum dolor sit amet consectetur. Non arcu nisl posuere eget proin maecenas ante quisque risus. Ut lorem penatibus lectus venenatis integer. Volutpat id habitasse duis phasellus pulvinar purus.",
    },
    {
      titleNews: "TÍTULO: XXXXXXXX",
      subtitleNews: "XXXXXXXXXXXXXXX",
      image: {
        src: "",
        alt: "",
      },
      post: "Lorem ipsum dolor sit amet consectetur. Non arcu nisl posuere eget proin maecenas ante quisque risus. Ut lorem penatibus lectus venenatis integer. Volutpat id habitasse duis phasellus pulvinar purus.",
    },
  ],
  layout: {
    variation: "Grid",
  },
};

const Testimonal = ({ image, titleNews, post, subtitleNews }: GroupNews) => (
  <div class="flex flex-col items-center gap-9 text-center">
   

    <div class="flex flex-col items-center gap-4">
      {image && (
        <Image
          src={image.src}
          alt={image?.alt || titleNews}
          width={316}
          height={217}
          class="rounded-[50px]"
        />
      )}
      <div class="flex flex-col text-primary">
        <h3 class="text-xl lg:text-2xl">{titleNews}</h3>
        <p class="text-xl lg:text-2xl">{subtitleNews}</p>
        <p class="text-xl ">{post}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials(props: Props) {
  const id = useId();
  const { title, news, layout } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  return (
    <div class="w-full container px-4 py-8 flex flex-col gap-14 lg:gap-20 lg:py-10 lg:px-0">
      <h2>{title}</h2>
      {layout?.variation === "Grid" && (
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {news?.map(({ image, titleNews, post, subtitleNews }) => (
            <Testimonal
              image={image}
              titleNews={titleNews}
              post={post}
              subtitleNews={subtitleNews}
            />
          ))}
        </div>
      )}
      {layout?.variation !== "Grid" && (
        <div class="relative w-full px-8" id={id}>
          <Slider class="carousel carousel-start gap-4 lg:gap-8 row-start-2 row-end-5 w-full">
            {news?.map(({ image, titleNews, post, subtitleNews }, index) => (
              <Slider.Item
                index={index}
                class="flex flex-col gap-4 carousel-item w-full"
              >
                <Testimonal
                  image={image}
                  titleNews={titleNews}
                  post={post}
                  subtitleNews={subtitleNews}
                />
              </Slider.Item>
            ))}
          </Slider>
          <>
            <div class="z-10 absolute -left-2 lg:-left-8 top-1/2">
              <Slider.PrevButton class="btn btn-circle btn-outline">
                <Icon size={24} id="ChevronLeft" strokeWidth={3} />
              </Slider.PrevButton>
            </div>
            <div class="z-10 absolute -right-2 lg:-right-8 top-1/2">
              <Slider.NextButton class="btn btn-circle btn-outline">
                <Icon size={24} id="ChevronRight" strokeWidth={3} />
              </Slider.NextButton>
            </div>
          </>
          <Slider.JS rootId={id} />
        </div>
      )}
    </div>
  );
}
