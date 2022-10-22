// Immediately invoked function expression IIEE
( () => {

    const btn = document.querySelector("[data-form-btn]");

// función de flecha o función anonima
const createTask = ( evento ) => {

    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list  = document.querySelector("[data-list]");
    const task  = document.createElement("li");
    task.classList.add('card');
    input.value = '';

    //backticks
    const taskContent = document.createElement("div");
    const tittleTask = document.createElement("span");
    tittleTask.classList.add("task");
    tittleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(tittleTask);

    const content = `
        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);

}; 



btn.addEventListener("click", createTask);

const checkComplete = () => {

    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener("click", completeTask);
    return i;

};

// Immediately invoked function expression IIEE
const completeTask = (event) => {

    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');

};

})();