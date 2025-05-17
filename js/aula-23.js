"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const form = document.querySelector("#search-form > form");
const input = document.querySelector("#input-localizaçao");
const sectionTempoInfos = document.querySelector("#tempo-info");
// "?" form pode ser um elemento ou nulo
form === null || form === void 0
  ? void 0
  : form.addEventListener("submit", (event) =>
      __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        if (!input || !sectionTempoInfos) return;
        const localizaçao = input.value;
        if (localizaçao.length < 3) {
          alert("O localizaçao deve ter pelo menos 3 caracteres");
          return;
        }
        try {
          const response = yield fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${localizaçao}&APPID=449704ac02687a87d0d844b26f10caf4&lang=pt_br&units=metric`
          );
          const dados = yield response.json();
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
      })
    );
