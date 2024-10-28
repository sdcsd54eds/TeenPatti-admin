import { axiosInstance } from "@/utils/axios";
interface LoginResponse {
  status: string;
  token?: string;
  msg?: string;
}

export const loginAdmin = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      "/api/admin/login",
      {
        username,
        password,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};
