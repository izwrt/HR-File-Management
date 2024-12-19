import axios from "./axios";

const LOGIN_URL = "/api/v1/user/login-user";

export async function loginApi(email, password) {
  try {
    const response = await axios.post(
      LOGIN_URL,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return { success: true, data: response.data };
  } catch (err) {
    return { success: false, data: err };
  }
}