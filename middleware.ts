import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/", "/faq", "/search", "/furniture", "/categories", "/categories/furniture", "/categories/lighting", "/categories/HomeDecor", "/categories/NewArrivals", "/sale", "/contactus"],
});
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
