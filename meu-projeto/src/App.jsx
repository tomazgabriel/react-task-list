import './App.css'
import Cabecalho from './Cabecalho.jsx'
import Formulario from './Formulario.jsx'
import ListaTarefas from './ListaTarefas.jsx';
import Resumo from './Resumo.jsx';
import { useState, useEffect } from 'react';

function App() {
  //Estado do campo de texto
  const [tarefa, setTarefa] = useState("");
  //Estado da lista de tarefas
  const [tarefas, setTarefas] = useState(() => {
    const dadosSalvos = localStorage.getItem("tarefas");

    if(dadosSalvos){
      try{
        return JSON.parse(dadosSalvos);
      } catch {
        return [];
      }
    }
    return [];
  });

    useEffect(() => {
    localStorage.setItem(
      "tarefas",
      JSON.stringify(tarefas)
    );
  }, [tarefas]);
  const [filtro, setFiltro] = useState("todas");
  const [pesquisa, setPesquisa] = useState("");

  const tarefasFiltradas = tarefas.filter(item => {
    const correspondePesquisa = item.nome
      .toLowerCase()
      .includes(pesquisa.toLowerCase());

    const correspondeFiltro =
      filtro === "todas" ||
      (filtro === "pendentes" && !item.concluida) ||
      (filtro === "concluidas" && item.concluida);

      return correspondePesquisa && correspondeFiltro;

  });

  //Função para adicionar tarefa
  function adicionarTarefa(){
    if (tarefa.trim() == ""){
      return;
      }

    const novaTarefa = {
      id: Date.now(),
      nome: tarefa,
      concluida: false
    };
  
    setTarefas([...tarefas, novaTarefa]);
    setTarefa("")
  }
  function removerTarefa(id){
    setTarefas(
      tarefas.filter((item) => item.id !== id)
    );
  }

  function concluirTarefa(id){
    setTarefas(
      tarefas.map((item) => {
        if(item.id === id){
          return{
            ...item,
            concluida: !item.concluida
          };

        }
        return item;
      })
    );
  }

  function limparConluidas(){
    setTarefas(
      tarefas.filter(item => !item.concluida)
    );
  }


  return(
    <div className='container'>
      <Cabecalho
        tarefas={tarefas} 
      />
      <Formulario
        tarefa={tarefa}
        setTarefa={setTarefa}
        adicionarTarefa={adicionarTarefa}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
      />
      <Resumo
        tarefas={tarefas} 
      />
      <ListaTarefas
        tarefas={tarefasFiltradas}
        removerTarefa={removerTarefa}
        concluirTarefa={concluirTarefa}
        limparConcluidas={limparConluidas}
        filtro={filtro}
        setFiltro={setFiltro}
        tarefasFiltradas={tarefasFiltradas}
      />

    </div>
  );

}

export default App
