import ShoppingHeader from '../../components/shopping-view/Header';
import max from '../../assets/max.jpg';
import hoodie from '../../assets/hoodie.jpg';
import nike from '../../assets/nike.jpg';
import puma from '../../assets/puma.jpg';
import cap from '../../assets/cap.jpg';

const ViewProperyPage = () => {
  return (
    <>
      <ShoppingHeader />
      <div className="bg-white h-screen mx-15">
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

        <div className="border-t border-gray-200 mt-5 py-5 text-gray-700 font-normal">
          <p className="text-gray-700 font-semibold text-lg">What this place offers</p>
          <div className="flex py-5">
            <div className="h-auto w-auto flex-1">
              <ul>
                <li>
                  <label>
                    <input type="checkbox" name="features" value="garden-view" /> Garden View
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="features" value="sea-view" /> Sea View
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="features" value="wifi" /> Wifi - 222Mbps
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="features" value="tv" /> TV
                  </label>
                </li>
              </ul>
            </div>
            <div className="h-auto w-auto flex-1">
              <ul>
                <li>
                  <label>
                    <input type="checkbox" name="features" value="garden-view" /> Garden View
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="features" value="sea-view" /> Sea View
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="features" value="wifi" /> Wifi - 222Mbps
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" name="features" value="tv" /> TV
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProperyPage;
