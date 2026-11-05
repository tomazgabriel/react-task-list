import './styles/ListaTarefas.css'
function ListaTarefas({tarefas, removerTarefa, concluirTarefa, limparConcluidas, filtro, setFiltro, tarefasFiltradas}){

    return(
        <div className='lista-container'>
            <h2>Minhas tarefas</h2>

            <div className='filtros'>
                <button
                className={filtro === "todas" ? "ativo" : ""} 
                onClick={() => setFiltro("todas")}>
                    Todas
                </button>
                <button
                className={filtro === "pendentes" ? "ativo" : ""} 
                onClick={() => setFiltro("pendentes")}>
                    Pendentes
                </button>
                <button
                className={filtro === "concluidas" ? "ativo" : ""} 
                onClick={() => setFiltro("concluidas")}>
                    Concluídas
                </button>
            </div>

            {tarefas.length === 0 ? (
                <p className='mensagem-vazia'>Nenhuma tarefa cadastrada</p>
            ) : (
                <ul className='lista-tarefas'>
                    {tarefas.map((item) => (
                        <li key = {item.id} className='tarefa'>
                            <input
                                type="checkbox"
                                checked={item.concluida}
                                onChange={() => concluirTarefa(item.id)}
                            />
                            <span 
                                className={item.concluida ? "concluida" : ""}
                            >
                                {item.nome}
                            </span>
                            <button
                            className='btn-excluir' 
                            onClick={() => removerTarefa(item.id)}>
                                Excluir
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            
        </div>
    );
}

export default ListaTarefas