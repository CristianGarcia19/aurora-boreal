const btnMenu = document.querySelector("#menu");
const dropDown = document.querySelector("#dropDownMenu");

btnMenu.addEventListener("click", ()=>{
    dropDown.classList.toggle("hidden");
});

document.addEventListener("click", (e) => {
        if (!btnMenu.contains(e.target) && !dropDown.contains(e.target)) {
            dropDown.classList.add("hidden");
        }
    });