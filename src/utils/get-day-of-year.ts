export function getDayOfYear(date: Date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1); // January 1st of the current year
  const diffInMilliseconds = date.getTime() - startOfYear.getTime(); // Difference in milliseconds
  const millisecondsInADay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day

  // Calculate the difference in days
  const dayOfYear = Math.floor(diffInMilliseconds / millisecondsInADay) + 1;
  return dayOfYear;
}
