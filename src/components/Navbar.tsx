import { getAuthData } from "@/actions/auth";


export async function Navbar(){
    const authData = await getAuthData();
return (
    //TODO: Daria para colocar o authdata dentro da tag navbar...
    <nav className="bg-gray-800">
        {authData && (
            <div className="text-white flex flex-row items-center p-2">
            <span className="text-xl font-semibold">
                Olá, {authData.payload.username}
            </span>
            {/* <form action= {logoutAction}>
                <button className="text-white al-2">Sair</button>
            </form> */}
            </div>
        )}
    </nav>

)};