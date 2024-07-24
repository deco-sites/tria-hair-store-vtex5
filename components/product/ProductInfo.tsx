import { SendEventOnView } from "../../components/Analytics.tsx";
//import Breadcrumb from "../../components/ui/Breadcrumb.tsx";
import AddToCartButtonLinx from "../../islands/AddToCartButton/linx.tsx";
import AddToCartButtonShopify from "../../islands/AddToCartButton/shopify.tsx";
import AddToCartButtonVNDA from "../../islands/AddToCartButton/vnda.tsx";
import AddToCartButtonVTEX from "../../islands/AddToCartButton/vtex.tsx";
import AddToCartButtonWake from "../../islands/AddToCartButton/wake.tsx";
import AddToCartButtonNuvemshop from "../../islands/AddToCartButton/nuvemshop.tsx";
import OutOfStock from "../../islands/OutOfStock.tsx";
import ShippingSimulation from "../../islands/ShippingSimulation.tsx";
import { formatPrice } from "../../sdk/format.ts";
import { useId } from "../../sdk/useId.ts";
import { useOffer } from "../../sdk/useOffer.ts";
import { usePlatform } from "../../sdk/usePlatform.tsx";
import { ProductDetailsPage } from "apps/commerce/types.ts";
import { mapProductToAnalyticsItem } from "apps/commerce/utils/productToAnalyticsItem.ts";
import ProductSelector from "./ProductVariantSelector.tsx";

import ImageGallerySlider from "../../components/product/Gallery/ImageSlider.tsx";
import Image from "apps/website/components/Image.tsx";

interface Props {
  page: ProductDetailsPage | null;
  layout?: {
    /**
     * @title Product Name
     * @description How product title will be displayed. Concat to concatenate product and sku names.
     * @default product
     */
    name?: "concat" | "productGroup" | "product";
  };
}

function ProductInfo({ page, layout }: Props) {
  const platform = usePlatform();
  const id = useId();

  if (page === null) {
    throw new Error("Missing Product Details Page Info");
  }

  const { breadcrumbList, product } = page;
  const {
    productID,
    offers,
    name = "",
    gtin,
    isVariantOf,
    additionalProperty = [],
  } = product;
  const description = product.description || isVariantOf?.description;
  const {
    price = 0,
    listPrice,
    seller = "1",
    installments,
    availability,
  } = useOffer(offers);
  const productGroupID = isVariantOf?.productGroupID ?? "";
  const breadcrumb = {
    ...breadcrumbList,
    itemListElement: breadcrumbList?.itemListElement.slice(0, -1),
    numberOfItems: breadcrumbList.numberOfItems - 1,
  };

  const eventItem = mapProductToAnalyticsItem({
    product,
    breadcrumbList: breadcrumb,
    price,
    listPrice,
  });

  return (
    <div class="flex flex-col  w-[1300px]" id={id}>
      {/* <Breadcrumb itemListElement={breadcrumb.itemListElement} /> */}
      {/* Code and name */}

      <h1 class=" bg-primary  ">
        <span class="font-bold text-2xl uppercase text-accent text-center block py-8 mx-auto w-[1300px] ">
          {layout?.name === "concat"
            ? `${isVariantOf?.name} ${name}`
            : layout?.name === "productGroup"
            ? isVariantOf?.name
            : name}
        </span>
      </h1>

      <div class="flex mx-6 mt-8 sm:mt-8 ">
        <ImageGallerySlider page={page} />

        <div class=" flex flex-col pl-10 w-1/2">
          <div class="flex gap-3">
            {gtin && (
              <span class="text-[8px] font-bold text-primary">Cod. {gtin}</span>
            )}
            <span class="uppercase x-[66px] h-[10px] btn btn-primary min-h-0 text-[8px] text-white text-normal">
              TAG
            </span>
          </div>

          {/* Avaliador */}

          <div class="flex gap-[15px] pt-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                alt="icone de estrela para avaliar o produto"
                src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10800/691a294e-1d0b-4195-b3b9-21a46c9b3214"
                width={18}
                height={18}
              />
            ))}
          </div>

          {/* Prices */}
          <div class="mt-4">
            <div class="flex flex-row gap-2 items-center">
              {(listPrice ?? 0) > price && (
                <span class="line-through text-base-300 text-xl">
                  {formatPrice(listPrice, offers?.priceCurrency)}
                </span>
              )}
              <span class="font-bold text-4xl text-primary">
                {formatPrice(price, offers?.priceCurrency)}
              </span>
            </div>
            <span class="text-sm text-base-300">{installments}</span>
          </div>

          {/* Sku Selector */}
          <div class="mt-4 sm:mt-6">
            <ProductSelector product={product} />
          </div>

          {/* Add to Cart and Favorites button */}
          <div class="mt-4 sm:mt-10 flex flex-col gap-2 w-full h-[34px]">
            {availability === "https://schema.org/InStock"
              ? (
                <>
                  {platform === "vnda" && (
                    <AddToCartButtonVNDA
                      eventParams={{ items: [eventItem] }}
                      productID={productID}
                      additionalProperty={additionalProperty}
                    />
                  )}
                </>
              )
              : <OutOfStock productID={productID} />}
          </div>
          {/* Shipping Simulation */}
          <div class="mt-8">
            {platform === "vtex" && (
              <ShippingSimulation
                items={[
                  {
                    id: Number(product.sku),
                    quantity: 1,
                    seller: seller,
                  },
                ]}
              />
            )}
          </div>
          {/* Description card */}
          <div class="mt-[14px] sm:mt-6">
            <span class="text-sm">
              {description && (
                // <details>
                //   <summary class="cursor-pointer">Descrição</summary>
                //   <div
                //     class="ml-2 mt-2"
                //     dangerouslySetInnerHTML={{ __html: description }}
                //   />
                // </details>
                <div
                  class="ml-2 text-sm text-primary h-[91px]"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              )}
            </span>
          </div>
          {/* Analytics Event */}
          <SendEventOnView
            id={id}
            event={{
              name: "view_item",
              params: {
                item_list_id: "product",
                item_list_name: "Product",
                items: [eventItem],
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
