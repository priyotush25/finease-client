import { AiOutlineBarChart } from "react-icons/ai";
import { GiMoneyStack, GiPiggyBank } from "react-icons/gi";

const StaticSections = () => {
  const sections = [
    {
      title: "Budgeting Tips",
      description: [
        "Track your expenses regularly.",
        "Set realistic monthly budgets.",
        "Prioritize needs over wants.",
        "Save at least 20% of your income.",
      ],
      icon: <GiPiggyBank size={40} className="text-green-600" />,
    },
    {
      title: "Why Financial Planning Matters",
      description: [
        "Helps achieve your long-term goals.",
        "Reduces financial stress.",
        "Prepares for unexpected expenses.",
        "Empowers informed financial decisions.",
      ],
      icon: <AiOutlineBarChart size={40} className="text-green-600" />,
    },
    {
      title: "Smart Investments",
      description: [
        "Invest in diversified assets.",
        "Start early for compounding benefits.",
        "Research before investing.",
        "Monitor and adjust your portfolio.",
      ],
      icon: <GiMoneyStack size={40} className="text-green-600" />,
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
      {sections.map((sec, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <div className="mb-4">{sec.icon}</div>
          <h3 className="text-2xl font-bold mb-3 text-green-700">
            {sec.title}
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {sec.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default StaticSections;
