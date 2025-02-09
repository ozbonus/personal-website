export function seasonalEmoji(): string {
  const today = new Date();

  const newYear = isBetween(today, 1, 1, 1, 2);
  const lunarNewYear = isBetween(today, 1, 24, 2, 9);
  const pieDay = isBetween(today, 3, 14, 3, 14);
  const moleDay = isBetween(today, 10, 23, 10, 23);
  const halloween = isBetween(today, 10, 14, 10, 31);
  const christmas = isBetween(today, 12, 14, 12, 31);

  if (newYear) {
    return "🎊";
  } else if (lunarNewYear) {
    return "🐍";
  } else if (pieDay) {
    return "🥧";
  } else if (moleDay) {
    return "🧪";
  } else if (halloween) {
    return "👻";
  } else if (christmas) {
    return "🎄";
  } else {
    return "🍎";
  }
}

function isBetween(
  today: Date,
  startMonth: number,
  startDay: number,
  endMonth: number,
  endDay: number,
): boolean {
  const startDate = new Date(today.getFullYear(), startMonth - 1, startDay);
  const endDate = new Date(today.getFullYear(), endMonth - 1, endDay);
  return today >= startDate && today <= endDate;
}
