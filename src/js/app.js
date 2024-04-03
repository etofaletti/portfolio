document.addEventListener('DOMContentLoaded', function(){
    initApp();
});

function initApp(){
    navFixed();
    copyEmail();
}

function navFixed(){
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
       header.classList.toggle('active', window.scrollY > window.innerHeight); 
    });
;}

function copyEmail(){
    let email = document.getElementById('email');
    let btn = document.getElementById('btn_copy');
    let icon = document.getElementById('icon_copy');

    navigator.clipboard.writeText(email.textContent);

    btn.textContent = 'Copiado ';
    btn.classList.add('copied');
    btn.appendChild(icon);
    icon.classList.add('fa-solid');
    icon.classList.add('fa-check');
    
    setTimeout(function() {
        btn.textContent = 'Copiar ';
        btn.classList.remove('copied');
        icon.classList.remove('fa-solid');
        icon.classList.remove('fa-check');
        icon.classList.add('fa-regular');
        icon.classList.add('fa-clone');
        btn.appendChild(icon);
    }, 3000);

}