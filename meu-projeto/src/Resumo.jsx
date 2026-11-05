import './styles/Resumo.css';
function Resumo({tarefas}){
    const total = tarefas.length;

    const concluidas = tarefas.filter(
        item => item.concluida
    ).length;

    const pendentes = total - concluidas;
    const progresso = total === 0 ? 0 : Math.round((concluidas / total) * 100);

    return (
        <div className="resumo">
            <h2>Resumo das tarefas</h2>

            <p>Total: {total}</p>
            <p>Concluídas: {concluidas}</p>
            <p>Pendentes: {pendentes}</p>
            <p>Progresso: {progresso}%</p>

            <div className="barra-fundo">
                <div
                className="barra-progresso"
                style={{width: `${progresso}%`}}>
                </div>
            </div>
        </div>
    )
}

export default Resumo;