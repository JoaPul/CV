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

//INTRODUCE LOS BOTONES DE LOS PERFILES
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
  document.getElementById("perf").setAttribute("style", `height: 120px;`);

  //EN JERARQUIA DE OPERACIONES CON CSS, PRIMERO LE HARA CASO
  // A LOS ATRIBUTOS DE LA MISMA ETIQUETA QUE LLEVEN POR NOMBRE 'style'
  // por ejemplo "<h1 class='perf' style>...</h1>"
  // QUE A LA ETIQUETA QUE CAMBIA TODO LOS ESTIDOS LLAMADA 'style'
  // por ejemplo "<style>...</style>"
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
  .perf1, .perf2{
    height:70px;
    display:flex;
    align-content:center;
    justify-content:center;
    align-items:center;
    border-radius: 30px;
    border:3px solid white;
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
  document.getElementById("todo").setAttribute(
    "style",
    `
    height:100%;
  `
  );
  document.getElementById("perf").innerHTML = ``;
  // document.getElementById("perf2").innerHTML = ``;
  HMO();
  document.getElementById("style").innerHTML = ``;
  document.getElementById("perf").setAttribute(
    "style",
    `
  height: 0px;
  transition-property: height;
  transition-duration: 2s;
  `
  );

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
  document.getElementById("header").setAttribute("onclick", "perf()");
  document.getElementById("header").setAttribute(
    "style",
    `
    margin-top:0px;

  `
  );
  document.getElementById("nombre").setAttribute(
    "style",
    `
  font-size: 50px;
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
  document.getElementById("expProj").innerHTML = ``;
  document.getElementById("personal").innerHTML = ``;
  document.getElementById("skiToo").innerHTML = ``;
  document.getElementById("eduCur").innerHTML = ``;
  document.getElementById("Certi").innerHTML = ``;
  document.getElementById("profile").innerHTML = "";
  document.getElementById("skills").innerHTML = "";

  document.getElementById("skills").setAttribute("style", "");
  document.getElementById("profile").setAttribute("style", "");
  document.getElementById("contac").setAttribute("style", "");
  document.getElementById("expProj").setAttribute("style", "");
  document.getElementById("personal").setAttribute("style", "");
  document.getElementById("skiToo").setAttribute("style", "");
  document.getElementById("eduCur").setAttribute("style", "");
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
    border: 8px solid white;
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
    border:3px solid white;
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
    border: 8px solid white;
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
    border:3px solid white;
    background-color: #8AA6A3;
    transition-property: border, box-shadow, background-color;
    transition-duration: 2s, 1s, 1s;
  `
  );
};

//Perfil de IME
const IME = () => {
  //TODO height
  document.getElementById("todo").setAttribute(
    "style",
    `
    height:auto;
  `
  );
  //HACER GRID EN PANTALLA
  document.getElementById("pantalla").setAttribute(
    "style",
    `

    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: repeat(6,auto);
    align-content: space-between;
    justify-content: center;
    align-items: center;
    justify-items: center;
    gap:10px;
    transition-property: display;
    transition-duration: 3s;
    width:1000px;
    height: auto;
    margin-bottom: 20px;
  `
  );
  //TENER MARGIN EN header
  document.getElementById("header").setAttribute(
    "style",
    `
    background-color: #127369;
    grid-row: 2;
    grid-column: 1;
    height:400px;
    width:440px;
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

  document.getElementById("header").setAttribute("onclick", "");
  document.getElementById("perf").innerHTML = "";
  document.getElementById("perf").setAttribute(
    "style",
    `height:0px;
    width:0px;`
  );

  //AÑADIR LA PROFESIÓN
  document.getElementById("profile").innerHTML = `
    <div class"prof" id="prof">
      <h1 class="prh1" id="prh1">Ingeniero <br>Mecánico y Eléctrico</h1>
    </div>
  `;

  document.getElementById("profile").setAttribute(
    "style",
    `
    height:auto;
    width:440px;
    background-color:#8aa6a3;
    border-radius:30px;
    grid-row:1;
    grid-column:1;
    border:8px solid white;
    box-shadow: 5px 5px 5px black,-5px -5px 5px gray;
    margin-top:30px;
    transition-property: height,width,border, box-shadow, margin-top;
    transition-duration: 2s,2s,2s,2s,1s;
    
    `
  );
  document.getElementById("prof").setAttribute(
    "style",
    `
    height:fit-content;
    font-size: 30px;
    color: #10403b;
    font-family: "Fredoka", sans-serif;
    transition-property: height,font-size;
    transition-duration: 2s,2s;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin:10px;
    align-text:center;
  `
  );
  document.getElementById("prh1").setAttribute(
    "style",
    `
    align-text:center;
  `
  );

  //SE AÑADE LOS CUADRO DE EXPERIENCIA
  document.getElementById("expProj").innerHTML = `
    <br>
      <h1 class="TE" id="TE">Experiencia Laboral</h1>
      <br>
      <div class="PE" id="PE">
      <ul>
        <li class="IE" Id="IE"> <span class="SE" id="SE">(Marzo 2021 - Julio 2021)
        </span>
        <br>
        Huawei | Gerente de adquisiciones de Proyectos
        </li>
        <br>

        <li class="IE" Id="IE"> <span class="SE" id="SE">(December 2020 - Marzo 2021)
        </span>
        <br>
        Huawei | Interno en departamento de Proyectos
        </li>
        <br>

        <li class="IE" Id="IE"><span class="SE" id="SE">(Septiembre 2020 – Diciembre 2020)
        </span>
        <br>
        Industrializadora Oleofinos | Planeador de Mantenimiento
        </li>
        <br>

        <li class="IE" Id="IE"><span class="SE" id="SE">(Abril 2020 – Septiembre 2020)
        </span>
        <br>
        Industrializadora Oleofinos | Técnico Mantenimiento Mecánico
        </li>
        <br>

        <li class="IE" Id="IE"><span class="SE" id="SE">(Junio 2019 – Diciembre 2019)
        </span>
        <br>
        Docudigital de Occidente SA de CV| Interno en departamento Servicio Técnico
        </li>
        <br>

        <li class="IE" Id="IE"><span class="SE" id="SE">(Enero 2019 – Mayo 2019)
        </span>
        <br>
        AGENCIA FORD MAMERICAS S.A. DE C.V| Ayudante de mecánico automotriz
        </li>
        <br>

        </ul>
      </div>
  `;
  document.getElementById("expProj").setAttribute(
    "style",
    `
    height: auto;
    width: 462px;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 1 / 3 ;
    grid-column: 2;
    color:white;
    font-family: "Fredoka", sans-serif;
    margin-top:20px;

  `
  );
  //SE AÑADE LOS CUADRO DE INFORMACION PERSONAL
  document.getElementById("personal").innerHTML = `
    <div class="Pers" id="Pers">
      <h1 class="TE" id="TE">Contacto</h1>
      <br>
      <div class="Cont" id="Cont">
        <div class="credL" id="credL" onmouseover="credHMI('credL')" onmouseout="credHMO('credL')">
          <a href="https://www.linkedin.com/in/joaquin-arroyo"><img src="./assets/Lin.png" alt="Linkedin logo" style="height: 40px; width: 40px;"/></a>
        </div>
        <div class="credE" id="credE" onmouseover="credHMI('credE')" onmouseout="credHMO('credE')">
          <a href=mailto:joaquinarroyo@outlook.com?subject="Contacto"><img src="./assets/Mail.png" alt="Mail logo" href="" style="height: 40px; width: 40px;"/></a>
        </div>
        <div class="credG" id="credG" onmouseover="credHMI('credG')" onmouseout="credHMO('credG')">
          <a href="https://github.com/JoaPul"><img src="./assets/Git.png" alt="Github logo" href="https://github.com/JoaPul" style="height: 40px; width: 40px;"/></a>
        </div>
      </div>
    </div>
  `;
  document.getElementById("personal").setAttribute(
    "style",
    `
    height: auto;
    width: 440px;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 3 / 4 ;
    grid-column: 1;
    color:white;
    font-family: "Fredoka", sans-serif;
  `
  );
  //SE AÑADE LOS CUADRO DE CERTIFICADOS Y CEDULA PROF
  document.getElementById("Certi").innerHTML = `
  <div class="Pers" id="Pers">
    <h1 class="TE" id="TE"><span class="CRE" id="CRE">Credenciales</span> y <span class="CER" id="CER">Certificados</span></h1>
    <br>
    <div class="Cont" id="Cont">
      <a href="https://drive.google.com/file/d/1KeDb6hsSlbwfYnCRiQiFaxevyPxS1_iL/view?usp=sharing">
        <div class="credCe" id="credCe" onmouseover="credHMI('credCe')" onmouseout="credHMO('credCe')">
          <img src="./assets/Cédula.png" alt="Cédula Profesional" style="height: 60px; width: 60px;"/>
        </div>
      </a>
      <a href="https://docs.google.com/presentation/d/1cuIkRagY2oC5VlMqHliZY6ILeqeVZSPnD3annDGfpXw/edit?usp=sharing">
        <div class="credCo" id="credCo" onmouseover="credHMI('credCo')" onmouseout="credHMO('credCo')">
          <img src="./assets/Certif.png" alt="PPT de Certificados" style="height: 60px; width: 60px;"/>
        </div>
      </a>
      </div>
  </div>
  `;
  document.getElementById("Certi").setAttribute(
    "style",
    `
    height: auto;
    width: 440px;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 4 / 5 ;
    grid-column: 1;
    color:white;
    font-family: "Fredoka", sans-serif;
  `
  );
  //SE AÑADE LOS CUADRO DE EDUCACIÓN
  document.getElementById("eduCur").innerHTML = `
  <div class="Pers" id="Pers">
  <h1 class="TE" id="TE">Formación</h1>
  <br>
  <ul>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Septiembre 2016 - Diciembre 2019) <br>Universidad Autonoma de Guadalajara 
  </span>
  <br>
  Ingeniería Mecánica y Eléctrica
  </li>
  <br>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Abril 2018 - Noviembre 2018) <br>Grupo Milenio 
  </span>
  <br>
  Voluntariado, Aprendiz de Reportero
  </li>
  <br>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Febrero 2019 - Marzo 2019) <br>Centro de Capacitación CARSO 
  </span>
  <br>
  Instalación residencial y comerciales en Baja Tensión
  </li>
  <br>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Octubre 2020 - Diciembre 2020) <br>Programming Hub  
  </span>
  <br>
  Python Certification Course
  </li>
  <br>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Octubre 2021 - Actualmete) <br>Dev.f  
  </span>
  <br>
  Master en Coding de Desarrollo web
  </li>
  <br>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Enero 2022 - Actualmete) <br>Udemy  
  </span>
  <br>
  Machine Learning: Data Science en Python
  </li>
  <br>
  </ul>
  </div>
  `;
  document.getElementById("eduCur").setAttribute(
    "style",
    `
    height: auto;
    width: 460px;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 3 / 6 ;
    grid-column: 2;
    color:white;
    font-family: "Fredoka", sans-serif;
  `
  );
  //SE AÑADE LOS CUADRO DE IDIOMAS
  document.getElementById("skiToo").innerHTML = `
  <div class="Pers" id="Pers">
    <h1 class="TE" id="TE">Idiomas</h1>
    <br>
    <ul>
      <li class="IE" Id="IE"><span class="SE" id="SE">Español: </span>
        Nativo
      </li>
      
      <li class="IE" Id="IE"><span class="SE" id="SE">Ingles: </span>
        Avanzado
      </li>
      
      <li class="IE" Id="IE"><span class="SE" id="SE">Aleman: </span>
        Básico
      </li>
      
    </ul>
  </div>
  `;
  document.getElementById("skiToo").setAttribute(
    "style",
    `
    height: auto;
    width: 440px;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 5;
    grid-column: 1;
    color: white;
    font-family: "Fredoka", sans-serif;
  `
  );
  //SE AÑADE EL CUADRO DE HERRAMIENTAS Y SOFTWARES UTILIZADOS
  document.getElementById("skills").innerHTML = `
  <div class="Pers" id="Pers">
    <h1 class="TE" id="TE">Habilidades (uso en años)</h1>
    <br>
    <ul>
      <br>
      <li class="IE" Id="IE">Autocad 2D</li>
      <div class="cien" id="cien">
        <div class="cuarenta" id="cuarenta">
          <p class="IE" id="IE">2 años</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Solidworks</li>
      <div class="cien" id="cien">
        <div class="veinte" id="veinte">
          <p class="IE" id="IE">1 años</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Metodología TPM</li>
      <div class="cien" id="cien">
        <div class="veinte" id="veinte">
          <p class="IE" id="IE">1 años</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Matlab</li>
      <div class="cien" id="cien">
        <div class="diez" id="diez">
          <p class="IE" id="IE">.5 años</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Excel</li>
      <div class="cien" id="cien">
        <div class="ochenta" id="ochenta">
          <p class="IE" id="IE">4 años</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Autodesk Flow Design</li>
      <div class="cien" id="cien">
        <div class="diez" id="diez">
          <p class="IE" id="IE">.5 años</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Soldadura con electrodo, MIG/MAG, oxiacetiléno</li>
      <div class="cien" id="cien">
        <div class="diez" id="diez">
          <p class="IE" id="IE">.5 años</p>
        </div>
      </div>
    </ul>
  </div>
  `;
  document.getElementById("skills").setAttribute(
    "style",
    `
    height: auto;
    width: 96%;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 6;
    grid-column: 1/3;
    color: white;
    font-family: "Fredoka", sans-serif;
  `
  );
};

//onmouseover="credHMI()" onmouseout="credHMO()"
const credHMI = (a) => {
  document.getElementById(a).setAttribute(
    "style",
    `
    border-radius: 10px;
    box-shadow: 5px 5px 5px black,-5px -5px 5px gray;
    border: 3px solid #10403b;
    transition-property: border-radius, border, box-shadow;
    transition-duration: 2s, 1s, 1s;
  `
  );

  if (a == "credCe") {
    document.getElementById("CRE").setAttribute(
      "style",
      `
      color: #10403b;
      transition-property: color;
      transition-duration: 1s;
    `
    );
  } else if (a == "credCo") {
    document.getElementById("CER").setAttribute(
      "style",
      `
      color: #10403b;
      transition-property: color;
      transition-duration: 1s;
    `
    );
  }
};
const credHMO = (a) => {
  document.getElementById(a).setAttribute(
    "style",
    `
    border-radius: 5px;
    box-shadow: 0px 0px 0px black,0px 0px 0px gray;
    border: 3px solid #10403b;
    transition-property: border-radius, border, box-shadow;
    transition-duration: 2s, 1s, 1s;
  `
  );
  if (a == "credCe") {
    document.getElementById("CRE").setAttribute(
      "style",
      `
      color: white;
      transition-property: color;
      transition-duration: 1s;
    `
    );
  } else if (a == "credCo") {
    document.getElementById("CER").setAttribute(
      "style",
      `
      color: white;
      transition-property: color;
      transition-duration: 1s;
    `
    );
  }
};
