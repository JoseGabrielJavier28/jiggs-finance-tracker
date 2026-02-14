import { ArrowUpCircle, ArrowDownCircle, Wallet } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export default function Summary({ totalIncome, totalExpense }) {
  const balance = totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-tight">Total Balance</span>
          <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
            <Wallet size={20} />
          </div>
        </div>
        <h2 className={`text-3xl font-bold tabular-nums tracking-tight ${balance < 0 ? 'text-rose-600' : 'text-slate-900'}`}>
          {formatCurrency(balance)}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-tight">Income</span>
          <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
            <ArrowUpCircle size={20} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-emerald-600 tabular-nums tracking-tight">
          {formatCurrency(totalIncome)}
        </h2>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-tight">Expenses</span>
          <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
            <ArrowDownCircle size={20} />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-rose-600 tabular-nums tracking-tight">
          {formatCurrency(totalExpense)}
        </h2>
      </div>
    </div>
  );
}