function validateForm() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let errorMessage = document.getElementById("error-message")

    if (username === "userFiap" && password === "FIAP2024") {
        window.location.href = "main.html"
    }
    else if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, preencha todos os campos.";
        errorMessage.style.display = "block";
    }
    else if (username !== "usuario" || password !== "senha") {
        errorMessage.textContent = "Usuário ou senha incorretos.";
        errorMessage.style.display = "block";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}