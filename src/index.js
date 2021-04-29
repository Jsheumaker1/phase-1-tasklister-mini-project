document.addEventListener("DOMContentLoaded", () => {
})

function addEventListener() {
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', (event) => {
    console.log(event)
    event.preventDefault()
    addPTag(event.target['new-task-description'].value)

})}


function addPTag (content) {
  let li = document.createElement('li')
  let tasks = document.getElementById('tasks')
  //let button = document.createElement('button')
  li.textContent = content
  tasks.appendChild(li)
  //li.appendChild(button)
}
addEventListener()

