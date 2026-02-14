import { useTransactionStore } from '../store/useTransactionStore';
import { Trash2, TrendingDown, TrendingUp, Calendar } from 'lucide-react';
import { formatCurrency } from '../utils/formatters';

export default function TransactionList() {
  const { transactions, deleteTransaction } = useTransactionStore();

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-800 text-lg">History</h3>
        <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-500 rounded-lg">
          {transactions.length} Total
        </span>
      </div>

      <div className="space-y-3">
        {transactions.length === 0 ? (
          <div className="text-center py-10 border-2 border-dashed border-slate-100 rounded-2xl">
            <p className="text-slate-400 text-sm italic">Your wallet is empty...</p>
          </div>
        ) : (
          transactions.map((t) => (
            <div key={t.id} className="group flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-transparent hover:border-slate-200 rounded-xl transition-all duration-200">
              
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl ${t.amount > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {t.amount > 0 ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                </div>
                
                <div>
                  <p className="font-bold text-slate-700 leading-tight">{t.text}</p>
                  <div className="flex items-center gap-1 mt-1 text-slate-400">
                    <Calendar size={12} />
                    <p className="text-[10px] font-medium uppercase tracking-wider">{t.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className={`font-bold tabular-nums ${t.amount > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {t.amount > 0 ? '+' : ''}{formatCurrency(t.amount)}
                </span>
                
                <button 
                  onClick={() => deleteTransaction(t.id)}
                  aria-label="Delete transaction"
                  className="p-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}