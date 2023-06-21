export function getHoursHoursMinutes(date: string) {
  const currentDate = new Date(date);
  const hours = new Date(currentDate).getHours();
  const minutes = new Date(currentDate).getMinutes();

  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}
