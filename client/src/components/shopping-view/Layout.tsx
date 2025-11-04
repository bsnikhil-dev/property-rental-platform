import pin1 from '../../assets/pin1.jpeg';
import usePagination from '../../hooks/usePagination';
import { fetchProperties } from '../../api/queries/propertiesService';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

interface Property {
  title: string;
}

interface ApiResponse {
  success: boolean;
  data: Property[];
}

const ShoppingLayout = () => {
  const { data, error, isLoading, isError } = useQuery<ApiResponse>({
    queryKey: ['properties'],
    queryFn: fetchProperties,
  });
  const properties = data?.data ?? [];
  const { currentItems, currentPage, totalPages, goToPage, goToNextPage, goToPrevPage } =
    usePagination(properties, 10);

  if (isLoading) {
    return <LoadingSpinner size="lg" centered={true} />;
  }

  if (isError) {
    return <div>Error loading properties: {error.message}</div>;
  }
  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center items-center py-5 px-2 ">
        {currentItems?.map(curre => (
          <Link to={`/rental/details/${curre.title}`}>
            <div className="bg-white flex flex-col justify-items-start">
              <img className="w-60 h-50 rounded-2xl cursor-pointer hover:shadow-xl" src={pin1} />
              <p className="text-gray-800 font-semibold">{curre.title}</p>
              <p className="text-gray-400 font-semibold">$123 for Nights</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="border-b border-gray-300 w-[98%] mx-auto mt-2"></div>
      <div className="flex justify-center my-2 gap-2 flex-wrap">
        <button
          onClick={() => goToPrevPage()}
          disabled={currentPage === 1}
          className="py-2 px-4 border border-gray-300 rounded-xl"
          style={{
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            background: currentPage === 1 ? '#eee' : 'white',
          }}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => goToPage(page)}
            className="py-2 px-4 border border-gray-300 rounded-xl cursor-pointer"
            style={{
              background: currentPage === page ? '#f5516cff' : 'white',
              color: currentPage === page ? 'white' : 'black',
            }}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToNextPage()}
          disabled={currentPage === totalPages}
          className="py-2 px-4 border border-gray-300 rounded-xl"
          style={{
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            background: currentPage === totalPages ? '#eee' : 'white',
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ShoppingLayout;
