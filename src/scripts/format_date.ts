export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const day = date.getDate()
  let ordinalDay: string;

  if (day > 3 && day < 21) {
    ordinalDay = `${day}th`;
  } else {
    switch (day % 10) {
      case 1:
        ordinalDay = `${day}st`;
        break;
      case 2:
        ordinalDay = `${day}nd`;
        break;
      case 3:
        ordinalDay = `${day}rd`;
        break;
      default: 
        ordinalDay = `${day}th`;
        break;
    }
  }

  return `${year} ${month} ${ordinalDay}`;
}