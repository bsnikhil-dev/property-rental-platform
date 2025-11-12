import ShoppingHeader from '../../components/shopping-view/Header';
import max from '../../assets/max.jpg';
import hoodie from '../../assets/hoodie.jpg';
import nike from '../../assets/nike.jpg';
import puma from '../../assets/puma.jpg';
import cap from '../../assets/cap.jpg';

const ViewProperyPage = () => {
  const leftFeatures = [
    { label: 'Garden View', available: true },
    { label: 'Sea View', available: false },
    { label: 'Wifi - 222Mbps', available: true },
    { label: 'TV', available: true },
  ];

  const rightFeatures = [
    { label: 'Garden View', available: false },
    { label: 'Sea View', available: true },
    { label: 'Wifi - 222Mbps', available: true },
    { label: 'TV', available: false },
  ];
  return (
    <>
      <ShoppingHeader />
      <div className="relative bg-white h-screen mx-15">
        <h1 className="text-gray-500 font-bold text-3xl py-5">Beach View Room</h1>

        <div className="grid grid-cols-12 gap-2 h-auto rounded-lg overflow-hidden">
          <div className="col-span-7 max-h-[500px]  overflow-hidden">
            <img src={max} alt="Large" className="w-full max-h-full object-fill" />
          </div>

          <div className="col-span-5 grid grid-cols-2 grid-rows-2 gap-2 max-h-[500px]">
            <div className="overflow-hidden">
              <img src={nike} alt="Image 2" className="w-full h-full object-fill" />
            </div>
            <div className="overflow-hidden">
              <img src={puma} alt="Image 3" className="w-full h-full object-fill" />
            </div>
            <div className="overflow-hidden">
              <img src={cap} alt="Image 4" className="w-full h-full object-fill" />
            </div>
            <div className="overflow-hidden">
              <img src={hoodie} alt="Image 5" className="w-full h-full object-fill" />
            </div>
          </div>
        </div>
        <p className="text-gray-600 font-medium text-2xl mt-5">
          Private room in guest house in Majorda, India
        </p>
        <p className="text-gray-600 font-medium text-sm pt-1">
          2 guests - 1 bedroom - 1 bed - 1 private bathroom
        </p>

        <div className="border-t border-gray-200 mt-5 py-5 text-gray-700 font-normal w-[60%]">
          <p className="text-gray-700 font-semibold text-lg">What this place offers</p>
          <div className="flex py-5">
            <div className="flex-1">
              <ul className="space-y-4">
                {leftFeatures.map((f, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div
                      className={`flex items-center justify-center w-5 h-5 rounded-full border text-white ${
                        f.available ? 'bg-green-400 border-green-400' : 'bg-red-400 border-red-400'
                      }`}
                    >
                      {f.available ? '✓' : '✕'}
                    </div>
                    <span className="text-gray-800 font-medium">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <ul className="space-y-4">
                {rightFeatures.map((f, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <div
                      className={`flex items-center justify-center w-5 h-5 rounded-full border text-white ${
                        f.available ? 'bg-green-400 border-green-400' : 'bg-red-400 border-red-400'
                      }`}
                    >
                      {f.available ? '✓' : '✕'}
                    </div>
                    <span className="text-gray-800 font-medium">{f.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.2)] h-auto w-[35%] absolute right-0 top-150 py-4 px-8 flex flex-col gap-4">
          <p className="text-gray-500 font-medium text-lg">
            <strong className="underline text-2xl text-gray-800">$9,130</strong> for 2 nights
          </p>
          <div className="border border-dotted border-gray-700 rounded-lg">
            <div className="flex">
              <div className="flex-1 border-dotted border-r border-b py-2">
                <p className="text-sm px-4 text-gray-700">Check In</p>
                <p className="text-sm px-4 text-gray-700">11/21/25</p>
              </div>
              <div className="flex-1 border-dotted border-b py-2">
                <p className="text-sm px-4 text-gray-700">Check Out</p>
                <p className="text-sm px-4 text-gray-700">11/21/25</p>
              </div>
            </div>
            <div className=" px-4 py-1">
              <label htmlFor="roomType" className="text-sm text-gray-700">
                Guests
              </label>
              <select id="roomType" className="w-full text-sm focus:outline-none text-gray-700">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <button className="bg-rose-400 py-3 rounded-3xl text-white">Reserve</button>
          <p className="text-center text-gray-700 text-md">You Won't be charged yet</p>
        </div>
      </div>
    </>
  );
};

export default ViewProperyPage;
