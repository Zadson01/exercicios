function repeticao1_1(){
    const listaAprovados = [
        'Zadson',
        'Roberto',
        'Flavia',
        'Ricardo',
        'Antonio',
        'Debora'
    ]
    function renderizarLista(){
        return listaAprovados.map((nome, i) => <li>{nome}</li>)
    }
    return(
        <>
        {renderizarLista()}
        </>
    ) 

}
export default repeticao1_1;