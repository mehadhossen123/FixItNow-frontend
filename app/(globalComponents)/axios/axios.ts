import axios from "axios";
export const fetchAxios = axios.create({
  baseURL: `https://fix-it-now-sigma-wheat.vercel.app`,
  headers: {
    "content-type": "application/json",
  },
});
