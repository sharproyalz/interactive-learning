import { formatSingleNumber } from "~/utils/format-single-number";

export const formatDate = (date: Date) => {
  const day = date.getDate();
  const formattedDay = formatSingleNumber(day); // For numbers 1-9 -> 01-09
  const month = date.toLocaleString("en-US", { month: "short" }); // "Aug" for August

  return `${formattedDay} ${month}`;
};
