import React from "react";
import { useQuery } from "react-query";

export const ReactQueryTest: React.FC = () => {
  // const url = "https://fakestoreapi.com/products"; // almost always 200 with data
  // const url = "https://dummy.restapiexample.com/api/v1/employees"; // occasionally returns 429, but usually 200 with data
  //   const url = "http://httpstat.us/500"; // always gives 500 with no response body
  /**
   * Response: [RQ] failed to load: {}, Data:
   * Retries? YES
   */
  const url = "https://ballistic-western-donkey.glitch.me/status/500"; // because sometimes httpstat.us is down
  /**
   * Response: [RQ] Data: {"statusCode":500,"description":"Internal Server Error"}, Error: null
   * Retries? NO
   */
  // const url = "https://mock.codes/500"; // alternative to httpstat.us // returns data

  const fetcher = () =>
    fetch(url).then((res) => {
      return res.json();
    });

  const { data, error, isLoading } = useQuery("KEY", fetcher, {
    refetchOnWindowFocus: false,
  });

  if (error)
    return (
      <div>
        [RQ] failed to load: {JSON.stringify(error)}, Data:{" "}
        {JSON.stringify(data)}
      </div>
    );
  if (isLoading) return <div>[RQ] loading...</div>;

  return (
    <>
      [RQ] Data: {JSON.stringify(data)}, Error: {JSON.stringify(error)}
    </>
  );
};
