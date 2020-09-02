import axios from "axios";
import { API_URL } from "./config";

export const dataRequest = (url) => axios.get(API_URL + url);
