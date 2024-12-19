import axios from "axios";
import { getCookie } from "../utils";
// import { getCustomerTokenFromCookie, getTokenFromCookie } from "./cookiesFunc";

const VITE_VENDOR_API_PROD_URL = "https://mesky.in/main";
const VITE_VENDOR_API_STAGE_URL = "http://13.234.203.251:8084/inventory";

const BASE_URL = import.meta.env.VITE_ENV.includes("prod")
  ? VITE_VENDOR_API_PROD_URL
  : VITE_VENDOR_API_STAGE_URL;

export const httpVendor = axios.create({
  baseURL: BASE_URL,
});

httpVendor.interceptors.request.use((conf) => {
  const token = getCookie("authToken");

  if (token) {
    conf.headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      ...conf.headers,
    };
  }
  return conf;
});
