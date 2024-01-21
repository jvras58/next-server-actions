"use server";
import { redirect } from "next/navigation";
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

// const password = process.env.COOKIE_ENCRYPTION_KEY;
const password = "1234567891011121314151617181920212123242526272829303132"; 

export async function loginAction(_prevState: any, formData: FormData) {
    const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: formData.get("username"),
            password: formData.get("password"),
        }),
    });

    if (response.ok) {
        const data = await response.json();
        // console.log(data);
        await SetAuthData(data.token);
        redirect("/protected");
    } else {
        const data = await response.json();
        return { error: data.message };
    }
}

export async function logoutAction() {
    Cookies.remove("auth");
    redirect("/login");
}

export async function getToken() {
    const authData = await getAuthData();
    return authData?.token;
}

export async function getAuthData() {
    const encrypted = Cookies.get("auth");

    if (!encrypted) {
        return null;
    }

    // Descriptografa os dados
    const bytes = CryptoJS.AES.decrypt(encrypted, password);
    const unsealed = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    return unsealed;
}

export async function SetAuthData(jwtToken: string) {
    const payloadBase64 = jwtToken.split(".")[1];
    const payload = JSON.parse(atob(payloadBase64));

    const objectToSeal = {
        token: jwtToken,
        payload,
    };

    // Criptografa os dados
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(objectToSeal), password).toString();

    // Armazena os dados criptografados no cookie
    Cookies.set("auth", encrypted, { secure: true });
}