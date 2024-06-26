import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
   
  function Header() {
    return (
      <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
        <h1>The Loop</h1>
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton/>
        </SignedOut>
      </header>
    );
  }

  export default Header;
   
//   export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//       <html lang="en">
//         <ClerkProvider>
//           <Header />
//           {children}
//         </ClerkProvider>
//       </html>
//     );
//   }
