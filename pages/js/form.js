import ProdutoService from "../services/ProdutoService"

const prodService = new ProdutoService();

class FormInteration{
    NavegaProduto()
    {
        let prodForm = document.getElementById('formCadastroProduto')
        let lotForm = document.getElementById('formCadastroLote')

        prodForm.style.display = "flex"
        lotForm.style.display = "none"
    }

    NavegaLote()
    {
        let prodForm = document.getElementById('formCadastroProduto')
        let lotForm = document.getElementById('formCadastroLote')

        prodForm.style.display = "none"
        lotForm.style.display = "flex"
    }
}

export default FormInteration;