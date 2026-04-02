import instance from "@/lib/axios/instance";
import {
    ILogin,
} from "@/types/Auth";

const authServices = {
    login: (payload: ILogin) => instance.post(`/auth`, payload),
};

export default authServices;