import { redirect } from "next/navigation";


export async function loginAction(prevState: any,formData: FormData){
        "use server";
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
        redirect("/protected");
    }else{
        const data = await response.json();
        // console.log(data);
        return { error: data.message };
    }
}