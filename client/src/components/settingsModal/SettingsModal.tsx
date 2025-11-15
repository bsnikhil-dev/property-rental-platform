import { FaDotCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SettingsModal = ({
  showModal,
  modalRef,
  setShowModal,
}: {
  showModal: boolean;
  modalRef: React.RefObject<HTMLDivElement | null>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const links = ['Wishlist', 'Trips', 'Help', 'Profile'];
  return (
    showModal && (
      <div
        ref={modalRef}
        className="absolute top-full right-[-5px] right-0 mt-2 bg-white shadow-2xl h-auto w-40 rounded-xl z-50 p-4"
      >
        {links.map(link => (
          <p className="pt-6 flex items-center gap-4 text-md text-gray-700 ">
            <FaDotCircle size={10} className="text-rose-400 " />
            <Link to={`/rental/${link.toLocaleLowerCase()}`}>{link}</Link>
          </p>
        ))}
        <div className="border-b border-gray-200 mt-6"></div>
        <button
          onClick={() => setShowModal(false)}
          className="mt-4 mx-auto block bg-rose-400 py-2 px-4 rounded-full text-center text-white"
        >
          Logout
        </button>
      </div>
    )
  );
};
export default SettingsModal;
