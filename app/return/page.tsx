import { stripe } from "@/utils/stripe";

async function getSession(sessionId: string) {

  const session = await stripe.checkout.sessions.retrieve(sessionId!);

  return session;
}

export default async function CheckoutReturn({ searchParams }: { searchParams: URLSearchParams }) {
  const sessionId = searchParams.get('session_id');


  
  if (!sessionId) {
    return <div>Session ID not found</div>;
  }

  const session = await getSession(sessionId);

  if (session?.status === 'open') {
    return <div>Session is still open</div>;
  } 

  // Rest of the code...

  return <div>Session ID: {session.id}</div>;
}
