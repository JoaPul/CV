const HMI = () => {
  document.getElementById("style").innerHTML = `
    .header {
        border: 8px solid #4C5958;
        background-color: #8AA6A3;
      }
      .header .yo {
        border: 8px solid #4C5958;
      }
      .nombre {
        color: #4C5958;
      }
    `;
};
const HMO = () => {
  document.getElementById("style").innerHTML = `
    .header {
        border: 8px solid white;
      }
      .header .yo {
        border: 8px solid white;
      }
      .nombre {
        color: white;
      }
    `;
};
