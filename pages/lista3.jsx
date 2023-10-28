 function lista3(){
    const lista = []
    for (let i = 0; i <= final; i++){
        lista.push(<span>{i},</span>);
    }
return lista
}
export default function lista(){
    return(
        <div>
            <div>
            {lista3()}
            </div>
        </div>
    )
}
