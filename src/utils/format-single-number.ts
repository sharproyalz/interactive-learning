export function formatSingleNumber(num: number) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
