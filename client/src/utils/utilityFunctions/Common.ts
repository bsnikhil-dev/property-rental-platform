import type { DateRange } from 'react-day-picker';
import { destinations } from '../../constants/data';

export const filterDestinations = (value: string) => {
  return destinations.filter(destinaton => destinaton.title.toLowerCase().includes(value));
};

export const formatDatesForInput = (dates: DateRange | undefined) => {
  if (!dates) return '';

  const format = (date: Date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  if ('from' in dates && 'to' in dates) {
    if (!dates.from) return '';
    if (!dates.to) return format(dates.from);
    return `${format(dates.from)} - ${format(dates.to)}`;
  }
};
