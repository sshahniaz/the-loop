import FAQ from "../components/faq/FAQ";

const data = [
  {
    question: "What is Next.js?",
    answer:
      "Next.js is a React framework for building server-rendered and statically generated web applications.",
  },
  {
    question: "How does this FAQ component work?",
    answer:
      "This component dynamically renders accordions based on provided question and answer data.",
  },
];

const MyPage = () => {
  return (
    <div>
      <h1>My FAQs</h1>
      <FAQ data={data} />
    </div>
  );
};
