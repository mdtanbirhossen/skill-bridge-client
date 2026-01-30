import { NextRequest, NextResponse } from "next/server"
import { Roles } from "@/constants/roles";
import { authServerService } from "@/services/auth.server.service";


export async function proxy(request: NextRequest) {
     const pathname = request.nextUrl.pathname;
     const data = await authServerService.getSession();

     const role = data?.role

     const isAdmin = role === Roles.admin
     const isTutor = role === Roles.tutor
     const isStudent = role === Roles.student


     if (isAdmin && (pathname.startsWith("/dashboard") || pathname.startsWith("/tutor"))) {
          return NextResponse.redirect(new URL("/admin", request.url))
     }


     if (isTutor && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))) {
          return NextResponse.redirect(new URL("/tutor", request.url))
     }


     if (isStudent && (pathname.startsWith("/admin") || pathname.startsWith("/tutor"))) {
          return NextResponse.redirect(new URL("/dashboard", request.url))
     }


     return NextResponse.next()
}

export const config = {
     matcher: [
          "/dashboard/:path*",
          "/admin/:path*",
          "/tutor/:path*",
     ],
}