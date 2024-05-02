import ProdutoService from "../services/ProdutoService";
import LoteServices from "../services/LoteServices";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons/faApple";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import FormInteration from '../js/form';

const FormComponent = () => {

  const [produto, setProduto] = useState({
    codprod: '',
    numlote: '',
    nomeprod: '',
    validade: '',
    datafab: ''    
  });

  const [lote, setLote] = useState({
    numlote: '',
    codprod: '',
    fornecedor: '',
    numvalid: ''
  })

  const serviceProduto = new ProdutoService();
  const serviceLote = new LoteServices()
  const jsInteration = new FormInteration();


  const RetornaProduto = () =>{
     serviceProduto.RetornaProduto()
 }

 useEffect(() => {
     RetornaProduto()
 })


 const NavegaProdutoForm = () => {
  jsInteration.NavegaProduto()
}

const NavegaLoteForm = () => {
   jsInteration.NavegaLote()
}


  const loteChange = (e: any) => {
    const { name, value } = e.target;
    setLote({
      ...lote,
      [name]: value
    });
  };

  const loteSubmit = () => {
     serviceLote.CadastraLote(lote);
  };

  const produtoChange = (e: any) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value
    });
  };

  const produtoSubmit = () => {
     serviceProduto.CadastrarProduto(produto);
  };



  return (
    <div className="bg-white flex justify-center w-full h-full items-center">
        <div className="bg-white flex flex-col shadow-lg  w-1/2 h-full mt-20 gap-8" id="formCadastroProduto">
          <div className="flex flex-col h-12">
              <span className="text-4xl ml-8 mt-8 font-bold text-blue-600">Cadastro de Produtos</span>
              <span className="text-lg ml-8 text-gray-600">Gerencie seus produtos aqui</span>
              <div className="ml-8 mt-3 w-full flex flex-row gap-8">
                  <button onClick={NavegaProdutoForm} className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-500 rounded transition-all duration-300">
                    <FontAwesomeIcon icon={faApple}></FontAwesomeIcon> Cadastro de Produtos
                  </button>
                  <button onClick={NavegaLoteForm} className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-500 rounded transition-all duration-300">
                    <FontAwesomeIcon icon={faBoxesPacking}></FontAwesomeIcon> Cadastro de Lote
                  </button>
              </div>
          </div>
          <div className="ml-2 mt-16 w-full flex flex-col gap-0 ">
              <div className="ml-8 flex flex-col h-12 mt-8">
                <span>Nome do Produto</span>
                <input type="text" autoComplete="off" id="nomeprod" style={{outline:'none'}} name="nomeprod" onChange={produtoChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lavadora Eletrolux" required />
              </div>   
              <div className="ml-8 flex flex-col h-12 mt-8">
                <span>Código do produto</span>
                <input type="text" autoComplete="off" id="codprod" style={{outline:'none'}} name="codprod" onChange={produtoChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="29331" maxLength={10} required />
              </div>
              <div className="ml-8 w-full flex flex-row gap-6 h-12 mt-8">
                <div className="flex flex-col">
                  <span>Data de Fabricação</span>
                  <input type="Date" autoComplete="off" id="datafab" style={{outline:'none'}} name="datafab" onChange={produtoChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 h-12 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex flex-col">
                  <span>Validade</span>
                  <input type="date" autoComplete="off" id="validade" style={{outline:'none'}} name="validade" onChange={produtoChange} className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              </div>
          </div>
          <button onClick={produtoSubmit} className="ml-8 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold w-2/4 py-2 px-4 rounded">
             <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Cadastrar Produto
          </button><br></br>
        </div>

        <div className="bg-white flex flex-col shadow-lg  w-1/2 h-full mt-20 gap-8" id="formCadastroLote" style={{display: 'none'}}>
            <div className="flex flex-col h-12">
                  <span className="text-4xl ml-8 mt-8 font-bold text-blue-600">Cadastro de Lote</span>
                  <span className="text-lg ml-8 text-gray-600">Gerencie seus lotes aqui</span>
                  <div className="ml-8 mt-3 w-full flex flex-row gap-8">
                      <button onClick={NavegaProdutoForm}  className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-500 rounded transition-all duration-300">
                        <FontAwesomeIcon icon={faApple}></FontAwesomeIcon> Cadastro de Produtos
                      </button>
                      <button onClick={NavegaLoteForm} className="bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-semibold py-2 px-4 border border-blue-500 rounded transition-all duration-300">
                        <FontAwesomeIcon icon={faBoxesPacking}></FontAwesomeIcon> Cadastro de Lote
                      </button>
                  </div>
              </div>
              <div className="ml-2 mt-16 w-full flex flex-col gap-0 ">
                <div className="ml-8 flex flex-col h-12 mt-8">
                  <span>Número do Lote</span>
                  <input type="text" autoComplete="off" onChange={loteChange} id="numlote" style={{outline:'none'}} name="numlote"  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" maxLength={10} placeholder="29331" required />
                </div>   
                <div className="ml-8 flex flex-col h-12 mt-8">
                  <span>Produto</span>
                  <input type="text" autoComplete="off" list="produto" onChange={loteChange} id="codprodlote" style={{outline:'none'}} name="codprodlote" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Computador Dell Inspiron" required />
                  <datalist id="produto"></datalist>
                </div>
                <div className="ml-8 w-full flex flex-row gap-6 h-12 mt-8">
                  <div className="flex flex-col">
                    <span>Fornecedor</span>
                    <input type="text" autoComplete="off" id="fornecedor" onChange={loteChange} style={{outline:'none'}} name="fornecedor" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 h-12 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div className="flex flex-col">
                    <span>Validade</span>
                    <input type="date" autoComplete="off" id="validadelote" onChange={loteChange} style={{outline:'none'}} name="validadelote"  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                </div>
           </div>
           <button onClick={loteSubmit} className="ml-8 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold w-2/4 py-2 px-4 rounded">
             <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Cadastrar Lote
          </button><br></br>
        </div>
    </div>
  );
};

export default FormComponent;
