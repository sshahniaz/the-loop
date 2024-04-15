import FAQ from "../components/faq/FAQ";
import Contact from "../components/faq/FAQ_Lower";

const data = [
  {
    question:
      "Sellers are charged two basic fees when listing an item on The Loop?",
    answer: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
  },
  {
    question: "How do I sell an item on this site?",
    answer:
      "To create a listing:, click the sell button. Fill in the item form, then list the item. The Loop also allows users to create discounts on their product listings based using your account.",
  },
  {
    question: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..?",
    answer:
      "Next.js is a React framework for building server-rendered and statically generated web applications.",
  },
  {
    question: "How does this FAQ component work?",
    answer:
      "This component dynamically renders accordions based on provided question and answer data.",
  },
  {
    question: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..?",
    answer:
      "Next.js is a React framework for building server-rendered and statically generated web applications.",
  },
  {
    question: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet..?",
    answer:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
  },
];

const FAQPage = () => {
  return (
    <>
      {/* <h1>My FAQs</h1> */}
      <div>
        <FAQ data={data} />
      </div>
      <div>
        {/* <h2>Can&apos;t Find What You&apos;re Looking For? Contact Us!</h2>
        <div className="phone-help">
          <h3>Telephone</h3>
          <p>(01245) 123 456</p>
          <h6>
            Calls from UK landlines & mobiles are free. Our customer service
            opening hours are:
            <span>Monday-Friday: 8am-6pm</span>
            <span>Saturday-Sunday: 10am-4pm</span>
          </h6>
        </div>
        <div className="email-help">
          <h3>Email</h3>
          <p>enquiries@theloop.com</p>
          <h6>Please allow 1-2 working days for a response.</h6>
        </div>
        <div className="terms-help">
          <h3>Terms &amp; Conditions</h3>
          <p>
            You can view the terms and conditions
            <u>
              <i>here.</i>
            </u>
          </p>
        </div> */}
        <Contact />
      </div>
    </>
  );
};

export default FAQPage;
