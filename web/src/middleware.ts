import { NextResponse } from "next/server";
import { api_connection } from "./app/actions";
import type { MiddlewareConfig } from "next/server";

export async function middleware() {
  if ((await api_connection()) === false) {
    return NextResponse.json(
      { text: "API is not responding" },
      { status: 500 },
    );
  }
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
