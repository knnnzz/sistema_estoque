import axios from "axios";
import { error } from "console";

class LoteServices{
    CadastraLote(lote:any)
    {
        axios.post('http://localhost:3030/api/lotes', {
            numlote: lote.numlote,
            codprod: lote.codprodlote,
            fornecedor: lote.fornecedor,
            numvalid: lote.validadelote
        }).then(response => console.log(response.data))
            .catch(error => {
                console.error(error)
            })
    }
}

export default LoteServices;