import { useState, useEffect } from "react";
export interface ResponseStatus<T> {
  status: "pending" | "loaded" | "error";
  data: null | T | string;
}

export function useFetch<T>(url: string) {
  const [responseStatus, setResponseStatus] = useState<ResponseStatus<T>>({
    status: "pending",
    data: null,
  });

  const delay = (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

  async function fetchUrl(url) {
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Something went wrong ,please try again");
    }

    const jsonObj = await response.json();
    await delay(3000);
    return jsonObj;
  }

  useEffect(() => {
    async function fetchPersonInternal() {
      try {
        const data = await fetchUrl(url);
        setResponseStatus({ status: "loaded", data: data });
      } catch (err) {
        setResponseStatus({
          status: "error",
          data: "Some data occured , please try again",
        });
      }
    }

    setResponseStatus({ status: "pending", data: null });
    fetchPersonInternal();
    console.log("Swapi fetch");
  }, [url]);

  return { ...responseStatus };
}
