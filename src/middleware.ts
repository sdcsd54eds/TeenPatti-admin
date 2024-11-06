import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  // Define CSP headers to allow insecure content on all devices
  const response = NextResponse.next();
  response.headers.set(
    "Content-Security-Policy",
    "upgrade-insecure-requests; default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;",
  );

  if (currentUser) {
    if (disallowedPathsForLoggedInUser(path) && !isAllowedWithoutLogin(path)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  } else {
    if (
      !path.startsWith("/login") &&
      !path.startsWith("/register") &&
      path !== "/" &&
      !isAllowedWithoutLogin(path)
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}

function disallowedPathsForLoggedInUser(path: string): boolean {
  const disallowedPaths = ["/login", "/register", "/"];
  return disallowedPaths.includes(path);
}

function isAllowedWithoutLogin(path: string): boolean {
  const allowedPaths = [
    "/dashboard",
    "/players",
    "/blocked-player",
    "/welcome-chips",
    "/daily-reward",
    "/ad-reward",
    "/payment-history",
  ];
  return allowedPaths.includes(path);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
