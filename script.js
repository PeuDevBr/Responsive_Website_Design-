window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active"); 
    navigation.classList.toggle("active");
    /* toggle => adiciona a clase active, caso ela já exista então remove a classe */
};