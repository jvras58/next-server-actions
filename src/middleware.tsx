import { NextRequest, NextResponse } from "next/server";
import { getAuthData } from "./actions/auth";

export async function middleware(request: NextRequest) {
    const authData = await getAuthData();
    if (!authData) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
}

export const config = {
    matcher: ["/protected/:path*"],
};
