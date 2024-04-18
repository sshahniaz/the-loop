import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ["/", "/faq", "/search", "/furniture", "/categories", "/contactus", "/cart", "/categories/(.*)"],
});
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
