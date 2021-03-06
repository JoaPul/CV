//variable de cambio a WB
let w = true;
let current = 0;
let arr = [
  `<a href="https://joapul.github.io/ATM/">
  <div class="Proy1" id="Proy1" >
<div class="mask1" id="mask1"><h1>π¦ ATM π¦</h1></div>
<img src="./assets/ATM.png" alt="proyecto" class="Pimg1" id="Pimg1">
</div></a>`,
  `<a href="https://joapul.github.io/NASA/">
  <div class="Proy2" id="Proy2" >
<div class="mask2" id="mask2"><h1>π NASA π</h1></div>
<img src="./assets/NASA.png" alt="proyecto" class="Pimg2" id="Pimg2">
</div></a>`,
  `<a href="https://github.com/JoaPul/Practica-Python-app">
  <div class="Proy3" id="Proy3" >
<div class="mask3" id="mask3"><h1>π Notas π</h1></div>
<img src="./assets/Notes.png" alt="proyecto" class="Pimg3" id="Pimg3">
</div></a>`,
  `<a href=href="https://joapul.github.io/Mi-N-mero-de-la-suerte/">
  <div class="Proy4" id="Proy4" >
<div class="mask4" id="mask4"><h1>πͺ NΓΊmero Ganador πͺ</h1></div>
<img src="./assets/Num.png" alt="proyecto" class="Pimg4" id="Pimg4">
</div></a>`,
  `<a href="https://github.com/JoaPul/PinterestStyleProject">
  <div class="Proy5" id="Proy5" >
<div class="mask5" id="mask5"><h1>π©βπ€ Pinterest π·</h1></div>
<img src="./assets/Pint.png" alt="proyecto" class="Pimg5" id="Pimg5">
</div></a>`,
  `<a href="https://joapul.github.io/Pokedex/">
  <div class="Proy6" id="Proy6" >
<div class="mask6" id="mask6"><h1>πΉοΈ Pokedex πΉοΈ</h1></div>
<img src="./assets/Pock.png" alt="proyecto" class="Pimg6" id="Pimg6">
</div></a>`,
];
let ss = ``;

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
  document.getElementById("regre").setAttribute("onmouseover", "InicioHMI()");
  document.getElementById("regre").setAttribute("onmouseout", "InicioHMO()");
  document.getElementById("regre").setAttribute("style", "z-index:4;");
  document.getElementById("perf").innerHTML = `
  <div class="perf1" id="perf1" onmouseover="perf1HMI()" onmouseout="perf1HMO()" onclick="IME()"></div>
  <div class="perf2" id="perf2" onmouseover="perf2HMI()" onmouseout="perf2HMO()" onclick="WD()"></div>
  `;

  document.getElementById("perf1").innerHTML = `
      <h1 class="p1h1" id="p1h1">MecΓ‘nico y ElΓ©ctrico</h1>`;
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
const InicioWD = () => {
  //limpiar variable
  w = true;
  //PONER EN PANTALLA
  document.getElementById("regre").setAttribute("onclick", "Inicio()");
  document.getElementById("pantalla").innerHTML = `
  <div class="header" id="header" onmouseover="HMI()" onmouseout="HMO()" onclick="perf()">
  <div class="nom" id="nom">
    <div class="cent1" id="cent1">
      <div class="imgcont" id="imgcont">
        <img src="./assets/yo.png" alt="Foto de perfil" class="yo" id="yo" />
      </div>
      <div class="contac" id="contac"></div>
    </div>
    <div class="cent2" id="cent2">
      <h1 class="nombre" id="nombre">JOAQUIN ARROYO</h1>
    </div>
  </div>
  <div class="perf" id="perf"></div>
</div>
<div class="profile" id="profile"></div>
<div class="expProj" id="expProj"></div>
<div class="personal" id="personal"></div>
<div class="skiToo" id="skiToo"></div>
<div class="eduCur" id="eduCur"></div>
<div class="Certi" id="Certi"></div>
<div class="skills" id="skills"></div>
  `;

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
  if (screen.width < 960) {
    document.getElementById("nombre").setAttribute(
      "style",
      `
    font-size: 40px;
    `
    );
  }
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
  perf();
};

const Inicio = () => {
  //PONER EN PANTALLA
  document.getElementById("regre").setAttribute("onmouseover", "");
  document.getElementById("regre").setAttribute("onmouseout", "");
  document.getElementById("regre").setAttribute("style", "z-index:-1;");
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
  if (screen.width < 960) {
    document.getElementById("nombre").setAttribute(
      "style",
      `
    font-size: 40px;
    `
    );
  }
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
  document.getElementById("regre").setAttribute("onclick", "InicioWD()");
  document.getElementById("todo").setAttribute(
    "style",
    `
    height:auto;
    display:flex;
    align-content:center;
    align-items:center;
    justify-content:center;
  `
  );
  //HACER GRID EN PANTALLA
  document.getElementById("pantalla").setAttribute(
    "style",
    `
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: repeat(8,auto);
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
  //CAMBIAR TAMAΓO DE FOTO
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

  //AΓADIR LA PROFESIΓN
  document.getElementById("profile").innerHTML = `
    <div class"prof" id="prof">
      <h1 class="prh1" id="prh1">Ingeniero <br>MecΓ‘nico y ElΓ©ctrico</h1>
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

  //SE AΓADE LOS CUADRO DE EXPERIENCIA
  document.getElementById("expProj").innerHTML = `
    <br>
      <h1 class="TE" id="TE">Experiencia Laboral</h1>
      <br>
      <div class="PE" id="PE">
      <ul>
        <li class="IE" Id="IE"> <span class="SE" id="SE"><u>(Marzo 2021 - Julio 2021)</u>
        HUAWEI | Gerente de adquisiciones de Proyectos. <br></span>
        Encargado de llevar un control de recursos (materiales, personal y vehΓ­culos), primer contacto de los proveedores del proyecto. 
        </li>
        <br>

        <li class="IE" Id="IE"> <span class="SE" id="SE"><u>(December 2020 - Marzo 2021)</u>
        HUAWEI | Interno en departamento de Proyectos</span><br>
        Ayudaba a los PPMs a juntar listado de asistencia de personal por proveedor, 
        realizar el reporte diario de asistencia y seguimiento de metas.
        </li>
        <br>

        <li class="IE" Id="IE"><span class="SE" id="SE"><u>(Septiembre 2020 β Diciembre 2020)</u>
        INDUSTRIALIZADORA OLEOFINOS | Planeador de Mantenimiento</span><br>
        ElaboraciΓ³n de calendarios de mantenimiento para cada mΓ‘quina en las diferentes fabricas, 
        asignaciΓ³n de actividades de mtto. planeado a TΓ©cnicos, 
        elaboraciΓ³n de Reportes mensuales manejando KPIs establecidos, 
        ParticipaciΓ³n en la aplicaciΓ³n de metodologΓ­as TPM.
        </li>
        <br>

        <li class="IE" Id="IE"><span class="SE" id="SE"><u>(Abril 2020 β Septiembre 2020)</u>
        INDUSTRIALIZADORA OLEOFINOS | TΓ©cnico Mantenimiento MecΓ‘nico</span><br>
        Proporcionar mtto. correctivo/planeado a mΓ‘quinas de planta, por mencionar algunas: bombas, 
        tuberΓ­a, cortadoras, envolvedoras, extrudes, silos, motores elΓ©ctricos, PLCs.  
        </li>
        <br>

        <li class="IE" Id="IE"><span class="SE" id="SE"><u>(Junio 2019 β Diciembre 2019)</u>
        DOCUDIGITAL DE OCCIDENTE SA DE CV | Interno en departamento Servicio TΓ©cnico</span><br>
        Apoyo en planeaciΓ³n de los Horarios y visitas que se les asignaban a los tΓ©cnicos por dΓ­a, 
        llevar un control con reportes de tΓ©cnicos en base de datos local, y llevar control de viΓ‘ticos de tΓ©cnicos. 
        </li>
        <br>

        <li class="IE" Id="IE"><span class="SE" id="SE"><u>(Enero 2019 β Mayo 2019)</u>
        AGENCIA FORD AV. AMERICAS  | Ayudante de mecΓ‘nico automotriz</span><br>
        Apoyo con mtto. correctivos y aplicar servicios (mtto. planeados), a autos asignados a tΓ©cnico encargado.
        </li>
        <br>

        </ul>
      </div>
  `;
  document.getElementById("expProj").setAttribute(
    "style",
    `
    height: auto;
    width: 442px;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 1 / 5 ;
    grid-column: 2;
    color:white;
    font-family: "Fredoka", sans-serif;
    margin-top:20px;
    padding-right:10px;
  `
  );
  //SE AΓADE LOS CUADRO DE INFORMACION PERSONAL <a href=mailto:joaquinarroyo@outlook.com?subject="Contacto">
  document.getElementById("personal").innerHTML = `
    <div class="Pers" id="Pers">
      <h1 class="TE" id="TE">Contacto</h1>
      <br>
      <div class="Cont" id="Cont">
        <div class="credL" id="credL" onmouseover="credHMI('credL')" onmouseout="credHMO('credL')">
          <a href="https://www.linkedin.com/in/joaquin-arroyo"><img src="./assets/Lin.png" alt="Linkedin logo" style="height: 40px; width: 40px;"/></a>
        </div>
        <div class="credE" id="credE" onmouseover="credHMI('credE')" onmouseout="credHMO('credE')" onclick="Contacto()">
          <img src="./assets/Mail.png" alt="Mail logo" href="" style="height: 40px; width: 40px;"/></a>
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
  //SE AΓADE LOS CUADRO DE CERTIFICADOS Y CEDULA PROF
  document.getElementById("Certi").innerHTML = `
  <div class="Pers" id="Pers">
    <h1 class="TE" id="TE"><span class="CRE" id="CRE">Credenciales</span> y <span class="CER" id="CER">Certificados</span></h1>
    <br>
    <div class="Cont" id="Cont">
      <a href="https://drive.google.com/file/d/1KeDb6hsSlbwfYnCRiQiFaxevyPxS1_iL/view?usp=sharing">
        <div class="credCe" id="credCe" onmouseover="credHMI('credCe')" onmouseout="credHMO('credCe')">
          <img src="./assets/CΓ©dula.png" alt="CΓ©dula Profesional" style="height: 60px; width: 60px;"/>
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
    width: 442px;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 5 / 6 ;
    grid-column: 2;
    color:white;
    font-family: "Fredoka", sans-serif;
  `
  );
  //SE AΓADE LOS CUADRO DE EDUCACIΓN
  document.getElementById("eduCur").innerHTML = `
  <div class="Pers" id="Pers">
  <h1 class="TE" id="TE">FormaciΓ³n</h1>
  <br>
  <ul>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Septiembre 2016 - Diciembre 2019) <br>Universidad Autonoma de Guadalajara 
  </span>
  <br>
  IngenierΓ­a MecΓ‘nica y ElΓ©ctrica
  </li>
  <br>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Abril 2018 - Noviembre 2018) <br>Grupo Milenio 
  </span>
  <br>
  Voluntariado en eventos TL y FIL
  </li>
  <br>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Febrero 2019 - Marzo 2019) <br>Centro de CapacitaciΓ³n CARSO 
  </span>
  <br>
  InstalaciΓ³n residencial y comerciales en Baja TensiΓ³n
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
  Machine Learning: Data Science con R y py
  </li>
  <br>
  <li class="IE" Id="IE"><span class="SE" id="SE">(Abril 2022 - Actualmete) <br>  Becas Santander TecnologΓ­a | InnovaciΓ³n para el futuro | BEDU
  </span>
  <br>
  Data Science Course
  </li>
  <br>
  </ul>
  </div>
  `;
  document.getElementById("eduCur").setAttribute(
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
    grid-row: 4 / 7 ;
    grid-column: 1;
    color:white;
    font-family: "Fredoka", sans-serif;
  `
  );
  //SE AΓADE LOS CUADRO DE IDIOMAS
  document.getElementById("skiToo").innerHTML = `
  <div class="Pers" id="Pers">
    <h1 class="TE" id="TE">Idiomas</h1>
    <br>
    <ul>
      <li class="IE" Id="IE"><span class="SE" id="SE">EspaΓ±ol: </span>
        Nativo
      </li>
      <br>
      <li class="IE" Id="IE"><span class="SE" id="SE">Ingles: </span>
        Avanzado
      </li>
      <br>
      <li class="IE" Id="IE"><span class="SE" id="SE">Aleman: </span>
        BΓ‘sico
      </li>
      <br>
    </ul>
  </div>
  `;
  document.getElementById("skiToo").setAttribute(
    "style",
    `
    height: auto;
    width: 442px;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    grid-row: 6/7;
    grid-column: 2;
    color: white;
    font-family: "Fredoka", sans-serif;
  `
  );
  //SE AΓADE EL CUADRO DE HERRAMIENTAS Y SOFTWARES UTILIZADOS
  document.getElementById("skills").innerHTML = `
  <div class="Pers" id="Pers">
    <h1 class="TE" id="TE">Habilidades (uso en aΓ±os)</h1>
    <br>
    <ul>
      <br>
      <li class="IE" Id="IE">Autocad 2D</li>
      <div class="cien" id="cien">
        <div class="cuarenta" id="cuarenta">
          <p class="IE" id="IE">2 aΓ±os</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Solidworks</li>
      <div class="cien" id="cien">
        <div class="veinte" id="veinte">
          <p class="IE" id="IE">1 aΓ±os</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">MetodologΓ­a TPM</li>
      <div class="cien" id="cien">
        <div class="veinte" id="veinte">
          <p class="IE" id="IE">1 aΓ±os</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Matlab</li>
      <div class="cien" id="cien">
        <div class="diez" id="diez">
          <p class="IE" id="IE">.5 aΓ±os</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Excel</li>
      <div class="cien" id="cien">
        <div class="ochenta" id="ochenta">
          <p class="IE" id="IE">4 aΓ±os</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Autodesk Flow Design</li>
      <div class="cien" id="cien">
        <div class="diez" id="diez">
          <p class="IE" id="IE">.5 aΓ±os</p>
        </div>
      </div>
      <br>
      <li class="IE" Id="IE">Soldadura con electrodo, MIG/MAG, oxiacetilΓ©no</li>
      <div class="cien" id="cien">
        <div class="diez" id="diez">
          <p class="IE" id="IE">.5 aΓ±os</p>
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
    grid-row: 8;
    grid-column: 1/3;
    color: white;
    font-family: "Fredoka", sans-serif;
  `
  );
  //Responsive
  if (screen.width < 969) {
    document.getElementById("pantalla").setAttribute(
      "style",
      `
    display: flex;
    flex-direction:column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding:20px;
    gap:20px;
    }
  `
    );
    document.getElementById("nombre").setAttribute("style", "font-size:40px;");
    document.getElementById("header").setAttribute(
      "style",
      `
    width:95%;
    background-color: #127369;
    grid-row: 2;
    grid-column: 1;
    height:400px;
    `
    );
    document.getElementById("profile").setAttribute(
      "style",
      `
    width:95%; 
    height:auto;
    background-color:#8aa6a3;
    border-radius:30px;
    border:8px solid white;
    box-shadow: 5px 5px 5px black,-5px -5px 5px gray;
    transition-property: height,width,border, box-shadow, margin-top;
    transition-duration: 2s,2s,2s,2s,1s;
    `
    );
    document.getElementById("expProj").setAttribute(
      "style",
      `
    width:95%;
    height: auto;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    color:white;
    font-family: "Fredoka", sans-serif;
    padding-right:10px;
    `
    );
    document.getElementById("personal").setAttribute(
      "style",
      `
    width:95%;
    height: auto;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    color:white;
    font-family: "Fredoka", sans-serif;
    `
    );
    document.getElementById("skiToo").setAttribute(
      "style",
      `
    width:95%;
    height: auto;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    color: white;
    font-family: "Fredoka", sans-serif;
    `
    );
    document.getElementById("eduCur").setAttribute(
      "style",
      `
    width:95%;
    height: auto;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    color:white;
    font-family: "Fredoka", sans-serif;
    `
    );
    document.getElementById("Certi").setAttribute(
      "style",
      `
    width:95%;
    height: auto;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    color:white;
    font-family: "Fredoka", sans-serif;
    `
    );
    document.getElementById("skills").innerHTML = `
    <div class="Pers" id="Pers">
      <h1 class="TE" id="TE">Habilidades (uso en aΓ±os)</h1>
      <br>
      <ul>
        <br>
        <li class="IE" Id="IE">Autocad 2D</li>
        <div class="cien" id="cien">
          <div class="cuarenta" id="cuarenta">
            <p class="IE" id="IE">2</p>
          </div>
        </div>
        <br>
        <li class="IE" Id="IE">Solidworks</li>
        <div class="cien" id="cien">
          <div class="veinte" id="veinte">
            <p class="IE" id="IE">1</p>
          </div>
        </div>
        <br>
        <li class="IE" Id="IE">MetodologΓ­a TPM</li>
        <div class="cien" id="cien">
          <div class="veinte" id="veinte">
            <p class="IE" id="IE">1</p>
          </div>
        </div>
        <br>
        <li class="IE" Id="IE">Matlab</li>
        <div class="cien" id="cien">
          <div class="diez" id="diez">
            <p class="IE" id="IE">.5</p>
          </div>
        </div>
        <br>
        <li class="IE" Id="IE">Excel</li>
        <div class="cien" id="cien">
          <div class="ochenta" id="ochenta">
            <p class="IE" id="IE">4</p>
          </div>
        </div>
        <br>
        <li class="IE" Id="IE">Autodesk Flow Design</li>
        <div class="cien" id="cien">
          <div class="diez" id="diez">
            <p class="IE" id="IE">.5</p>
          </div>
        </div>
        <br>
        <li class="IE" Id="IE">Soldadura con electrodo, MIG/MAG, oxiacetilΓ©no</li>
        <div class="cien" id="cien">
          <div class="diez" id="diez">
            <p class="IE" id="IE">.5</p>
          </div>
        </div>
      </ul>
    </div>
    `;
    document.getElementById("skills").setAttribute(
      "style",
      `
    width:95%;
    height: auto;
    background-color: #8aa6a3;
    border-radius: 30px;
    border: 8px solid white;
    box-shadow: 5px 5px 5px black, -5px -5px 5px gray;
    transition-property: height, width, border, box-shadow;
    transition-duration: 2s, 2s, 2s, 2s;
    color: white;
    font-family: "Fredoka", sans-serif;
    `
    );
  }
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

//Perfil de WD
const WD = () => {
  document.getElementById("regre").setAttribute("onclick", "InicioWD()");
  document.getElementById("header").setAttribute("onclick", "");
  document.getElementById("pantalla").setAttribute(
    "style",
    `
    display:flex;
    align-content: space-between;
    justify-content: center;
    align-items: center;
    justify-items: center;
    flex-direction:column;
    width:100%;
    height: auto;
    margin-bottom: 20px;
  `
  );
  document.getElementById("pantalla").innerHTML = `
  <div id="WebDev" class="WebDev">
    <h1>Web Developer</h1>
  </div>
  <div id="aboutMe" class="abouMe">
    <p>Β‘Hola! Me alegra verte por aquΓ­. <br><br>
    Me gusta aprender cosas nuevas y desarrollar proyectos con sentido social.<br><br>
    Me encantarΓ­a que colaboremos juntos  <span id="Conta" class="Conta" onclick="Contacto()">Β‘ContΓ‘ctame!<span>
    </p>
  </div>
  <div id="yoBW" class="yoBW" >
  <img src="./assets/yoBW.png" alt="profile picture" class="sobreMi" id="sobreMi" onmouseout="yoHMO()" />
  </div>
  <div class="contPort" id="contPort" style=" margin-bottom:30px; width:100%; display:flex; flex-direction: column; align-content:center; justify-content:center; align-items:center;"></div>
  <br>
  <div class="lenguajes" id="lenguajes">
  
  </div>
  <br>
  `;
  document.getElementById("aboutMe").setAttribute(
    "style",
    `
  color: white;
  font-family: "Fredoka";
  font-size: 20px;
  text-align:center;
  `
  );
  document.getElementById("Conta").setAttribute(
    "style",
    `
    color: red;
    cursor:pointer;
  `
  );
  document.getElementById("sobreMi").setAttribute(
    "style",
    `
    border-radius:5px;
    height: inherit;
    width: inherit;
    object-fit: cover;
    border: 4px solid white;
  `
  );
  let wi = 0;
  if (screen.width < 969) {
    wi = 380;
  } else {
    wi = 400;
  }

  document.getElementById("style").innerHTML = ` 
  .WebDev {
    margin: 30px;
    color: white;
    font-family: "Fredoka";
    font-size: 20px;
    text-align: center;
    border-bottom: 10px solid #127369;
    width: 310px;
    transition: width 2s, font-size 2s;
    /* animation: WebDev 2s timing-function delay iteration-count direction fill-mode; */
    animation: Title 3s ease 0s 1 normal both;
  }
  @keyframes Title {
    0% {
      font-size: 20px;
      width: 400px;
    }
    100% {
      font-size: 30px;
      width: 310px;
    }
  }
  
  .yoBW {
    margin: 30px;
    width: ${wi}px;
    height: 600px;
    border-radius: 10px;
    transition: box-shadow 2s;
    animation: yoBW 3s ease 0s 1 normal both;
  }
  @keyframes yoBW {
    0% {
      box-shadow: 14px 14px 0px 0px #127369, -5px -5px 0px 0px #8aa6a3;
    }
    100% {
      box-shadow: 14px 14px 0px 9px #127369, -5px -5px 0px 8px #8aa6a3;
    }
  }
  `;
  setTimeout(() => {
    w = false;
    ss = `
    <div class="chaAtr" id="chaAtr" onclick="Goback()">
    <img src="./assets/ante.png" alt="anterior" class="anterioro" id="anterioro">
    </div>
    ${arr[current]}
    <div class="chaAtr" id="chaAtr" onclick="Gofor()">
    <img src="./assets/Prox.png" alt="proximo" class="prox" id="prox">
    </div>
    `;
    document.getElementById("contPort").innerHTML = `
    <br>
    <br>
    <div class="PortTit" id="PortTit"></div>
    <br>
    <div id="Portafol" class="Portafol">
    </div>
    <br>
    <h3 id="credit" class="credit"> </h3>
    `;
    document.getElementById("PortTit").innerHTML = "<h1>Portafolio</h1>";
    document.getElementById("credit").innerHTML = "Autor de flechas: <a href='https://www.flaticon.es/iconos-gratis/flecha' title='flecha iconos' style='text-decoration: none;'>Flecha iconos creados por alta-icon - Flaticon</a>";
    document.getElementById("Portafol").innerHTML = ss;
    document.getElementById("lenguajes").innerHTML = `<h1 class="Tec" id="Tec">TecnologΓ­as Usadas</h1>
    <br>
    <br>
      <div class="ContTeck" id="ContTeck">
      <img src="./assets/HTML5.png" alt="HTML Logo" class="HTLM" id="HTML" style="height: 100px; width: 100px;">
      <img src="./assets/CSS3.png" alt="CSS3 Logo" class="CSS" id="CSS" style="height: 100px; width: 100px;">
      <img src="./assets/JS.png" alt="JAvaScript Logo" class="JS" id="JS" style="height: 100px; width: 100px;">
      <img src="./assets/bots.png" alt="Bots Logo" class="Botstrap" id="Botstrap" style="height: 100px; width: 100px;">
      <img src="./assets/nodejs.png" alt="NodeJS Logo" class="nodejs" id="nodejs" style="height: 100px; width: 100px;">
      <img src="./assets/git-logo.png" alt="Git Logo" class="git" id="git" style="height: 100px; width: 100px;">
      <img src="./assets/Python.png" alt="Python Logo" class="Py" id="Py" style="height: 100px; width: 100px;">
      <img src="./assets/flask-logo.png" alt="Flask Logo" class="Flask" id="Flask" style="height: 100px; width: 100px;">
      </div>
    `;
  }, 3000);
};

const yoHMO = () => {
  let wi = 0;
  if (screen.width < 969) {
    wi = 380;
  } else {
    wi = 400;
  }

  if (!w) {
    document.getElementById("style").innerHTML = ` 
    .WebDev {
      margin: 30px;
      color: white;
      font-family: "Fredoka";
      font-size: 30px;
      text-align: center;
      border-bottom: 10px solid #127369;
      width: 310px;
      transition: width 2s, font-size 2s;
    }
    .yoBW {
      margin: 30px;
      width: ${wi}px;
      height: 600px;
      border-radius: 10px;
      box-shadow: 14px 14px 0px 9px #127369, -5px -5px 0px 8px #8aa6a3;
      transition: box-shadow 2s;
    }
    .yoBW:hover{
      box-shadow: 14px 14px 0px 13px #127369, -6px -6px 0px 12px #8aa6a3;
    }
    `;
    w = true;
  } else {
    console.log("aun no, o ya paso");
  }
};

//FUNCIONES PARA CAMBIAR DE PROYECTO EN CARRETE
const Goback = () => {
  current -= 1;
  if (current < 0) {
    current = 5;
    ss = `
    <div class="chaAtr" id="chaAtr" onclick="Goback()">
    <img src="./assets/ante.png" alt="anterior" class="anterioro" id="anterioro">
    </div>
    ${arr[current]}
    <div class="chaAtr" id="chaAtr" onclick="Gofor()">
    <img src="./assets/Prox.png" alt="proximo" class="prox" id="prox">
    </div>
    `;
  } else {
    ss = `
    <div class="chaAtr" id="chaAtr" onclick="Goback()">
    <img src="./assets/ante.png" alt="anterior" class="anterioro" id="anterioro">
    </div>
    ${arr[current]}
    <div class="chaAtr" id="chaAtr" onclick="Gofor()">
    <img src="./assets/Prox.png" alt="proximo" class="prox" id="prox">
    </div>
    `;
  }
  document.getElementById("Portafol").innerHTML = ss;
};
const Gofor = () => {
  current += 1;
  if (current > 5) {
    current = 0;
    ss = `
    <div class="chaAtr" id="chaAtr" onclick="Goback()">
    <img src="./assets/ante.png" alt="anterior" class="anterioro" id="anterioro">
    </div>
    ${arr[current]}
    <div class="chaAtr" id="chaAtr" onclick="Gofor()">
    <img src="./assets/Prox.png" alt="proximo" class="prox" id="prox">
    </div>
    `;
  } else {
    ss = `
    <div class="chaAtr" id="chaAtr" onclick="Goback()">
    <img src="./assets/ante.png" alt="anterior" class="anterioro" id="anterioro">
    </div>
    ${arr[current]}
    <div class="chaAtr" id="chaAtr" onclick="Gofor()">
    <img src="./assets/Prox.png" alt="proximo" class="prox" id="prox">
    </div>
    `;
  }
  document.getElementById("Portafol").innerHTML = ss;
};

const Contacto = () => {
  document.getElementById("contacta").innerHTML = `
    <form class="form" action="https://formspree.io/f/moqrpnkk"
    method="POST">
    <div class="form_container">
      <span class="X" onclick="SalirContacta()">&times;</span>
      <h2 class="form_title">ContΓ‘ctame</h2>
      <div class="inp" id="inp">
        <input type="text" class="form__input" placeholder="Nombre:" name="name">
        <input type="email" class="form__input" placeholder="Email:" name="email">
        <textarea class="form__input form__input--message" placeholder="Mensaje:" name="message"></textarea>
        <input type="submit" value="Enviar" class="form__cta">
      </div>
      </div>
    </form>
  `;
  document.getElementById("contacta").setAttribute(
    "style",
    `
  z-index: 8;
  `
  );
};

const SalirContacta = () => {
  document.getElementById("contacta").setAttribute(
    "style",
    `
  z-index: -1;
  `
  );
};
