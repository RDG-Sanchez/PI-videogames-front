// Import Style
import "./Pagination.css";

const Pagination = ({
  gamesPerPage,
  currentPage,
  setCurrentPage,
  totalGames,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  const onPrevPage = () => {
    if (currentPage === 1) {
      return null;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if (currentPage === pageNumbers.at(-1)) {
      return null;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const onExactPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <nav className="main-pagination">
      <button
        disabled={currentPage == 1 ? "on" : null}
        className="pagination-btn-prev pagination-btn"
        onClick={onPrevPage}
      >
        Previous
      </button>
      <div className="pagination-btn-pages">
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`pagination-btn ${
              page === currentPage ? "pageActive" : ""
            }`}
            onClick={() => onExactPage(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        disabled={currentPage == pageNumbers.at(-1) ? "on" : null}
        className="pagination-btn-next pagination-btn"
        onClick={onNextPage}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
