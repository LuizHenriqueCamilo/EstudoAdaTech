const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizaçao");
const sectionTempoInfos = document.querySelector("#tempo-info");

// "?" form pode ser um elemento ou nulo
form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!input || !sectionTempoInfos) return;

  const localizaçao = input.value;

  if (localizaçao.length < 3) {
    alert("O localizaçao deve ter pelo menos 3 caracteres");
    return;
  }
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localizaçao}&APPID=449704ac02687a87d0d844b26f10caf4&lang=pt_br&units=metric`
    );

    const dados = await response.json();

    const infos = {
      temperatura: Math.round(dados.main.temp),
      localizaçao: dados.name,
      icone: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
    };

    sectionTempoInfos.innerHTML = `
      <div class="tempo-dados">
          <h2>${infos.localizaçao}</h2>
          <span>${infos.temperatura}°C</span>
      </div>

        <img src="${infos.icone}" />`;
  } catch (err) {
    console.log(err);
  }
});