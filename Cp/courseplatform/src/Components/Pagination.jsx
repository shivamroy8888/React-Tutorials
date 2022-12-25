function createArrayOfSize(n) {
  return new Array(n).fill(0);
}

function Pagination({totalPages,currentPage,handlePageChange}) {
  let pages = createArrayOfSize(totalPages).map((a, i) => 
    <button key={i} data-testid="page-btn" disabled={currentPage === i+1} onClick={()=>(handlePageChange(i+1))}>
    {i+1}
    </button>);
  return <div>{pages}</div>;
}

export default Pagination;
