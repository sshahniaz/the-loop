import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/", "/faq", "/search","/search/(.*)", "/furniture", "/categories/(.*)", "/categories/furniture", "/categories/lighting", "/categories/Home Decor", "/categories/New", "/categories/sale", "/contactus","/cart","/product/(.*)","/sale"],
});
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
