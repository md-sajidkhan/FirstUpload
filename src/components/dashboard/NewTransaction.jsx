import { Button, InputAdornment, TextField } from "@mui/material";
import { Stack, styled } from "@mui/system";

import { useState } from "react";

const Container = styled(Stack)`
margin: 15px 0px 10px 30px;
& > div, button {
    margin-top: 10px;
}

& > div{
    color: green;
}

& > button{
    background-color: blue;
    color: white;
}
`

const NewTransaction = ({setTransaction, transaction, count, setCount}) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('Expense');

    const handleTransaction = () =>{
        const time = new Date();
        const date = `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}`;
        const transaction = {
            id: Math.floor(Math.random() * 10000),
            SNo: setCount(count + 1),
            text: text,
            amount: amount,
            time: date,
            type: type
        }
        setTransaction(prev => [...prev, transaction]);
        
    }

    
    return(
        <Container width='500px'>
            <TextField label='Description' value={text} onChange={(e) => setText(e.target.value)}/>
            <TextField label='Amount' InputProps={{
                endAdornment: <InputAdornment position="end" >₹</InputAdornment>
            }} value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <select name="Type" id="" label="Type" value={type} onChange={(e) => setType(e.target.value)} style={{height: '50px', marginTop: '15px'}}>
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
            </select>
            <Button variant="contained" onClick={handleTransaction}>Submit</Button>
        </Container>
    )
}

export default NewTransaction;