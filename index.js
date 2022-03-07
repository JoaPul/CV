//CAMBIO DE COLOR DE CUADRO INICIAL
const HMI = () => {
  document.getElementById("style").innerHTML = `
    .header {
        border: 8px solid #4C5958;
        background-color: #8AA6A3;
        transition-property: background-color, border;
        transition-duration: 3s, 2s;
      }
      .header .yo {
        border: 8px solid #4C5958;
        transition-property: border;
        transition-duration: 2s;
      }
      .nombre {
        color: #4C5958;
        transition-property: color;
        transition-duration: 2s;
      }
    `;
};
const HMO = () => {
  document.getElementById("style").innerHTML = `
    .header {
        border: 8px solid white;
        transition-property: background-color, border;
        transition-duration: 3s, 2s;
      }
      .header .yo {
        border: 8px solid white;
        transition-property: border;
        transition-duration: 2s;
      }
      .nombre {
        color: white;
        transition-property: color;
        transition-duration: 2s;
      }
    `;
};

const perf = () => {
  /*-Cambiar de tamaño la foto de perfil
    -se agregan las opciones de perfiles
    -Cambiar de tamaño a header*/

  document.getElementById("perf").innerHTML = `
    <div class="perf1" id="perf1">
      <h1 class="p1h1" id="p1h1">Mecánico y Eléctrico</h1>
    </div>
    <div class="perf2" id="perf2">
      <h1 class="p2h1" id="p2h1">Web Developer</h1>
    </div>
  `;

  document.getElementById("style").innerHTML = `
  .header {
    border: 8px solid #4C5958;
    background-color: #8AA6A3;
    height:550px;
  }
  .header .yo {
    border: 8px solid #4C5958;
  }
  .nombre {
    color: #4C5958;
  }
  .perf{
    height: 100px;
  }
  `;
  document.getElementById("header").setAttribute("onmouseover", "");
  document.getElementById("header").setAttribute("onmouseout", "");
};
