const toggle = document.querySelector("#toggle");
const navmenu = document.querySelector("nav ul"
);

toggle.onclick = () =>{
    navmenu.classList.toggle('hidden');
    
}
var slider = tns({
            container: '.my-slider',
            items: 1,
            responsive: {
                640: {
                    edgePadding: 20,
                    gutter: 20,
                    items: 2
                },
                700: {
                    gutter: 30
                },
                900: {
                    items: 3
                }
            },
            mouseDrag: true,
            autoplay: true,
            controls: false,
            autoplayButtonOutput: false,
        });
       
       const navbar = document.getElementById("navbar");
       

       window.addEventListener('scroll',()=>{
            if (window.scrollY > 150) {
                navbar.classList.remove('bg-transparent');
                navbar.classList.add('bg-slate-800');
            } else {
                navbar.classList.remove('bg-slate-800');
                navbar.classList.add('bg-transparent');
                
            }
       })

       