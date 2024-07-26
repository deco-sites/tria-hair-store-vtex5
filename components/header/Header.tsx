import { AppContext } from "../../apps/site.ts";
import type { Props as SearchbarProps } from "../../components/search/Searchbar.tsx";
import Drawers from "../../islands/Header/Drawers.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import type { SectionProps } from "deco/types.ts";
import Alert from "./Alert.tsx";
import Navbar from "./Navbar.tsx";
// import { headerHeight } from "./constants.ts";

export interface Logo {
  src: ImageWidget;
  alt: string;
  width?: number;
  height?: number;
}

export interface Buttons {
  hideSearchButton?: boolean;
  hideAccountButton?: boolean;
  hideWishlistButton?: boolean;
  hideCartButton?: boolean;
}

export interface LinkTop {
  label: string;
  href: string;
}

export interface Discount {
  image: ImageWidget;
  text: string;
  href: string;
}

export interface Props {
  alerts?: string[];

  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, "platform">;
  linksTopBar?: LinkTop[];
  discountButton?: Discount;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;

  /** @title Logo */
  logo?: Logo;
  logoPosition?: "left" | "center";
  buttons?: Buttons;
}

function Header({
  alerts,
  searchbar,
  linksTopBar = [
    {
      label: "atacado",
      href: "/",
    },
    {
      label: "varejo",
      href: "/",
    },
  ],
  discountButton = {
    image:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/737c6d84-d81f-4d10-8d4a-ac4dde84e2b0",
    text: "Promoções Imperdíveis",
    href: "/",
  },
  navItems = [
    {
      "@type": "SiteNavigationElement",
      name: "Feminino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Masculino",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Sale",
      url: "/",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Linktree",
      url: "/",
    },
  ],
  logo = {
    src:
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    width: 100,
    height: 16,
    alt: "Logo",
  },
  logoPosition = "left",
  buttons,
  device,
}: SectionProps<typeof loader>) {
  const platform = usePlatform();
  const items = navItems ?? [];

  return (
    <>
      <header class="min-h-[77px] max-w-[1300px] p-0 mx-auto ">
        <Drawers menu={{ items }} searchbar={searchbar} platform={platform}>
          <div class="fixed left-0 w-full z-50">
            <div class="min-h-[95px] max-w-[1300px]   mx-auto ">
              {alerts && alerts.length > 0 && <Alert alerts={alerts} />}
              <Navbar
                device={device}
                items={items}
                searchbar={searchbar && { ...searchbar, platform }}
                logo={logo}
                logoPosition={logoPosition}
                buttons={buttons}
                linksTopBar={linksTopBar}
                discountButton={discountButton}
              />
            </div>
          </div>
        </Drawers>
      </header>
    </>
  );
}

export const loader = (props: Props, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default Header;
