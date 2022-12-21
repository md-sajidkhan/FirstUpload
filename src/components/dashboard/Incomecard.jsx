import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
// import { useState } from "react";

const Incomecard = ({ title, income, setIncome, color, transaction}) => {

    

    useEffect(() => {
        if(transaction.length>0){
            let i = transaction[transaction.length-1];
            i.type === 'Income' && setIncome(prev => Number(prev) + Number(i.amount))
        }
        console.log('income card');
    },[transaction,setIncome])
    
    return(
        <Box width='300px' margin='15px 0px 0px 30px'>
            <Card >
                <CardContent>
                    <Typography variant="h6" component='div'>
                        {title} 
                    </Typography>
                    <Typography variant="h4" component='div' color={color}>
                        {income} Rs/-
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Incomecard;