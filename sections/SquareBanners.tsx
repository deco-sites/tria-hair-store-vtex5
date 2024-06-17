import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface BannerItem {
  href: string;
  banner: ImageWidget;
}

interface Props {
  bannerList: BannerItem[];
}

export default function Section({ bannerList }: Props) {
  return (
    <div class="flex gap-6 w-[1300px] mx-auto p-8">
      {bannerList?.map((item) => (
        <div>
          <a href={item.href}>
            <Image
              class="rounded-lg"
              src={item.banner || ""}
              width={300}
              height={320}
              alt={""}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
