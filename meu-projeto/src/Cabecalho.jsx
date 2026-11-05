import './styles/Cabecalho.css'

function Cabecalho({tarefas}){
    return(
        <header className='cabecalho'>
            <p>Total de tarefas: {tarefas.length}</p>
            <h1>Minha Lista de Tarefas</h1>
            <hr/>
        </header>
    );
}

export default Cabecalho