export function getOrdinalFormat(number: number): string {
  if (number >= 11 && number <= 13) {
    return number + "th";
  }

  const lastDigit = number % 10;

  switch (lastDigit) {
  case 1:
    return number + "st";
  case 2:
    return number + "nd";
  case 3:
    return number + "rd";
  default:
    return number + "th";
  }
}
