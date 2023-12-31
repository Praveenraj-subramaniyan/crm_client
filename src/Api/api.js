import axios from "axios";
import Cookies from "js-cookie";
const url = "https://crm-server-8og5.onrender.com/";
//const url = "http://localhost:3000/";

export const LoginAPI = async (loginData) => {
  try {
    const response = await axios.post(url + "login", loginData);
    const responseLoginData = response.data;
    return responseLoginData;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const DashboardAPI = async () => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.post(url + "home", loginDataFromCookie);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const LeadAPI = async () => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.post(url + "leads", loginDataFromCookie);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const CreateLeadAPI = async (create) => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const payLoad = {
      loginDataFromCookie,
      create,
    };
    const response = await axios.post(url + "leads/create", payLoad);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const EditLeadAPI = async (edit) => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  const payLoad = {
    loginDataFromCookie,
    edit,
  };
  try {
    const response = await axios.post(url + "leads/edit", payLoad);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const StatusLeadAPI = async (id, status) => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  const payLoad = {
    loginDataFromCookie,
    id,
    status,
  };
  try {
    const response = await axios.post(url + "leads/status", payLoad);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const ServicesAPI = async () => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.post(url + "Services", loginDataFromCookie);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const CreateServicesAPI = async (create) => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const payLoad = {
      loginDataFromCookie,
      create,
    };
    const response = await axios.post(url + "Services/create", payLoad);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const EditServicesAPI = async (edit) => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  const payLoad = {
    loginDataFromCookie,
    edit,
  };
  try {
    const response = await axios.post(url + "Services/edit", payLoad);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const StatusServicesAPI = async (id, status) => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  const payLoad = {
    loginDataFromCookie,
    id,
    status,
  };
  try {
    const response = await axios.post(url + "Services/status", payLoad);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const ForgetPasswordApi = async (email) => {
  const expiryDate = new Date(Date.now() + 24 * 60 * 60 * 1000);
  Cookies.set("forget_email", JSON.stringify(email), {
    expires: expiryDate,
    sameSite: "None",
    secure: true,
  });
  try {
    const response = await axios.post(url + "password/forget", { email });
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const NewPasswordApi = async (otp, newPassword, confirmPassword) => {
  try {
    const cookieValue = Cookies.get("forget_email");
    const email = cookieValue ? JSON.parse(cookieValue) : null;
    if (email === null) {
      return "login";
    } else {
      const PayLoad = {
        email,
        otp,
        newPassword,
        confirmPassword,
      };
      const response = await axios.post(url + "password/new", PayLoad);
      const responseLoginData = response.data;
      return responseLoginData;
    }
  } catch (error) {
    console.error(error);
    return "resetPassword";
  }
};

export const AddUserAPI = async (userDetails) => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  const PayLoad = {
    userDetails,
    loginDataFromCookie,
  };
  try {
    const response = await axios.post(url + "signup/verify", PayLoad);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};

export const CheckUserCredentialsAPI = async () => {
  const cookieValue = Cookies.get("crm_login");
  const loginDataFromCookie = cookieValue ? JSON.parse(cookieValue) : null;
  try {
    const response = await axios.post(url + "adduser", loginDataFromCookie);
    return response.data;
  } catch (error) {
    console.error(error);
    return "login";
  }
};
