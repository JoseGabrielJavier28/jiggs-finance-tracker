import Summary from './components/Summary';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { useTransactionStore } from './store/useTransactionStore';

function App() {
  const transactions = useTransactionStore((state) => state.transactions);

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8 flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Wealthly</h1>
            <p className="text-slate-500">Track every cent.</p>
          </div>
          <div className="text-right text-xs text-slate-400 font-mono">
            {new Date().toLocaleDateString()}
          </div>
        </header>

        <Summary totalIncome={income} totalExpense={expenses} />
        
        <div className="grid grid-cols-1 gap-8">
          <TransactionForm />
          <TransactionList />
        </div>
      </div>
    </main>
  );
}

export default App;