import './App.css';
import Balance from './Components/Balance';
import Header from './Components/Header';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobleState';
import NewTransactionList from './Components/NewTransactionList';
import NewIncomeExpenses from './Components/NewIncomeExpenses';
import {useEffect} from "react";


function App() {
    useEffect(() => {
        // Load GA script
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-6ZPERBXNPQ";
        script.async = true;
        document.head.appendChild(script);

        // Init GA
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag("js", new Date());
        gtag("config", "G-6ZPERBXNPQ");
    }, []);

  return (
   <GlobalProvider>
   <Header />
   <div className="container">
    <Balance />
    <NewIncomeExpenses />
    <NewTransactionList />
    <AddTransaction />
   </div>
   </GlobalProvider>
  );
}

export default App;
