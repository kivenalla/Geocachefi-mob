import axios, { AxiosError, HttpStatusCode } from "axios";
import { User } from "@/old/model/User";
import axiosAuth from "@/old/utils/axiosAuth";

export const login = async (email: string, password: string) => {
    try {
        
        const response = await axiosAuth.post<User>("/users/login", { email, password });
        if (response.status === HttpStatusCode.Created) {
            const { access_token, user } = response.data;
            localStorage.setItem("accessToken", access_token || "");
            return user;
        }
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const logout = async () => {
    try {
        await axios.post("/user/logout");
        localStorage.removeItem("accessToken");
    } catch (err) {
        console.error("Logout failed", err);
    }
};

export const register = async (username: string, email: string, password: string, confirm: string) => {
    if (password !== confirm) {
        return { status: 400, message: "Salasanat eivät täsmää" };
    }
    
    const emailPattern = new RegExp("^[a-z0-9._%+-]+@[a-z0-9-]+[.]{1}[a-z]{2,4}$");
    const isEmailValid = emailPattern.test(email);
    if (!isEmailValid) {
        return { status: 400, message: "Sähköpostiosoite ei kelpaa" };
    }
    
    try {
        const response = await axiosAuth.post("/users/register", { name: username, password, email });
        if (response.status == HttpStatusCode.Created) {
            // Login to backend
            const loggedInUser = await login(email, password);
            return { status: HttpStatusCode.Ok, data: loggedInUser };
        } else {
            return { status: 400, message: "Ei sallittu" };
        }
    } catch (err) {
        const error = err as AxiosError<Error>;
        const status = error.response?.status;
        const msg = error.response?.data;
        return { status: status, message: msg };
    }
};

export const refreshUser = async () => {
    try {
        const response = await axiosAuth.get("/users/me");
        return response.data.user as User;
    } catch {
        return null;
    }
};
