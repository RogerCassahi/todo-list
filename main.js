let textarea = document.querySelector("textarea");
let tarefas = document.querySelector("#tarefas");
let tarefasConcluidas = document.querySelector("#tarefas-concluidas");
const ul = document.querySelector("ul");
let concluido = 0;
let tarefaCriada = 0;

function createItem() {
  if (textarea.value == "") {
    textarea.focus();
    alert("Por favor, insira uma tarefa");
    return;
  } else {
    console.log(textarea);
    const tarefa = document.createElement("li");
    const icon = document.createElement("i");
    ul.appendChild(tarefa);
    tarefa.innerHTML = textarea.value;
    tarefa.appendChild(icon);
    icon.addEventListener('click', removeItem);
    tarefa.addEventListener("click", markItem);
    tarefa.setAttribute("class", "tarefa");
    icon.setAttribute("class", "bi bi-x-square");
    textarea.value = ''
    tarefas.innerHTML = `Tarefas: ${ul.childNodes.length += 1}`
  }
}

function removeItem(event) {
  event.target.parentNode.classList.add("delete");
 setTimeout(() =>{
   event.target.parentNode.remove()
 },600)}

function markItem(event) {
  event.target.classList.toggle("mark");
 }
 
 document.addEventListener('keydown', function (event) {
  if (event.keyCode == 13){
    createItem()
  }
 });



