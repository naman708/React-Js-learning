import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expense from './components/Expenses/Expenses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <h1>Expense Tracker App</h1>
      <Expense></Expense>
      <ExpenseItem></ExpenseItem>

      </header>
    </div>
  );
}

export default App;
