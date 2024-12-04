import { Button, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { UICard } from "../../components/ui/card"

export const Contador = ({color}) => {
    const [valor, setValor] = useState(0) 
   //  iniciar sempre com 0
   return (
    <Stack direction={"row"}>
    <Button variant = "contained" sx={{bgcolor: color, mr: 3, mb: 5}}
    onClick={() => setValor(valor + 1)}
    >
       MUI - BUTÃO
    </Button>
    <Typography variant="h5" >
       {valor}
    </Typography>
    </Stack>
   )
   }