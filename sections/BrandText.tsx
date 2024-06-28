import { HTMLWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The description of name.
   */
  title: string;
  text: HTMLWidget;
  backgroundColor: boolean;
}

export default function BrandText({ title, text, backgroundColor= true }: Props) {
  return (
    <div
      class={`text-primary md:max-w-[1114px] h-auto mx-auto mb-[58px] ${
        backgroundColor ? "bg-accent rounded-xl md:pt-[56px] md:pb-[79px]" : "mt-[97px]"
      }`}
    >
      <p class="text-2xl text-center font-bold uppercase  mb-[56px]">{title}</p>
      <div
        class={`w-full text-[12px]  ${
          backgroundColor ? "md:px-[42px]" : ""
        }`}
        dangerouslySetInnerHTML={{ __html: text }}
      >
      </div>
    </div>
  );
}
