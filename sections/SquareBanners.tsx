import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface BannerItem {
  href: string;
  banner: ImageWidget;
  alt?: string;
}

export interface LongBanner {
  href: string;
  banner: ImageWidget;
  alt: string;
}

interface Props {
  bannerList?: BannerItem[];
  wideBanner?: LongBanner;
  bannerType: "Banner comprido" | "Lista de banners"
}

export default function Section({ bannerList, wideBanner, bannerType }: Props) {
  return (
    <>
      {bannerType === "Lista de banners" && (
        <div class="flex gap-6 w-[1300px] mx-auto p-8 overflow-x-auto ">
          {bannerList?.map((item) => (
            <div class="w-[300px] h-[320px] ">
              <a href={item.href}>
                <Image
                  class="rounded-lg object-cover"
                  src={item.banner || ""}
                  width={300}
                  height={320}
                  alt={item.alt}
                />
              </a>
            </div>
          ))}
        </div>
      )}
      {bannerType === "Banner comprido" && (
        <div class="md:w-[1300px]  md:mx-auto w-screen pt-8 pb-8 md:px-auto ">
          <a href={wideBanner?.href}>
            <Image
              class="md:rounded-lg object-cover"
              src={wideBanner?.banner || ""}
              width={1300}
              height={320}
              alt={wideBanner?.alt}
            />
          </a>
        </div>
      )}
    </>
  );
}
