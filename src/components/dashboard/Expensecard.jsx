import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";

const Expensecard = ({ title, expense, setExpense, color, transaction}) => {

    

    useEffect(() => {
        if(transaction.length>0){
            let i = transaction[transaction.length-1];
            i.type === 'Expense' && setExpense(prev => Number(prev) + Number(i.amount))
        }
        console.log('expense card');
    },[transaction, setExpense])

    return(
        <Box width='300px' margin='15px 0px 0px 30px'>
            <Card >
                <CardContent>
                    <Typography variant="h6" component='div'>
                        {title} 
                    </Typography>
                    <Typography variant="h4" component='div' color={color}>
                        {expense} Rs/-
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Expensecard;