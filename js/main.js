const toggle = document.querySelector("#toggle");
const navmenu = document.querySelector("nav ul"
);

toggle.onclick = () =>{
    navmenu.classList.toggle('hidden');
    
}