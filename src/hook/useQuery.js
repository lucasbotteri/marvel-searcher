import { useLocation } from "react-router-dom";

const useQuery = () => {
  const urlParams = new URLSearchParams(useLocation().search);

  return Array.from(urlParams).reduce(
    (paramsObject, [queryName, queryValue]) => ({
      ...paramsObject,
      [queryName]: queryValue,
    }),
    {}
  );
};
export default useQuery;
