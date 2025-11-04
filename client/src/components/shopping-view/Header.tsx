import { useEffect, useRef, useState, type ChangeEvent } from 'react';
import logo from '../../assets/logo.png';
import SearchDropDown from '../searchDropDown/SearchDropDown';
import { filterDestinations, formatDatesForInput } from '../../utils/utilityFunctions/Common';
import type { Destination } from '../../types';
import { destinations } from '../../constants/data';
import CustomDatePicker from '../datePicker/DatePicker';
import type { DateRange } from 'react-day-picker';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import SettingsModal from '../settingsModal/SettingsModal';
import { Link } from 'react-router-dom';

const ShoppingHeader = () => {
  const [showSearchDropDown, setShowSearchDropDown] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [destination, setDestination] = useState<string>('');
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations);
  const [selectedDates, setSelectedDates] = useState<DateRange | undefined>();
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);

  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const datePickerhWrapperRef = useRef<HTMLDivElement>(null);

  const handleDestinationInput = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = filterDestinations(e.target.value.toLowerCase());
    setFilteredDestinations(filtered);
  };

  const handleSearchButton = () => {
    console.log(destination);
    console.log(selectedDates);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
        setShowSearchDropDown(false);
      }
      if (
        datePickerhWrapperRef.current &&
        !datePickerhWrapperRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-gray-200">
      <nav className="flex pr-4 pl-10 py-4 justify-between items-center">
        <img src={logo} className="w-15 h-15 rounded-full" />
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-xl mx-auto">
          <div
            ref={searchWrapperRef}
            className="flex flex-col w-xs cursor-pointer border-r border-gray-300 px-4 relative"
          >
            <label className="text-sm font-semibold text-gray-500">Where</label>
            <input
              type="text"
              placeholder="Search destinations"
              value={destination}
              className="text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              onChange={e => {
                setDestination(e.target.value);
                setShowSearchDropDown(true);
                handleDestinationInput(e);
              }}
              onFocus={() => setShowSearchDropDown(true)}
            />

            <SearchDropDown
              showSearchDropDown={showSearchDropDown}
              setShowSearchDropDown={setShowSearchDropDown}
              setSearchValue={setDestination}
              destinationList={filteredDestinations}
            />
          </div>
          <div
            ref={datePickerhWrapperRef}
            className="relative flex flex-col w-xs  px-4 border-r border-gray-300"
          >
            <label className="text-sm font-semibold text-gray-500">When</label>
            <input
              type="text"
              placeholder="Add dates"
              className="text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              onClick={() => setShowDatePicker(prev => !prev)}
              readOnly
              value={formatDatesForInput(selectedDates)}
            />
            <CustomDatePicker
              showDatePicker={showDatePicker}
              selctedDates={selectedDates}
              setSelectedDates={setSelectedDates}
            />
          </div>
          <button
            className="bg-rose-400 hover:bg-rose-500 text-white p-3 rounded-full ml-2"
            onClick={handleSearchButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-row gap-4 relative">
          <Link to={`/rental/checkout`}>
            <button className="bg-gray-500 text-white font-bold text-xl p-4 rounded-full w-12 h-12 flex items-center justify-center hover:cursor-pointer">
              <FaShoppingCart className="text-xl" />
            </button>
          </Link>
          <button
            onClick={() => setShowSettingsModal(prev => !prev)}
            className="bg-gray-500 text-white font-bold text-xl p-4 rounded-full w-12 h-12 flex items-center justify-center hover:cursor-pointer"
          >
            <FaUser className="text-xl" />
          </button>
          <SettingsModal showModal={showSettingsModal} />
        </div>
      </nav>
    </div>
  );
};

export default ShoppingHeader;
