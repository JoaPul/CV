//CAMBIO DE COLOR DE CUADRO INICIAL
const HMI = () => {
  document.getElementById("style").innerHTML = `
    .header {
        border: 8px solid #4C5958;
        background-color: #8AA6A3;
        transition-property: background-color, border;
        transition-duration: 2s, 1s;
      }
      .header .yo {
        border: 8px solid #4C5958;
        transition-property: border;
        transition-duration: 1s;
      }
      .nombre {
        color: #4C5958;
        transition-property: color;
        transition-duration: 1s;
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

  //CAMBIO DE ACCION CUANDO SE PASA EL MOUSE
  document.getElementById("header").setAttribute("onmouseover", "");
  document.getElementById("header").setAttribute("onmouseout", "");
};

//CAMBIO DE COLOR AL BOTON DE REGREASAR
const Inicio = () => {
  document.getElementById("perf").innerHTML = ``;
  HMO();

  //CAMBIO DE ACCION CUANDO SE PASA EL MOUSE
  document.getElementById("header").setAttribute("onmouseover", "HMI()");
  document.getElementById("header").setAttribute("onmouseout", "HMO()");
};
// onmouseover="InicioHMI()" onmouseout="InicioHMO()"
const InicioHMI = () => {
  document.getElementById("regre").setAttribute(
    "style",
    `
    background-color: #0d574f;
    border: 5px solid #afd3cf;
    transition-property: background-color, border;
    transition-duration: 2s, 1s;
  }
  `
  );
};

const InicioHMO = () => {
  document.getElementById("regre").setAttribute("style", "border: 5px solid #8aa6a3; background-color: #127369; transition-property: background-color, border; transition-duration: 2s, 1s;");
};
