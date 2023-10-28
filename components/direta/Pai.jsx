import Filho from "./Filho"
function Pai(props){
    return(
        <div>
            <Filho nome="Pedro" familia="Albuquerque"/>
            <Filho nome="Joana" familia="Santos"></Filho>
            <Filho nome= "Maria" familia= "Silva"></Filho>
            <Filho nome= "Zadson" familia= "Silva"></Filho>

        </div>
    )
}
export default Pai;