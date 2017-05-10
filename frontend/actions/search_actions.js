export const RECIEVE_SEARCH_PARAMS = "RECIEVE_SEARCH_PARAMS";

export const receiveSearchParams = (searchParams) => {
   
  return {
    type: RECIEVE_SEARCH_PARAMS,
    searchParams
  };
};
