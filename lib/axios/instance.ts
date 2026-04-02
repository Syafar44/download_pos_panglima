import environment from "@/config/environment";
import { SessionExtended } from "@/types/Auth";
import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const headers = {
    'Content-Type': 'application/json',
    'apikey': environment.API_KEY || '',
}

const instance = axios.create({
    baseURL: environment.BASE_URL,
    headers,
    timeout: 60 * 500,
})

// ✅ Request Interceptor - inject token
instance.interceptors.request.use(
    async (request) => {
        const session = await getSession() as SessionExtended | null;
        console.log('Current session:', session); // Debug: cek isi session
        if (session?.accessToken) {
            request.headers.Authorization = `Bearer ${session.accessToken}`
        }
        return request
    },
    (error) => Promise.reject(error)
)

// ✅ Response Interceptor - handle error global
instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const status = error.response?.status;

        if (status === 401) {
            // Token expired / tidak valid → logout otomatis
            await signOut({ callbackUrl: '/auth' });
        }

        if (status === 403) {
            // ✅ Cek dulu apakah di browser
            if (typeof window !== 'undefined') {
                window.location.href = '/403';
            }
        }

        if (status >= 500) {
            // Server error → bisa trigger toast notifikasi
            console.error('Server error:', error.response?.data);
        }

        return Promise.reject(error)
    }
)

export default instance