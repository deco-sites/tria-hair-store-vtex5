import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Row {
  title: string;
  items: Item_Image[];
}

export interface Item_Image {
  href: ImageWidget;
}

export interface Subscribe {
  title?: string;
  description?: string;
  /** @format rich-text */
  instructions: string;
}

export interface SocialComponent {
  title?: string;
  items?: Social[];
}

export interface AppDownload {
  href: string;
  item: ImageWidget;
}

export interface Social {
  network:
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "X - Twitter"
    | "Youtube"
    | "Tiktok";
  href: string;
  socialImage?: ImageWidget;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  siteName: string;
  siteDescription?: string;
  title?: string;
  subtitle?: string;
  links?: Column[];
  subscribe?: Subscribe;
  payment?: Row;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: SocialComponent;
  download_app?: AppDownload[];
}

export default function Footer({
  // _logo = {
  //   src:
  //     "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10652/160dd22a-c4b6-4826-86af-9a96537715e0",
  //   alt: "Logo",
  // },
  siteName = "Nome do site",
  siteDescription = "Loren Ipsum",
  title = "Assine nossa newsletter",
  subtitle = "Fique por dentro de nossas novidades e descontos",
  payment = {
    title: "Formas de pagamento",
    items: [{ href: "" }],
  },
  download_app = [{ href: "/", item: "/" }],
  links = [
    {
      title: "Column One",
      items: [
        { label: "Link One", href: "/" },
        { label: "Link Two", href: "/" },
        { label: "Link Three", href: "/" },
        { label: "Link Four", href: "/" },
        { label: "Link Five", href: "/" },
      ],
    },
    {
      title: "Column Two",
      items: [
        { label: "Link Six", href: "/" },
        { label: "Link Seven", href: "/" },
        { label: "Link Eight", href: "/" },
        { label: "Link Nine", href: "/" },
        { label: "Link Ten", href: "/" },
      ],
    },
    {
      title: "Column Three",
      items: [
        { label: "Link Eleven", href: "/" },
        { label: "Link Twelve", href: "/" },
        { label: "Link FourThirteenteen", href: "/" },
        { label: "Link Fourteen", href: "/" },
        { label: "Link Fifteen", href: "/" },
      ],
    },
  ],
  subscribe = {
    title: "Subcribe",
    description:
      "Join our newsletter to stay up to date on features and releases.",
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: "Made with",
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85",
    href: "https://deco.cx",
  },
  copyright = "© 2024 deco.cx. All rights reserved.",
  bottomLinks = [
    { label: "Privacy Policy", href: "/" },
    { label: "Terms of Service", href: "/" },
    { label: "Cookies Settings", href: "/" },
  ],
  social = {
    title: "Follow me",
    items: [
      { network: "Facebook", href: "/", socialImage: "" },
      { network: "Instagram", href: "/", socialImage: "" },
      { network: "X - Twitter", href: "/", socialImage: "" },
      { network: "Linkedin", href: "/", socialImage: "" },
      { network: "Youtube", href: "/", socialImage: "" },
      { network: "Tiktok", href: "/", socialImage: "" },
    ],
  },
}: Props) {
  return (
    <div class="font-poppins lg:max-w-none bg-neutral mx-auto md:max-w-6xl px-4 pt-16 text-sm flex justify-center ">
      <div class="max-w-[1153px] flex flex-col gap-10 md:mx-6">
        <div class="flex flex-col gap-6 justify-between lg:flex-row text-secondary-content border-b border-white-100 ">
          <div class="mb-6">
            <h3 class="font-poppins text-[22px] font-normal tracking-wide">
              {title}
            </h3>
            <p class="font-poppins text-xs font-normal pt-3">{subtitle}</p>
          </div>
          <div class="">
            {subscribe?.title && (
              <h4 class="font-poppins font-semibold mb-4">
                {subscribe?.title}
              </h4>
            )}
            <form class="flex flex-col">
              <p class="font-poppins font-normal">{subscribe.description}</p>
              <div class="flex gap-1 mb-2">
                <input
                  type="text"
                  placeholder="Digite seu email"
                  class="font-poppins font-normal text-custom-s9 text-primary placeholder-primary bg-accent w-44 h-6  rounded-md input input-bordered input-primary"
                />
                <button
                  type="submit"
                  class="font-poppins font-normal btn btn-accent w-[92px] h-6 text-custom-s9 text-primary placeholder-primary rounded-md min-h-0"
                  aria-label="Subscribe"
                >
                  Inscrever
                </button>
              </div>
              <div
                class="text-[8px]"
                dangerouslySetInnerHTML={{ __html: subscribe.instructions }}
              ></div>
            </form>
          </div>
        </div>

        <div class="flex gap-9 justify-between text-secondary-content pt-2">
          <div class="flex flex-col ">
            <div>
              <a
                class="font-poppins font-bold text-xl block hover:underline link no-underline py-1"
                href={"/"}
              >
                {siteName}
              </a>
              <p class="font-poppins font-normal text-xs pt-4">
                {siteDescription}
              </p>
            </div>
            <div class="flex pt-7 gap-10">
              {links?.map((link) => (
                <div>
                  <h4 class="font-poppins font-medium text-[14px] mb-3">
                    {link.title}
                  </h4>
                  {link.items?.map((item) => (
                    <a
                      class="font-poppins font-normal text-[11px] leading-5 block hover:underline link no-underline py-1"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div>
              <h4 class="font-poppins font-normal text-[14px]">
                {payment.title}
              </h4>
              <div class="flex gap-7 pt-5">
                {payment.items?.map((item) => (
                  <Image
                    src={item.href || ""}
                    width={38}
                    height={26}
                    alt={"payment flag"}
                  />
                ))}
              </div>
            </div>

            <div class="pt-10">
              <h4 class="font-poppins font-normal text-[14px]">
                {social.title}
              </h4>
              <div class="flex gap-8 mt-5">
                {social.items?.map((item) => (
                  <a class="block" href={item.href} target="_blank">
                    {
                      <Image
                        src={item.socialImage || ""}
                        width={26}
                        height={26}
                        alt={item.network}
                      />
                    }
                  </a>
                ))}
              </div>
            </div>
            <div class="flex gap-12 pt-6">
              {download_app?.map((item) => (
                <a class="block" href={item.href} target="_blank">
                  {
                    <Image
                      src={item.item || ""}
                      width={101}
                      height={30}
                      alt={"app download"}
                    />
                  }
                </a>
              ))}
            </div>
          </div>
        </div>

        <div class="border-primary border-t flex flex-col gap-4 items-center justify-between lg:flex-row lg:items-center py-8">
          <div class="flex flex-col gap-4 items-center lg:flex-row lg:gap-6">
            <a
              href={madeWith?.href}
              class="flex items-center gap-2"
              target="_blank"
            >
              <span>{madeWith?.label}</span>
              <Image
                src={madeWith?.src || ""}
                width={100}
                height={28}
                alt={madeWith?.label}
              />
            </a>
            <span>{copyright}</span>
            <div class="flex gap-2 justify-between lg:gap-6">
              {bottomLinks?.map((item) => (
                <a class="link" href={item.href} target="_blank">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
