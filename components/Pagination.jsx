const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <div className="flex justify-center items-center flex-row px-4 py-2 gap-4 text-gray-800">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className={`bg-orange-300 hover:bg-orange-400 py-2 px-4 rounded-sm`}
        >
          Prev
        </button>
      )}

      <p>
        {page} of {lastPage}
      </p>
      {page >= { lastPage } ? null : (
        <button
          onClick={handleNextPage}
          className="bg-orange-300 hover:bg-orange-400 py-2 px-4 rounded-sm"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
