"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";


export async function loginAction(_prevState: any,formData: FormData){
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
        console.log(data);
        await SetAuthData(data.token);
        redirect("/protected");
    }else{
        const data = await response.json();
        return { error: data.message };
    }
}

export async function logoutAction(){
    const cookiesStore = cookies();
    cookiesStore.delete("auth");
    redirect("/login");
}

export async function getToken() {
    const authData = await getAuthData();
    return authData?.token;
}

export async function getAuthData() {
    const cookiesStore = cookies();
    const auth = cookiesStore.get("auth")?.value;
    if (!auth) {
        return null;
    }
    return JSON.parse(auth);
}


//FIXME: GERAR COOKIE DE FORMA CRIPTOGRAFADA & GERAR COOKIES SEGUROS COM HTTPS
//TODO:libs: iron session edge: duas funções seal & unseal para criptografar e descriptografar
export async function SetAuthData(jwtToken: string) {
    const payloadBase64 = jwtToken.split(".")[1];
    const payload = JSON.parse(atob(payloadBase64));
    const cookiesStore = cookies();
    cookiesStore.set("auth", JSON.stringify({
        token: jwtToken,
        payload,
    }))
}

