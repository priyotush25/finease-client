import React, { useState } from "react";
import Container from "../../components/layout/Container";
import Transactioncard from "./Transactioncard";
import { useEffect } from "react";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import NoDataMsg from "../../components/no-data-msg/NoDataMsg";
import Loader from "../../loader/Loader";

const Mytransaction = () => {
  const { user } = use(AuthContext);

  const [infos, setInfos] = useState([]);
  const [loader, setLoader] = useState(true);
  const [sorted, setSorted] = useState("Sort by Date & Amount");
  const [sortedType, setSortedType] = useState("Sort by Income & Expense");

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_BASE_URL}/my-transaction?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      }
    )
      .then((result) => result.json())
      .then((data) => {
        setInfos(data);
        setLoader(false);
      });
  }, []);

  const sortedByType = (() => {
    if (sortedType === "Income") {
      return [...infos].filter((info) => info.type === "Income");
    } else if (sortedType === "Expense") {
      return [...infos].filter((info) => info.type === "Expense");
    } else {
      return infos;
    }
  })();

  const sortedTransactions = (() => {
    if (sorted === "lowToHigh") {
      return [...sortedByType].sort((a, b) => a.amount - b.amount);
    } else if (sorted === "highToLow") {
      return [...sortedByType].sort((a, b) => b.amount - a.amount);
    } else if (sorted === "Newest") {
      return [...sortedByType].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    } else if (sorted === "Oldest") {
      return [...sortedByType].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      );
    } else {
      return sortedByType;
    }
  })();

  if (loader) {
    return <Loader />;
  }

  return (
    <section className="bg-neutral py-10 min-h-screen">
      <title>My Transaction | FinEase</title>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-semibold text-xl lg:text-3xl mb-8 text-center">
          My <span className="text-primary">Transactions</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-4">
          <h5 className="font-semibold">
            <span className="text-primary">{sortedTransactions.length}</span>{" "}
            Transaction{sortedTransactions.length > 1 && "s"} Found
          </h5>
          {/* sorting apps by its size */}
          <div className="flex flex-col md:flex-row gap-2">
            <select
              defaultValue={"Sorted my Income & Expense"}
              onChange={(e) => setSortedType(e.target.value)}
              className="select w-[200px] border-accent outline-0 focus:outline-none focus:border-primary"
            >
              <option value="none">Sort by Income & Expense</option>
              <option value="Income">Income</option>
              <option value="Expense">Expense</option>
            </select>
            <select
              defaultValue={"Sorted my Date and Amount"}
              onChange={(e) => setSorted(e.target.value)}
              className="select w-[200px] border-accent outline-0 focus:outline-none focus:border-primary"
            >
              <option value="none">Sort by Date & Amount</option>
              <option value="lowToHigh">Low Amount - High Amount</option>
              <option value="highToLow">High Amount - Low Amount</option>
              <option value="Newest">Newest First</option>
              <option value="Oldest">Oldest First</option>
            </select>
          </div>
        </div>
        {infos.length === 0 ? (
          <NoDataMsg />
        ) : (
          <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedTransactions.map((info) => (
              <Transactioncard
                key={info._id}
                info={info}
                infos={infos}
                setInfos={setInfos}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Mytransaction;
