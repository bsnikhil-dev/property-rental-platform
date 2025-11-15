import logo from '../../assets/logo.png';
import upi from '../../assets/upi.jpg';
import cards from '../../assets/cards.png';
import netbaking from '../../assets/netbaking.png';
import pin1 from '../../assets/pin1.jpeg';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };
  const handleLogo = () => {
    navigate('/rental/home');
  };
  return (
    <div>
      <nav className="bg-gray-200 flex pr-4 pl-10 py-4  justify-between items-center">
        <img
          src={logo}
          onClick={handleLogo}
          className="w-15 h-15 rounded-full hover:cursor-pointer"
        />
      </nav>
      <div className="flex w-auto gap-4 py-5 mx-48 items-center">
        <button
          onClick={handleBackButton}
          className=" flex items-center justify-center bg-gray-100 text-gray-700 rounded-full w-10 h-10 hover:cursor-pointer"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </button>
        <h3 className="text-gray-500 font-bold text-3xl tracking-tight">Confirm and Pay</h3>
      </div>
      <div className="flex gap-20 justify-center">
        <div className="h-auto w-100 rounded-4xl  p-5 shadow-2xl">
          <div className="flex items-center justify-start gap-2 pb-4">
            <img src={pin1} className="w-25 h-25 rounded-xl" />
            <h2 className="text-gray-600 font-bold text-xl">Beach View Room</h2>
          </div>
          <div className="border-t-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col py-4 gap-2">
              <text className="text-gray-600 font-bold">Dates</text>
              <span className="text-gray-600 font-normal">11-14 Nov 2025</span>
            </div>
            <button className="bg-rose-400 text-white px-3 py-1 rounded-3xl hover:bg-rose-600 hover:cursor-pointer">
              Change
            </button>
          </div>
          <div className="border-t-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col py-4 gap-2">
              <text className="text-gray-600 font-bold">Guests</text>
              <span className="text-gray-600 font-normal">2 adults</span>
            </div>
            <button className="bg-rose-400 text-white px-3 py-1 rounded-3xl hover:bg-rose-600 hover:cursor-pointer">
              Change
            </button>
          </div>
          <div className="border-t-1 border-gray-300 flex justify-between items-center">
            <div className="flex flex-col py-4 gap-2">
              <text className="text-gray-600 font-bold">Price Details</text>
              <span className="text-gray-600 font-normal">3 nights * 999</span>
            </div>
            <span className="text-gray-500 px-4 py-2 font-normal">28,896</span>
          </div>
        </div>
        <div className="h-auto w-100 rounded-4xl p-5 shadow-2xl">
          <h6 className="text-gray-500 mb-8 font-bold text-lg tracking-tight">
            Add a payment method
          </h6>
          <ul>
            <li className="text-black mb-8 font-light text-md flex items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <img src={upi} alt="upi" className="w-10" />
                <text className="text-gray-500 font-normal text-lg">UPI QR code</text>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                value="qr-code"
                className="cursor-pointer w-5 h-5"
              />
            </li>
            <li className="text-black mb-8 font-light text-md flex items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <img src={upi} alt="upi" className="w-10" />
                <text className="text-gray-500 font-normal text-lg">UPI ID</text>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                value="upi-id"
                className="cursor-pointer w-5 h-5"
              />
            </li>
            <li className="text-black mb-8 font-light text-md flex items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <img src={cards} alt="upi" className="w-8" />
                <text className="text-gray-500 font-normal text-lg">Credit or Debit Cards</text>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                className="cursor-pointer w-5 h-5"
              />
            </li>
            <li className="text-black mb-8 font-light text-md flex items-center justify-between gap-5">
              <div className="flex items-center gap-5">
                <img src={netbaking} alt="upi" className="w-8" />
                <text className="text-gray-500 font-normal text-lg">Net Banking</text>
              </div>
              <input
                type="radio"
                name="paymentMethod"
                value="net-banking"
                className="cursor-pointer w-5 h-5"
              />
            </li>
          </ul>
          <div className="flex justify-end">
            <button className="bg-rose-400 text-white px-10 py-2 rounded-3xl hover:bg-rose-600 hover:cursor-pointer">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
