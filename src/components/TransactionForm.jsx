import { useState } from "react";
import { useTransactionStore } from "../store/useTransactionStore";
import { PlusCircle, Tag } from "lucide-react";

export default function TransactionForm() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const addTransaction = useTransactionStore((state) => state.addTransaction);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const parsedAmount = Math.abs(parseFloat(amount));
    const finalAmount = type === "expense" ? -parsedAmount : parsedAmount;

    addTransaction({
      id: crypto.randomUUID(),
      text,
      amount: finalAmount,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    });

    setText("");
    setAmount("");
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h3 className="font-bold text-slate-800 mb-6">New Transaction</h3>

      <form onSubmit={onSubmit} className="space-y-5">
        {/* Modern Toggle Selector */}
        <div className="flex p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => setType("income")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${type === "income" ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Income
          </button>
          <button
            type="button"
            onClick={() => setType("expense")}
            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${type === "expense" ? "bg-white text-rose-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Expense
          </button>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What is this for?"
              className="w-full pl-4 pr-4 py-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="relative">
            <input
              type="number"
              placeholder="Amount"
              className="w-full pl-4 pr-4 py-3 bg-slate-50 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all tabular-nums"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>

        <button
          className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all active:scale-95 shadow-lg shadow-slate-200 ${type === "income" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-900 hover:bg-slate-800"}`}
        >
          <PlusCircle size={20} />
          Add {type.charAt(0).toUpperCase() + type.slice(1)}
        </button>
      </form>
    </div>
  );
}
