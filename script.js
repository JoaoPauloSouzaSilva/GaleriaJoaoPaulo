document.querySelector('.back-top').addEventListener('click', function(event) {
  event.preventDefault(); // Impede o comportamento padrão do link
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Faz a rolagem suave para o topo
  });
});

// Obter o modal
var modal = document.getElementById("myModal");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Obter as imagens que abrem o modal
var btns = document.querySelectorAll(".image-post");

// Obter a imagem dentro do modal que será trocada
var modalImg = document.querySelector(".img-post-modal");

// Para cada imagem com a classe .image-post, adicionar evento de clique
btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    // Pegar o src da imagem clicada
    var imgSrc = btn.getAttribute('src');

    // Alterar o src da imagem do modal para o da imagem clicada
    modalImg.setAttribute('src', imgSrc);

    // Quando o usuário clicar na imagem, abre o modal
    modal.style.display = "block";
  });
});


// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
