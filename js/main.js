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

       const tabButtons = document.querySelectorAll('.tab-btn');
       const tabContent = document.querySelectorAll('.tab-content');

       tabButtons.forEach(button => {
               button.addEventListener('click',()=>{
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                tabContent.forEach(content=>content.classList.add('hidden'));

                const targetCardId = button.getAttribute('data-tab');
                const targetCard=document.getElementById(targetCardId);
                targetCard.classList.remove('hidden');
               })
       });