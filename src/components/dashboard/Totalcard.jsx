import { Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useState } from "react";

const Totalcard = ({ title, income, expense,  color, transaction}) => {

    const [total, setTotal] = useState(0);

    useEffect(()=>{
        let diff = income - expense;
        setTotal(diff)
    },[income, expense])

    return(
        <Box width='300px' margin='15px 0px 0px 30px'>
            <Card >
                <CardContent>
                    <Typography variant="h6" component='div'>
                        {title} 
                    </Typography>
                    <Typography variant="h4" component='div' color={color}>
                        {total} Rs/-
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}

export default Totalcard;