import Lista from "@/components/Lista";
import Item from "@/components/Item";

function ComponenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item #1" />
                <Item conteudo="Item #2" />
                <Item conteudo="Item #3" />
                <Item conteudo="Item #11" />
                <Item conteudo="Item #12" />
                <Item conteudo="Item #13" />
                <Item conteudo="Item #15" />
            </Lista>
        </div>
    )
}


export default ComponenteComFilho;