import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";

function SearchPage({ searchResult }) {
  const [results, setResults] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setResults(searchResult);
  }, [results]);
  return (
    <div>
      <Layout>
        <div className='grid grid-cols-4 gap-4'>
          {results &&
            results.map((result, index) => {
              return (
                <div className='card relative mb-16' key={index}>
                  <div>
                    <img
                      className=' rounded-sm min-w-full h-52 object-cover'
                      src={result.thambnail}
                      alt=''
                    />
                  </div>
                  <div
                    style={{ width: "90%" }}
                    className='card-body p-3  -bottom-14 left-2/4 transform -translate-x-1/2 bg-green-default absolute'
                  >
                    <h3 className='text-white leading-5 font-semibold'>
                      <a href={result.url}>
                        lofi hip hop radio - beats to sleep/chill
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
      </Layout>
    </div>
  );
}

export default SearchPage;
