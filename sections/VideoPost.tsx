interface Props {
  /**
   * @description The description of name.
   */
  name?: string;
}

export default function Section({ name = "Capy Karla" }: Props) {
  return <div>Hello {name}</div>;
}
