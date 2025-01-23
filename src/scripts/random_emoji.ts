const generalEmoji = [
  "🍎", "👺", "🍒", "㊗️", "🫐", "🥝", "🍉", "🍓", "🍇", "🦑", "🍕", "🍄", "🤓"
];

const newYearEmoji = [
  "🎆", "🧨", "🎉", "🎊", "🥂", "🍾", ""
];

const lunarNewYearEmoji = [
  "🧨", "🧧",
];

const halloweenEmoji = [
  "🎃", "🍬", "👻", "💀", "🕷️", "🧙‍♀️", "👹", "🧟",
];

const christmasEmoji = [
  "🎅", "🤶", "🎄", "⛄", "🎄", "🎁", "🛷",
];

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

export function randomEmoji(): string {
  const today = new Date();
  let emojiList: string[];

  if (isBetween(today, 1, 1, 1, 7)) {
    emojiList = newYearEmoji;
  } else if (isBetween(today, 1, 24, 2, 17)) {
    emojiList = lunarNewYearEmoji;
  } else if (isBetween(today, 10, 14, 10, 31)) {
    emojiList = halloweenEmoji;
  } else if (isBetween(today, 12, 14, 12, 31)) {
    emojiList = christmasEmoji;
  } else {
    emojiList = generalEmoji;
  }

  const randomIndex = Math.floor(Math.random() * emojiList.length);

  return emojiList[randomIndex];
}