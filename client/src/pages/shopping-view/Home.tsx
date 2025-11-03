import { useQuery } from '@tanstack/react-query';
import { fetchProperties } from '../../api/queries/propertiesService';
import ShoppingHeader from '../../components/shopping-view/Header';
import pin1 from '../../assets/pin1.jpeg';
import usePagination from '../../hooks/usePagination';

interface Property {
  title: string;
}

interface ApiResponse {
  success: boolean;
  data: Property[];
}

const HomePage = () => {
  const { data, error, isLoading, isError } = useQuery<ApiResponse>({
    queryKey: ['properties'],
    queryFn: fetchProperties,
  });
  const properties = data?.data ?? [];
  const { currentItems, currentPage, totalPages, goToPage, goToNextPage, goToPrevPage } =
    usePagination(properties, 10);

  if (isLoading) {
    return <div>Loading properties...</div>;
  }

  if (isError) {
    return <div>Error loading properties: {error.message}</div>;
  }

  return (
    <>
      <ShoppingHeader />
      <div className="p-6 flex flex-wrap gap-5">
        {currentItems?.map(curre => (
          <div className="bg-white flex flex-col justify-items-start">
            <img className="w-60 h-50 rounded-2xl cursor-pointer hover:shadow-xl" src={pin1} />
            <p className="text-gray-800 font-semibold">{curre.title}</p>
            <p className="text-gray-400 font-semibold">$123 for Nights</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4 gap-2 flex-wrap">
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

export default HomePage;
