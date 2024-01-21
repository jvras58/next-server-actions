import { loginAction } from "@/actions/auth";
import { Form } from "@/components/Form";
import { Submit } from "@/components/submit";

function LoginPage() {
return (
<div className="m-2">
    <div className="bg-white p-8 rounded shadow w-96">
    <h2 className="text-2xl mb-4 text-black">Login</h2>
    <Form action={loginAction}>
        <div>
        <label className="block text-sm text-gray-600">Usuario</label>
        <input
            type="text"
            name="username"
            className="w-full p-2 border rounded shadow mt-1 text-black"
        />
        </div>
        <div>
        <label className="block text-sm text-gray-600">senha</label>
        <input
            type="password"
            name="password"
            className="w-full p-2 border rounded shadow mt-1 text-black"
        />
        </div>
        <div>
        <Submit
            type="submit"
            className=" bg-blue-600 text-white p-2 rounded w-full mt-4"
        >
            Entrar
        </Submit>
        </div>
    </Form>
    </div>
</div>
);
}
export default LoginPage;
