import InfoModal from "./InfoModal";
import { useState } from "react";

type Transaction = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

const sample: Transaction[] = [
  { id: 1, name: "Coffee", amount: -4.50, category: "Food" },
  { id: 2, name: "Salary", amount: 2300.00, category: "Income" },
  { id: 3, name: "Groceries", amount: -76.90, category: "Food" },
  { id: 4, name: "Gym Membership", amount: -35.00, category: "Health" },
  { id: 5, name: "Freelance Bonus", amount: 300, category: "Income" },
];

export default function Transactions() {
  const [open, setOpen] = useState(false);

  const grouped = sample.reduce((acc, tx) => {
    if (!acc[tx.category]) acc[tx.category] = [];
    acc[tx.category].push(tx);
    return acc;
  }, {} as Record<string, Transaction[]>);

  return (
    <div>
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold">Transactions Demo</h2>
        <button
          onClick={() => setOpen(true)}
          className="ml-2 text-brand hover:text-brandDark"
        >
          ⓘ
        </button>
      </div>

      {/* Categories */}
      <div className="space-y-6">
        {Object.keys(grouped).map((cat) => (
          <div key={cat} className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold border-b pb-2 mb-3">
              {cat}
            </h3>

            <div className="divide-y">
              {grouped[cat].map((tx) => (
                <div
                  key={tx.id}
                  className="flex justify-between py-2 text-[15px]"
                >
                  <span>{tx.name}</span>
                  <span
                    className={tx.amount >= 0 ? "text-green-600" : "text-red-600"}
                  >
                    {tx.amount >= 0 ? "+" : "-"}${Math.abs(tx.amount).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <InfoModal open={open} setOpen={setOpen}>
        <h3 className="text-lg font-semibold mb-3">What this demo shows</h3>
        <p className="mb-3">
          This section demonstrates real-world list transformation:
          <strong> grouping, mapping, and rendering lists</strong>.
        </p>

        <pre className="bg-gray-100 p-3 text-sm rounded overflow-x-auto">
{`const grouped = sample.reduce((acc, tx) => {
  if (!acc[tx.category]) acc[tx.category] = [];
  acc[tx.category].push(tx);
  return acc;
}, {});`}
        </pre>

        <p className="mt-3">
          This mirrors the type of data manipulation you do every day in React
          dashboards and fintech products.
        </p>
      </InfoModal>
    </div>
  );
}
