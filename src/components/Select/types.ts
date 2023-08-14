export type SelectProps = {
  onSelect: (option: SelectOptionsProps) => void;
  selected: SelectOptionsProps;
};

export type SelectOptionsProps = "Sim" | "Não" | null;
