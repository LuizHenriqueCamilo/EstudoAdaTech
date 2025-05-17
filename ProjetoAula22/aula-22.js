const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list-ul");
//variavel array, que armazena as tarefas
let tasks = [];

function renderTasks(taskTitle, done = false) {
  const li = document.createElement("li");
  // li.textContent = taskTitle; //<LI>Texto da tarefa</LI>

  const input = document.createElement("input"); // Cria um elemento de input
  input.setAttribute("type", "checkbox"); // Define o tipo do input como checkbox
  input.addEventListener("change", (event) => {
    // Adiciona um evento de mudança no input
    const liToggle = event.target.parentElement; // Captura o elemento pai do input (o item da lista)
    const done = event.target.checked; // Captura o estado do checkbox (marcado ou desmarcado)

    const spanToToggle = liToggle.querySelector("span"); // Captura o elemento span dentro do item da lista
    input.checked = done; // Define o estado do checkbox como marcado ou desmarcado
    if (done) {
      spanToToggle.style.textDecoration = "line-through"; // Adiciona um risco no texto da tarefa
    }
    // Se a tarefa estiver marcada como concluída
    // Atualiza o estado da tarefa no array tasks
    if (done) {
      spanToToggle.style.textDecoration = "line-through"; // Adiciona um risco no texto da tarefa
    } else {
      spanToToggle.style.textDecoration = "none"; // Remove o risco no texto da tarefa
    }
    tasks = tasks.map((t) => {
      // Atualiza o estado da tarefa no array tasks
      if (t.title === spanToToggle.textContent) {
        return { title: t, done: done }; // Retorna a tarefa atualizada
      }
      return t; // Retorna a tarefa sem alterações
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks)); // Armazena as tarefas atualizadas no localStorage

  const span = document.createElement("span"); // Cria um elemento de span
  span.textContent = taskTitle; // Define o texto do span como o título da tarefa

  const button = document.createElement("button"); // Cria um elemento de button
  button.textContent = "Remover"; // Define o texto do botão como "Remover"
  button.addEventListener("click", (event) => {
    // Adiciona um evento de clique no botão
    const li = event.target.parentElement; // Captura o elemento pai do botão (o item da lista)
    todoListUl.removeChild(li); // Remove o item da lista da lista de tarefas
    tasks = tasks.filter((task) => task.title !== taskTitle); // Remove a tarefa do array tasks
    alert("Tarefa removida com sucesso!"); // Exibe um alerta informando que a tarefa foi removida
  }); // Adiciona um evento de clique no botão

  li.appendChild(input); // Adiciona o input ao item da lista
  li.appendChild(span); // Adiciona o span ao item da lista
  li.appendChild(button); // Adiciona o botão ao item da lista
  todoListUl.appendChild(li); // Adiciona o item da tarefa à lista de tarefas
}
window.onload = () => {
  const tasksFromStorage = localStorage.getItem("tasks");
  // Verifica se o localStorage já possui tarefas
  if (tasksFromStorage) {
    // Se sim, converte o JSON de volta para um array
    tasks = JSON.parse(tasksFromStorage);
    // Para cada tarefa no array tasks, chama a função renderTasks
    tasks.forEach((t) => {
      renderTasks(t.title); // Adiciona a tarefa à lista
    });
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Previne o comportamento padrão do formulário, que é recarregar a página

  const taskTitle = taskTitleInput.value;
  // Captura o valor do input de título da tarefa, e armazena na variável taskTitle
  if (taskTitle.length < 3) {
    // Verifica se o título da tarefa tem menos de 3 caracteres
    alert("Você precisa digitar uma tarefa com pelo menos 3 caracteres!");
    return;
  }
  //logica de adicionar a tarefa
  // .push adiciona a tarefa ao array tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });
  // Armazena as tarefas no localStorage, localStorage é um armazenamento local do navegador que persiste mesmo após o fechamento da aba
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Verifica se o localStorage já possui tarefas

  // Adiciona a tarefa ao HTML
  renderTasks(taskTitle); // Chama a função renderTasks para adicionar a tarefa à lista
  // Limpa o input de título da tarefa
  taskTitleInput.value = ""; // Adiciona o evento de clique no item da lista
});
