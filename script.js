//criar arquivo JS   //
//vincular js e css no html   //
//inserir fuction de leitura do js //
// capturar dados do Input exibir na lista
// colocar os itens como concluidos individualmente
// adicionar botao de fechar nos itens da lista
  //excluir o item individualmente
//Validar campo de texto para não entrar itens vazios
// Limpar campo de texto depois que insere o item na lista

//Declarando as constantes

const botaoAdd = document.querySelector('#todoSubmit')

const form = document.querySelector('#todoForm');

const ListaTarefas = document.querySelector('#todolista')

const botaoMarcarTodas = document.querySelector('#todoMarcarTodos')

const botaoRemoverTodos = document.querySelector('#todoRemoverTodos')


//função de click para coletar dados digitados  e criado p,span
botaoAdd.addEventListener('click', function addTarefa(e){
  e.preventDefault()
const input = document.querySelector('#todoInput').value
const tarefa  = document.createElement('li');
const paragrafo = document.createElement('p')
const span = document.createElement('span')
 paragrafo.innerText = input
if(paragrafo.innerText.trim() == ""){
  alert('Adicione uma tarefa')
  
}else{
  tarefa.appendChild(paragrafo)
  tarefa.appendChild(span)
  ListaTarefas.appendChild(tarefa);
 form.reset()
}
span.innerText = 'X'
span.classList.add('todo__btn-excluir')
//Inserido condição para não receber campos em branco e espaço. Adicionado classe para o x

//Adicionado funçao para remover tarefa
span.addEventListener('click', function(e){
e.preventDefault()
tarefa.remove()

})
//Adicionado função para dar marcar itens como concluido
//toggle se houver ação ele retira e se não houver ele adiciona(checked)
paragrafo.addEventListener('click', function(e){
  e.preventDefault()
  paragrafo.classList.toggle('checked')
})


})
//criado paragrafos para receber os 'ps' e criado para função para marcar todas
botaoMarcarTodas.addEventListener('click',function(e){
  e.preventDefault()
const paragrafos = document.querySelectorAll('p')
//criado for para paragrafos que forem ad
for(let i = 0; i<paragrafos.length; i++){
paragrafos[i].classList.add('checked')

}

})
//criado função para remover todos com while
botaoRemoverTodos.addEventListener('click',function(e){
  e.preventDefault()
  
while(ListaTarefas.firstChild){
  ListaTarefas.removeChild(ListaTarefas.firstChild)
}
  
})

  