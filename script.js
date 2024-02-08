const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');

// btn.addEventListener('click', btnOnClick); ESTO LO QUE HACE ES QUE RECARGUE LA PAGINA Y NO PUESTRA EL RESULTADO

// function btnOnClick() {
//      const sumaInputs = input1.value + input2.value;
//      pResult.innerText = 'Resultado: ' + sumaInputs;
// }  

// PARA MOSTRAR EL RESULTADO LO QUE DEBEMOS HACER ES QUE EN HTML AL FORM LE DAMOS UN ID EJEMPLO "FORM" Y AQUI EN JS CREAMOS EL CONST Y SE HACE LO SIGUIENTE:

// form.addEventListener('submit', sumarInputValues); 

// function sumarInputValues(event) {
//      console.log({event}) esto es para verlo en el console del navegador
//      event.preventDefault();
//      const sumaInputs = input1.value + input2.value;
//      pResult.innerText = 'Resultado: ' + sumaInputs;
//}  

// HAY OTRA FORMA PARA SEGUIR ESCUCHANDO EL CLICK Y ES QUE EN HTML SE DEBE AGREGAR EN EL BUTTON UN TYPE="BUTTON"

btn.addEventListener('click', sumarInputValues); 

 function sumarInputValues(event) {
      const sumaInputs = input1.value + input2.value;
      pResult.innerText = 'Resultado: ' + sumaInputs;
 }  
