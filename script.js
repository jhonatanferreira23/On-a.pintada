let brilho = 1;
let zoomAtivo = false;

const img = document.getElementById("imagem");

function escurecer() {
  brilho -= 0.2;
  if (brilho < 0.2) brilho = 0.2;
  img.style.filter = `brightness(${brilho})`;
}

function clarear() {
  brilho += 0.2;
  if (brilho > 2) brilho = 2;
  img.style.filter = `brightness(${brilho})`;
}

function resetar() {
  brilho = 1;
  zoomAtivo = false;
  img.style.filter = "brightness(1)";
  img.style.transform = "scale(1)";
}

function zoom() {
  zoomAtivo = !zoomAtivo;
  img.style.transform = zoomAtivo ? "scale(1.3)" : "scale(1)";
}
