function SomentePar(props){
    if (props.numero % 2 == 0 ){
        return <h1>{props.numero} par</h1> 
    }else{
        return <h1>{props.numero} impar</h1> 
    }
    
}

export default SomentePar;