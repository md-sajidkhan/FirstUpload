import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import './Dashboard.css'

// const Header = styled(TableRow)`

//     root: {
//         "& .MuiTableCell-head": {
//             color: "white",
//             backgroundColor: "blue"
//         },
//     }
// `

const DisplayTable = ({transaction, setTransaction}) => {
    return(
        <TableContainer sx={{ width: '500px', marginLeft: '30px', height: '260px'}} >
            <Table>
                <TableHead>
                    <TableRow className="table-header">
                    <TableCell>SNo.</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        transaction.map((transact) =>(
                            <TableRow key={transact.id}>
                                <TableCell>{transact.id}</TableCell>
                                <TableCell>{transact.text}</TableCell>
                                <TableCell>{transact.amount}</TableCell>
                                <TableCell>{transact.time}</TableCell>
                                {/* {console.log(transaction.Sno)} */}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
} 

export default DisplayTable;