import {
  Props as SearchbarProps,
} from "../search/Searchbar.tsx";
import Icon from "../../components/ui/Icon.tsx";
import { MenuButton, SearchButton } from "../../islands/Header/Buttons.tsx";
import CartButtonVDNA from "../../islands/Header/Cart/vnda.tsx";
import Searchbar from "../../islands/Header/Searchbar.tsx";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import type { SiteNavigationElement } from "apps/commerce/types.ts";
import Image from "apps/website/components/Image.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import { Buttons, Logo } from "../../components/header/Header.tsx";

// Make it sure to render it on the server only. DO NOT render it on an island
function Navbar({
  items,
  searchbar,
  logo,
  buttons,
  logoPosition = "left",
  device,
}: {
  items: SiteNavigationElement[];
  searchbar?: SearchbarProps;
  logo?: Logo;
  buttons?: Buttons;
  logoPosition?: "left" | "center";
  device: "mobile" | "desktop" | "tablet";
}) {
  const platform = usePlatform();

  // Mobile header
  if (device === "mobile") {
    return (
      <div
        style={{ height: navbarHeight }}
        class="lg:hidden grid grid-cols-3 justify-between items-center  w-full px-6 pb-6 gap-2"
      >
        <MenuButton />
        {logo && (
          <a
            href="/"
            class="flex-grow inline-flex items-center justify-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 13}
            />
          </a>
        )}

        <div class="flex justify-end gap-1">
          <SearchButton />
          {platform === "vnda" && <CartButtonVDNA />}
        </div>
      </div>
    );
  }

  // Desktop header
  return (
    <div class="hidden sm:grid sm:grid-cols-3 items-center w-full h-[95px] px-6">
      <div
        class={`flex ${
          logoPosition === "left" ? "justify-start -order-1" : "justify-center"
        }`}
      >
        {logo && (
          <a href="/" aria-label="Store logo" class="block">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 100}
              height={logo.height || 13}
            />
          </a>
        )}
      </div>

      <div>
        {!buttons?.hideSearchButton && (
          <div class="flex items-center text-xs font-thin gap-1">
            <Searchbar searchbar={searchbar}/>
          </div>
        )}

        <ul
          class={`flex gap-6 col-span-1 ${
            logoPosition === "left" ? "justify-center" : "justify-start"
          }`}
        >
          {items.map((item) => <NavItem item={item} />)}
        </ul>
      </div>

      <div class="flex-none flex items-center justify-end gap-6 col-span-1">
        {/* <Searchbar searchbar={searchbar} /> */}

        <div class="flex gap-5">
          {!buttons?.hideCartButton && (
            <div class="flex items-center justify-center font-normal btn btn-primary btn-outline border rounded-full p-0 m-0 w-[43px] h-[43px] min-h-0 ">
              {platform === "vnda" && <CartButtonVDNA />}
            </div>
          )}

          {!buttons?.hideWishlistButton && (
            <a
              class="flex items-center text-xs font-thin"
              href="/wishlist"
              aria-label="Wishlist"
            >
              <button
                class=" font-normal btn btn-primary btn-outline border rounded-full p-0 m-0 w-[43px] h-[43px] min-h-0"
                aria-label="Wishlist"
              >
                <Icon id="Heart" size={27} strokeWidth={0.4} />
              </button>
            </a>
          )}

          {!buttons?.hideAccountButton && (
            <a
              class="flex items-center text-xs font-thin"
              href="/account"
              aria-label="Account"
            >
              <div class="font-normal btn btn-primary btn-outline border rounded-full p-0 m-0 w-[43px] h-[43px] min-h-0">
                <Image
                  class="rounded-lg"
                  src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/fb00010a-a586-4ede-ba77-653171becd82"
                  width={28}
                  height={38}
                  alt={""}
                />
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
