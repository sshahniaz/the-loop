import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/", "/faq", "/search", "/furniture", "/categories", "/cart", "/favourites", "/categories/furniture", "/categories/lighting", "/categories/Home Decor", "/categories/New", "/categories/sale", "/contactus", "/categories/(.*)"],
});
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
