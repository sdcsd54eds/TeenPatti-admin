import { axiosInstance } from "@/utils/axios";
import axios from "axios";

export const loginAdmin = async (
  username: string,
  password: number | unknown,
) => {
  console.log("username :>> ", username);
  console.log("password :>> ", password);
  try {
    const response = await axios.post(
      "http://admin-panel-env.eba-wrphxypt.ap-south-1.elasticbeanstalk.com/api/admin/login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error);

      console.error("Response Data:", error.response?.data);
      console.error("Response Status:", error.response?.status);
      console.error("Response Headers:", error.response?.headers);
    } else {
      console.error("General error:", error);
    }
    throw error;
  }
};
