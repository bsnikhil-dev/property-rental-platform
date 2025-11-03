import { useState, useMemo, useCallback } from 'react';

function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }, [data, currentPage, itemsPerPage]);

  const goToPage = useCallback(
    (page: number) => {
      const validPage = Math.min(Math.max(page, 1), totalPages);
      setCurrentPage(validPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [totalPages]
  );

  const goToNextPage = useCallback(() => {
    goToPage(currentPage + 1);
  }, [currentPage, goToPage]);

  const goToPrevPage = useCallback(() => {
    goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  return {
    currentItems,
    currentPage,
    totalPages,
    goToPage,
    goToNextPage,
    goToPrevPage,
  };
}

export default usePagination;
