//import { PropertyValue } from "apps/commerce/types.ts";
import { useCart } from "apps/vnda/hooks/useCart.ts";
import Button, { Props as BtnProps } from "./common.tsx";

export interface Props extends Omit<BtnProps, "onAddItem"> {
  productID: string;
  // additionalProperty: PropertyValue[];
}

function AddToCartButton(
  { productID,  eventParams, variantStyle }: Props,
) {
  const { addItem } = useCart();
  const onAddItem = () =>
    // @ts-ignore atributes is not required
    addItem({
      quantity: 1,
      itemId: productID,
      
    });

  return <Button onAddItem={onAddItem} eventParams={eventParams} variantStyle={ variantStyle } />;
}

export default AddToCartButton;
