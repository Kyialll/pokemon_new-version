  import ReactPaginate from "react-paginate";
import classes from '../Pagination/Pagination.module.css'
const Pagination=({changeOffset,page,pageCount})=>{
    return(


        <ReactPaginate
            className={classes.pagination}
            breakLabel="..."
            nextLabel=" >"
            onPageChange={(e) => changeOffset(e.selected+1)}
            pageRangeDisplayed={page}
            pageCount={pageCount}
            previousLabel="< "

            renderOnZeroPageCount={null}
        >
            {page}
        </ReactPaginate>
    )
}

export default Pagination;