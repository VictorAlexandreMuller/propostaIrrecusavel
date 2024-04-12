function aceitarProposta() {
  // Exibe o coração quando a pessoa clicar em "Sim"
  var heartContainer = document.getElementById("heartContainer");
  heartContainer.classList.remove("hidden");

  // Esconde a mensagem e os botões
  var questionDiv = document.querySelector(".question");
  questionDiv.style.display = "none";

  // Adiciona uma mensagem após um breve atraso
  setTimeout(function () {
    alert(
      "Obrigado por escolher a resposta correta! Eu juro que sempre cuidarei muito bem dela."
    );
  }, 500);

  // Desenha o coração pixelizado
  drawHeart();
}

function drawHeart() {
  var canvas = document.getElementById("heartCanvas");
  var ctx = canvas.getContext("2d");

  // Define o tamanho do canvas igual o tamanho da janela
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Desenha o coração pixelizado
  ctx.fillStyle = "#ff0000"; // Cor vermelha
  var scale = 10; // Fator de escala para o coração
  var pixelHeart = [
    "001110000011100",
    "011111000111110",
    "111111111111111",
    "111111111111111",
    "111111111111111",
    "011111111111110",
    "001111111111100",
    "000111111111000",
    "000011111110000",
    "000001111100000",
    "000000111000000",
    "000000010000000",
  ];

  for (var i = 0; i < pixelHeart.length; i++) {
    for (var j = 0; j < pixelHeart[i].length; j++) {
      if (pixelHeart[i][j] === "1") {
        ctx.fillRect(
          j * scale + (canvas.width - pixelHeart[0].length * scale) / 2,
          i * scale + (canvas.height - pixelHeart.length * scale) / 2,
          scale,
          scale
        );
      }
    }
  }
}

// Move o botão "Não" para uma posição aleatória
function moveButton() {
  var btnNo = document.querySelector(".btn-no");
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  var randomX = Math.floor(Math.random() * (screenWidth - 200)); // 200 é a largura do botão
  var randomY = Math.floor(Math.random() * (screenHeight - 50)); // 50 é a altura do botão
  btnNo.style.position = "absolute";
  btnNo.style.left = randomX + "px";
  btnNo.style.top = randomY + "px";
}
