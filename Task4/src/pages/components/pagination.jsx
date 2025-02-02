import { useState } from "react";
import ReactPaginate from "react-paginate";
import "./../../css/pagination.css";

export function Pagination({ onChangePage, blogsCount }) {
    
    const [pageRange, setPageRange] = useState((window.innerWidth < 980) ? 0 : 3);
    window.addEventListener('resize', (e) => {
        setTimeout(() => {
            setPageRange((window.innerWidth < 980) ? 0 : 3);
        }, 1000);
    });

    if(blogsCount.length / 8 !== 1)
        return (
            <>
                <hr/>
                <ReactPaginate className="pagination"
                    breakLabel="..."         //заповнення пропуску між показуваними сторінками, 
                    nextLabel="Next"        // надпис кнопки переходу на наступну сторінку
                    onPageChange={(event) => { 
                        onChangePage(event.selected * 8);
                        window.scrollTo(0, 450);        // обробник події при переходу між сторінками
                    }}
                    pageRangeDisplayed={pageRange}      //діапазон показуваних сторінок разом з поточною
                    marginPagesDisplayed={pageRange}    //кількість показуваних сторінок через відступ,
                    pageCount={blogsCount / 8}          //кількість сторінок
                    pageClassName="page"                //назва стилю блоку з номером сторінки
                    previousLabel="Previous"            //надпис кнопки переходу на попередню сторінку
                    renderOnZeroPageCount={null}
                    
                    activeClassName="page-active"       //клас активної сторінки
                    pageLinkClassName="page-link"       //клас посилання на сторінку
                    
                />
            </>
        )
}