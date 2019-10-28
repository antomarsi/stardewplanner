export const HomeRenders = {
  FETCH_REQUEST: "@@home/FETCH_REQUEST",
  FETCH_SUCCESS: "@@home/FETCH_SUCCESS",
  FETCH_ERROR: "@@home/FETCH_ERROR"
};
export const InitialState = {
  loading: false,
  error: false,
  data: {
    popular: [],
    useful: [],
    latest: []
  }
};
