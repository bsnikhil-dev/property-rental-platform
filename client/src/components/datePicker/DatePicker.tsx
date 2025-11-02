import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import type { CustomDatePickerProps } from '../../types';

const CustomDatePicker = ({
  showDatePicker,
  selctedDates,
  setSelectedDates,
}: CustomDatePickerProps) => {
  return (
    showDatePicker && (
      <div className="absolute top-full left-5 bg-white text-black mt-5 rounded-3xl p-4 shadow-lg z-10">
        <DayPicker
          animate
          mode="range"
          startMonth={new Date()}
          classNames={{
            caption_label: 'text-gray-500 font-semibold',
            chevron: 'w-6 h-6 text-gray-600 fill-current',
            day: 'rounded-full hover:bg-gray-300',
          }}
          selected={selctedDates}
          onSelect={setSelectedDates}
        />
      </div>
    )
  );
};

export default CustomDatePicker;
