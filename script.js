const btn = document.querySelector("[data-form-btn]");

// función de flecha o función anonima
const createTask = ( evento ) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}; 

console.log(btn);


btn.addEventListener("click", createTask)