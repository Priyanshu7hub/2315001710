import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

export const getNotifications = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};