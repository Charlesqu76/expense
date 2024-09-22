const buildUrlWithParams = (
  baseUrl: string,
  params: Record<string, string | number>
): string => {
  const queryString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return `${baseUrl}?${queryString}`;
};

export const myfetch = async ({
  path,
  method = "GET",
  data = {},
}: {
  path: string;
  method?: "GET" | "POST";
  data?: any;
}) => {
  let url = "http://127.0.0.1:3001/api/" + path;
  if (method === "GET") {
    url = buildUrlWithParams(url, data);
  }
  return await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: method === "POST" ? JSON.stringify(data) : null,
  })
    .then((data) => {
      return data.json();
    })
    .catch((e) => {
      console.log(e);
      return {};
    });
};
