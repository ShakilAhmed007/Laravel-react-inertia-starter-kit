import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Home({ bookmarksList }) {
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarks, setBookmarks] = useState(bookmarksList.data);
  const [searchState, setSearchState] = useState("");
  const [page, setPage] = useState(2);
  const [searchPage, setSearchPage] = useState(2);
  let cancelToken;

  const search = (data) => {
    setSearchState(data);
    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("canceling the previos request");
    }
    cancelToken = axios.CancelToken.source();
    axios
      .post(`/search`, { search: data }, { cancelToken: cancelToken.token })
      .then((res) => {
        setBookmarks(res.data.data);
      });
  };

  const handlePagenate = () => {
    setPage(page + 1)

    var nextPage = `/?page=${page}`;
    axios.get(nextPage).then(res => {
      const data = [...bookmarks, ...res.data.data];
      setBookmarks(data);
    })
  };

  const handleSearchPagenate = () => {
    setPage(searchPage + 1)

    var nextPage = `http://localhost/search?page=${page}`;
    console.log(bookmarksList.last_page_url);
    if(searchPage != bookmarksList.last_page){
      axios.post(nextPage).then(res => {
        const data = [...bookmarks, ...res.data.data];
        setBookmarks(data);
        console.log(data);
      })
    }
    
  };

  useEffect(() => {
    // console.log(bookmarks);
    setIsLoading(false);
  }, [bookmarks]);

  if (searchState) {
    return (
      <InfiniteScroll
        dataLength={bookmarks && bookmarks.length}

        next={() => handleSearchPagenate()}
        hasMore={true}
      >
        <Layout search={search}>
          {bookmarks.length > 0 ? (
            <div className='grid grid-cols-4 gap-4'>
              {bookmarks &&
                bookmarks.map((bookmark, index) => {
                  return (
                    <div className='card relative mb-16' key={index}>
                      <div>
                        <img
                          className={` bg-gray-500 rounded-sm min-w-full h-52 object-cover ${isLoading ? "animate-pulse" : ""
                            }`}
                          src={bookmark.thambnail}
                          alt=''
                        />
                      </div>
                      <div
                        style={{ width: "90%" }}
                        className='card-body p-3  -bottom-14 left-2/4 transform -translate-x-1/2 bg-green-default absolute'
                      >
                        <h3 className='text-white leading-5 font-semibold'>
                          <a href={bookmark.url}>
                            {bookmark.title}
                          </a>
                        </h3>
                        <p className='text-xs text-white mt-1'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div>no data found</div>
          )}
        </Layout>
      </InfiniteScroll>
    );
  } else {
    return (
      <InfiniteScroll
        dataLength={bookmarks && bookmarks.length}

        next={() => handlePagenate()}
        hasMore={true}
      >
        <Layout search={search}>
          {bookmarks.length > 0 ? (
            <div className='grid grid-cols-4 gap-4'>
              {bookmarks &&
                bookmarks.map((bookmark, index) => {
                  return (
                    <div className='card relative mb-16' key={index}>
                      <div>
                        <img
                          className={` bg-gray-500 rounded-sm min-w-full h-52 object-cover ${isLoading ? "animate-pulse" : ""
                            }`}
                          src={bookmark.thambnail}
                          alt=''
                        />
                      </div>
                      <div
                        style={{ width: "90%" }}
                        className='card-body p-3  -bottom-14 left-2/4 transform -translate-x-1/2 bg-green-default absolute'
                      >
                        <h3 className='text-white leading-5 font-semibold'>
                          <a href={bookmark.url}>
                            {bookmark.title}
                          </a>
                        </h3>
                        <p className='text-xs text-white mt-1'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div>no data found</div>
          )}
        </Layout>
      </InfiniteScroll>
    );
  }
}

export default Home;
