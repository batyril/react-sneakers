export function getDaysMonths(date: string) {
  const currentDate = new Date(date);

  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const formattedMonth = months[monthIndex];

  return `${day} ${formattedMonth}`;
}
