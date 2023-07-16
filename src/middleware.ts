import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/:path*"],
};

export function middleware(req: NextRequest) {
  // 開発時では認証をスキップ
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  // 環境変数が設定されていない場合は認証をスキップ
  if (!process.env.BASIC_AUTH_PASSWORD) {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1] ?? "";
    const [user, pwd] = atob(authValue).split(":");

    if (
      user === process.env.BASIC_AUTH_USER &&
      pwd === process.env.BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/basic-auth";

  return NextResponse.rewrite(url);
}
