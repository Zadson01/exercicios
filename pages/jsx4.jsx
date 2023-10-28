function jsx4(){
const subtitulo = 'Estou no JavaScript'
let outroSubtitulo = 'Continuo no JavaScript'
    return(
        <div>
<h1>Integração JS e JSX</h1>
<h2>{subtitulo}</h2>
<h3>{outroSubtitulo}</h3>
<h3>{Math.max(89,25)}</h3>
<h3>{Math.max(95,358)}</h3>
<h4>{entre(9, 1, 10)}</h4>
</div>
    )
    function entre(valor, min, max){
        if(valor >= min && valor <= max){
            return "Sim"
        }else{
            return "Não"
        }
    }
}
export default jsx4;
