const toPercent = <T>(value: T): string => {
  if (typeof value !== "number" && typeof value !== "string")
    throw new Error("Invalid input. Only numbers or strings are allowed.");

  const stringValue =
    typeof value === "number" ? Number(value).toFixed(2) : value;

  return `${stringValue.replace(".", ",")}%`;
};

export default toPercent;
