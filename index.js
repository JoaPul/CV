//CAMBIO DE COLOR DE CUADRO INICIAL
const HMI = () => {
  document.getElementById("style").innerHTML = `
    .header {
        border: 8px solid white;
        background-color: #0f4d46;
        box-shadow: 8px 8px 8px black,-8px -8px 8px gray;
        transition-property: background-color, border, box-shadow;
        transition-duration: 2s, 1s, 1s;
      }
      .header .yo {
        border: 8px solid white;
        transition-property: border;
        transition-duration: 1s;
      }
      .nombre {
        color: white;
        transition-property: color;
        transition-duration: 1s;
      }
    `;
};

const HMO = () => {
  document.getElementById("style").innerHTML = `
    .header {
        border: 8px solid #bfbfbf;
        transition-property: background-color, border, box-shadow, height;
    transition-duration: 2s, 1s, 1s, 1s;
      }
      .header .yo {
        border: 8px solid #bfbfbf;
        
        transition-duration: 2s;
      }
      .nombre {
        color: #bfbfbf;
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
  <div class="perf1" id="perf1" onmouseover="perf1HMI()" onmouseout="perf1HMO()" onclick="IME()"></div>
  <div class="perf2" id="perf2" onmouseover="perf2HMI()" onmouseout="perf2HMO()" onclick="WD()"></div>
  `;

  document.getElementById("perf1").innerHTML = `
      <h1 class="p1h1" id="p1h1">Mecánico y Eléctrico</h1>`;
  document.getElementById("perf2").innerHTML = `
      <h1 class="p2h1" id="p2h1">Web Developer</h1>
  `;

  document.getElementById("style").innerHTML = `
  .header {
    border: 8px solid white;
    background-color: #0f4d46;
    box-shadow: 8px 8px 8px black,-8px -8px 8px gray;
    height:550px;
    transition-property: background-color, border, box-shadow, height;
    transition-duration: 2s, 1s, 1s, 1s;
  }
  .header .yo {
    border: 8px solid white;
    transition-property: border;
    transition-duration: 1s;
  }
  .nombre {
    color: white;
    transition-property: color;
    transition-duration: 1s;
    display:flex;
    align-content:center;
    justify-content:center;
    align-items:center;
    
  }
  .perf{
    height: 120px;
  }
  .perf1, .perf2{
    height:70px;
    display:flex;
    align-content:center;
    justify-content:center;
    align-items:center;
    border-radius: 30px;
    border:1px solid white;
  }
  .p1h1,.p2h1{
    height:fit-content;
  }
  `;

  //CAMBIO DE ACCION CUANDO SE PASA EL MOUSE
  document.getElementById("header").setAttribute("onmouseover", "");
  document.getElementById("header").setAttribute("onmouseout", "");
};

//CAMBIO DE COLOR AL BOTON DE REGREASAR
const Inicio = () => {
  document.getElementById("perf").innerHTML = ``;
  // document.getElementById("perf2").innerHTML = ``;
  HMO();

  //LIMPIAR PANTALLA Y LOS DIV QUE HAY DENTRO DE PANTALLA
  //contenedor HEADER
  document.getElementById("pantalla").setAttribute(
    "style",
    `
  background-color: #10403b;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  `
  );
  document.getElementById("header").setAttribute(
    "style",
    `
    margin-top:0px;
  `
  );
  document.getElementById("imgcont").setAttribute(
    "style",
    `
    height: 310px;
    width: 310px;
    transition-property: height,width;
    transition-duration: 2s, 2s;
  `
  );
  document.getElementById("cent1").setAttribute("style", "flex-direction: rows;");
  document.getElementById("contac").innerHTML = ``;
  document.getElementById("exp/proj").innerHTML = ``;
  document.getElementById("personal").innerHTML = ``;
  document.getElementById("ski/too").innerHTML = ``;
  document.getElementById("edu/cur").innerHTML = ``;
  document.getElementById("Certi").innerHTML = ``;

  document.getElementById("contac").setAttribute("style", "");
  document.getElementById("exp/proj").setAttribute("style", "");
  document.getElementById("personal").setAttribute("style", "");
  document.getElementById("ski/too").setAttribute("style", "");
  document.getElementById("edu/cur").setAttribute("style", "");
  document.getElementById("Certi").setAttribute("style", "");

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
    border: 5px solid #bfbfbf;
    box-shadow: 4px 4px 4px black,-4px -4px 4px gray;
    transition-property: background-color, border,box-shadow;
    transition-duration: 2s, 1s, 1s;
  `
  );
};

const InicioHMO = () => {
  document.getElementById("regre").setAttribute(
    "style",
    `
  border: 5px solid white; 
  background-color: #127369; 
  box-shadow: 0px 0px 0px black,0px 0px 0px gray;
  transition-property: background-color, border,box-shadow;
  transition-duration: 2s, 1s, 1s;
  `
  );
};

//BOTONES DE PERFILES
const perf1HMI = () => {
  document.getElementById("perf1").setAttribute(
    "style",
    `
    box-shadow: 5px 5px 5px black,-5px -5px 5px gray;
    border: 5px solid white;
    background-color:#0f4d46;
    transition-property: border, box-shadow, background-color;
    transition-duration: 2s, 1s, 1s;
  `
  );
};
const perf1HMO = () => {
  document.getElementById("perf1").setAttribute(
    "style",
    `
    box-shadow: 0px 0px 0px black, 0px 0px 0px gray;
    border:1px solid white;
    background-color: #8AA6A3;
    transition-property: border, box-shadow, background-color;
    transition-duration: 2s, 1s, 1s;
  `
  );
};
const perf2HMI = () => {
  document.getElementById("perf2").setAttribute(
    "style",
    `
    box-shadow: 5px 5px 5px black,-5px -5px 5px gray;
    border: 5px solid white;
    background-color:#0f4d46;
    transition-property: border, box-shadow, background-color;
    transition-duration: 2s, 1s, 1s;
  `
  );
};
const perf2HMO = () => {
  document.getElementById("perf2").setAttribute(
    "style",
    `
    box-shadow: 0px 0px 0px black, 0px 0px 0px gray;
    border:1px solid white;
    background-color: #8AA6A3;
    transition-property: border, box-shadow, background-color;
    transition-duration: 2s, 1s, 1s;
  `
  );
};

const IME = () => {
  //HACER GRID EN PANTALLA
  document.getElementById("pantalla").setAttribute(
    "style",
    `
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:repeat(5,1fr);
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap:10px;
    transition-property: display;
    transition-duration: 3s;
  `
  );
  //TENER MARGIN EN header
  document.getElementById("header").setAttribute(
    "style",
    `
    margin-top:30px;
    background-color: #127369;
  `
  );
  //CAMBIAR TAMAÑO DE FOTO
  document.getElementById("imgcont").setAttribute(
    "style",
    `
    height: 280px;
    width: 280px;
    transition-property: height,width;
    transition-duration: 2s,2s;
  `
  );
  //Ajustacion de .cent1
  // document.getElementById("cent1").setAttribute("style", "flex-direction: column;justify-content:space-around; ");

  //PONER INFORMACION DE CONTACTO
  // document.getElementById("contac").innerHTML = `
  //   <h3 class="phone" id="phone" style="height:auto; width:auto; color:white; font-family:'Fredoka', sans-serif; font-size: 20px; margin-top:10px;">3334958816</h3>
  //   <h3 class="mail" id="mail" style="height:auto; width:auto; color:white; font-family:'Fredoka', sans-serif; font-size: 20px;margin-left:10px; margin-right:10px; margin-bottom:10px;">joaquinarroyo@outlook.com</h3>
  // `;
  // document.getElementById("contac").setAttribute(
  //   "style",
  //   `
  //   background-color:#8AA6A3;
  //   border-radius:20px;
  //   border: 5px solid white;
  //   height:auto;
  //   width:auto;
  //   margin-top:0px;
  //   transition-property: height,width;
  //   transition-duration: 2s,2s;

  // `
  // );
  //AJUSTAMOS LA ALTURA DE EL NOMBRE DE LA PERSONA
  document.getElementById("nombre").setAttribute(
    "style",
    `
    height:fit-content;
    font-size: 45px;
    transition-property: height,font-size;
    transition-duration: 2s,2s;
    `
  );
  document.getElementById("cent2").setAttribute(
    "style",
    `
    height:fit-content;
    `
  );
  //quitando los botones de los perfiles
  document.getElementById("perf").innerHTML = `
  <div class="prof" id="prof">
    <h1 class="h1prof" id="h1prof">Ingeniero Mecánico y Eléctrico</h1>
  </div>`;
  // document.getElementById("perf").setAttribute(
  //   "style",
  //   `
  // font-family: "Fredoka", sans-serif;
  // font-size: 40px;
  // color:white;
  // `
  // );
};
