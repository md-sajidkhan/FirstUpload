import { useState } from "react";
import Incomecard from "./Incomecard";
import Navbar from "./Navbar";
import './Dashboard.css'; 
import NewTransaction from "./NewTransaction";
import DisplayTable from "./DisplayTable";
import Expensecard from "./Expensecard";
import Totalcard from "./Totalcard";


// import Calender from "./Calender";

const Dashboard = () => {

    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [count, setCount]  = useState(0);
    
    
    const [transaction, setTransaction] = useState([{
        id: 0, 
        SNo: count,
        text: '',
        amount: 0,
        time: '',
        type: ''
    }])

    return(
        <div className="dashboard">
            <Navbar/>
            <div style={{display : 'flex'}}>
            <Expensecard title='Expense' expense={expense} setExpense={setExpense}  transaction={transaction} color = 'red'/>
            <Incomecard title='Income' income={income} setIncome={setIncome}  transaction={transaction} color='green'/>
            <Totalcard title='Balance' income={income} expense={expense}   transaction={transaction} />
            </div>
            <NewTransaction setTransaction={setTransaction} transaction={transaction}  count={count} setCount={setCount}/>
            <DisplayTable transaction = {transaction}/>
            {/* <Calender/> */}
        </div>
    )
}

export default Dashboard;