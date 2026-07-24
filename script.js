let invitados = [];

fetch("guests.json")
  .then(res => res.json())
  .then(data => {
    invitados = data;
  });

const input = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
const card = document.getElementById("card");

input.addEventListener("input", () => {

  const texto = input.value.trim().toLowerCase();

  suggestions.innerHTML = "";
  card.innerHTML = "";

  if (texto.length === 0) return;

  const resultados = invitados.filter(inv =>
    inv.nombre.toLowerCase().includes(texto)
  );

  if (resultados.length === 0) {
    suggestions.innerHTML =
      "<div class='suggestion'>No encontramos ese nombre.</div>";
    return;
  }

  resultados.forEach(inv => {

    const item = document.createElement("div");

    item.className = "suggestion";

    item.textContent = inv.nombre;

    item.onclick = () => mostrar(inv);

    suggestions.appendChild(item);

  });

});

function mostrar(inv){

  suggestions.innerHTML="";

  input.value = inv.nombre;

  card.innerHTML=`

    <div class="card">

      <div class="name">
        ✨ ${inv.nombre}
      </div>

      <div class="info">
        🍽️ Mesa <strong>${inv.mesa}</strong>
      </div>

      <div class="info">
        🪑 Silla <strong>${inv.silla}</strong>
      </div>

      <div class="message">
        Gracias por celebrar con Antonio & Sharik este día tan especial.
      </div>

    </div>

  `;

}
