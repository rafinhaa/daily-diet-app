export type SelectProps = {
  onSelect: (option: SelectOptionsProps) => void;
};

export type SelectOptionsProps = "Sim" | "Não" | null;
