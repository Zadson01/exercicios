import listaProdutos from "@/data/listaProdutos";
import Produto from "@/model/produto";

function repeticao2() {
 function renderizarLinhas(){


    return listaProdutos.map((Produto)=>{
     return(
        <tr key ={Produto.id}>
            <td>{Produto.id}</td>
            <td>{Produto.nome}</td>
            <td>{Produto.preco}</td>
        </tr>
     )
    }
      
    )
 }

    return (
        <>
            <div>
                <table border={10}>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Preco</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderizarLinhas()}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default repeticao2;