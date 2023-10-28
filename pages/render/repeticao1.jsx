function repeticao1() {

    const listaAprovados = [
        'Ana',
        'Roberto',
        'Flavia',
        'Ricardo',
        'Antonio',
        'Debora'

    ]
    function renderizarLista() {
        const intens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            intens.push(<li>{listaAprovados[i]}</li>)
        }
        return intens;

    }

    return (
        <>
        
            {renderizarLista()}


        </>
    )

}
export default repeticao1;