
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken"

const PUBLIC_PATH=["/dashboard/get-payment-history","/dashboard/get-all-booking"]


export async function  proxy(request: NextRequest) {
    const pathname=request.nextUrl.pathname;
  
   
  

    const accessToken = request.cookies.get("accessToken")?.value;

    // decode token and get user role 
    const decode=accessToken? jwt.decode(accessToken) as JwtPayload:null
   let userRole=null

    if(decode){
      userRole = decode?.role;
    }

// role based redirect is here 

if (!decode && !(userRole=="CUSTOMER")&& PUBLIC_PATH.includes(pathname)){
  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("callbackUrl",pathname)

    return NextResponse.redirect(loginUrl);

}
  //   return NextResponse.redirect(new URL("/home", request.url));

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: [
   
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
