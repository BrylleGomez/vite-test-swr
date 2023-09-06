import React from "react";
import useSWR from "swr";

export const SWRTest: React.FC = () => {
  // const url = "https://fakestoreapi.com/products"; // almost always 200 with data
  // const url = "https://dummy.restapiexample.com/api/v1/employees"; // occasionally returns 429, but usually 200 with data
  const url = "http://httpstat.us/500"; // always gives 500 with no response body

  const fetcher = () =>
    fetch(url).then((res) => {
      if (res.ok) return res.json();
      else return res;
    });

  const { data, error, isLoading } = useSWR("KEY", fetcher, {
    /**
     * The below config on retrying when error does not seem to be working?
     * Or is my understanding of them wrong
     * Expectation: If API fails (ex: 500), API should be refetched again
     */
    shouldRetryOnError: true,
    errorRetryCount: 3,
    errorRetryInterval: 1000,
    /**
     * set revalidateOnFocus to true because switching tabs or clicking on dev tools triggers revalidate
     * can be removed or set to false with same result
     */
    revalidateOnFocus: false,
  });

  if (error) return <div>failed to load: {JSON.stringify(error)}</div>;
  if (isLoading) return <div>loading...</div>;

  return <>Data: {JSON.stringify(data)}</>;
};
