import { Button, Stack, Typography } from "@mui/material"
import { UICard } from "../../components/ui/card"
import {Contador} from "../../components/contador/contador"
import { useState } from "react"
import { blue, green } from "@mui/material/colors"


export const ContadorView = () => {
    const [valor, setValor] = useState(0) 
   //  iniciar sempre com 0
   return (
      <UICard>
         <Typography variant="h5" mb={5} >
            MEU CONTADOR
         </Typography>

         <Contador color={'green'}/>
         <Contador color={'blue'}/>
         <Contador color={'yellow'}/>


      </UICard>
   )
   }