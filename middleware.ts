// import { NextResponse, type NextRequest } from "next/server";

// export async function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get("token")?.value;
//   const path = request.nextUrl.pathname;
//   // let isMaintenanceMode = false;

//   // try {
//   //   const response = await fetch('https://api.fireludo.com/v1/Ludoapi/apiRoute?action=checkMaintenaceMode', { method: 'GET' });
//   //   const data = await response.json();

//   //   if (data.status === "success" && data.mode === '1') {
//   //     isMaintenanceMode = true;
//   //   }
//   // } catch (error) {
//   //   console.error('Error fetching maintenance mode:', error);
//   // }

//   // if (isMaintenanceMode) {
//   //   request.nextUrl.pathname = `/maintenance`;
//   //   return NextResponse.rewrite(request.nextUrl);
//   // }

//   if (currentUser) {
//     if (disallowedPathsForLoggedInUser(path) && !isAllowedWithoutLogin(path)) {
//       return Response.redirect(new URL("/home", request.url));
//     }
//   } else {
//     if (
//       !path.startsWith("/login") &&
//       !path.startsWith("/register") &&
//       path !== "/" &&
//       !isAllowedWithoutLogin(path)
//     ) {
//       return Response.redirect(new URL("/login", request.url));
//     }
//   }
// }

// function disallowedPathsForLoggedInUser(path: string): boolean {
//   const disallowedPaths = [
//     "/login",
//     "/register",
//     "/",
//     "/policy",
//     "/rules",
//     "/manifest.json",
//   ];
//   return disallowedPaths.includes(path);
// }

// function isAllowedWithoutLogin(path: string): boolean {
//   const allowedPaths = ["/policy", "/rules", "/manifest.json"];
//   return allowedPaths.includes(path);
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
