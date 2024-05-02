import axios from "axios";
import { error } from "console";

class ProdutoService{
    CadastrarProduto(produto: any) {
        axios.post('http://localhost:3030/api/produtos', {
            codprod: produto.codprod,
            numlote: produto.numlote,
            nomeprod: produto.nomeprod,
            validade: produto.validade,
            datafab: produto.datafab
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }

      RetornaProduto(){
        axios.get('http://localhost:3030/api/produtos')
        .then(response => {
            let produtoDt = document.getElementById('produto')
            var arrConteudo:string[] = []
            let index = 0
            
            let arrProdutos = []
            arrProdutos.push(response.data)

            console.log(arrProdutos.length)
            
            arrProdutos.forEach(prod => {  
                while (index < arrProdutos[0].length) {
                    arrConteudo.push(`
                    <option value="${prod[index].codprod}">${prod[index].nomeprod}</option>
                  `)  
                  
                  index += 1
                }            
            })

            console.log(arrConteudo)

            if(produtoDt) produtoDt.innerHTML = arrConteudo.join('')
        })
        .catch(error =>{
            console.error(error)
        }) 
    }
}

export default ProdutoService;