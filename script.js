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

// Obter o botão que abre o modal
var btns = document.querySelectorAll(".image-post");

btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Quando o usuário clicar no botão, abre o modal
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
