import './styles/Formulario.css'

function Formulario({tarefa, setTarefa, adicionarTarefa, pesquisa, setPesquisa}){

    return(
        <div className='formulario'>
            <h2>Adicionar tarefa</h2>

            <div className='campo-adicionar'>
                <input
                    type="text"
                    placeholder="Digite uma tarefa"
                    value = {tarefa}
                    onChange={(evento) => setTarefa(evento.target.value)} 
                />
                <button className='btn-adicionar' onClick={adicionarTarefa}>
                    Adicionar
                </button>
            </div>

            <h2>Pesquisar tarefas</h2>
            <div className='campo-pesquisa'>
                <input
                    type="text"
                    placeholder="Pesquisar pelo nome..."
                    value={pesquisa}
                    onChange={(evento) => 
                        setPesquisa(evento.target.value)
                    }
                />
                <button className='btn-limpar' onClick={() => setPesquisa("")}>
                    Limpar pesquisa
                </button>
            </div>
        </div>
    );
}

export default Formulario