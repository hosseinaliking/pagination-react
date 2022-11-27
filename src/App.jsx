import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "@tanstack/react-query";

//* Assets *//
import fetchPost from "./api/fetchPost";

const App = () => {
  const { data, isLoading } = useQuery(["posts"], fetchPost);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="max-w-[780px] mx-auto my-5 py-2">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        currentItems.map((item, index) => {
          return (
            <p
              key={index}
              className="m-3 p-2 rounded shadow cursor-pointer border"
            >
              {item.title}
            </p>
          );
        })
      )}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className='flex items-center justify-center gap-5 bg-red-400'
        pageLinkClassName='page'
      />
    </div>
  );
};

export default App;
