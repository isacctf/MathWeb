let BotaoEl = document.querySelector('#botão');
let CoeficienteaEl = document.querySelector('#coeficiente-a');
let CoeficientebEl = document.querySelector('#coeficiente-b');
let ValorxEl = document.querySelector('#valorx');
let ResultadoEl = document.querySelector('#conta');

BotaoEl.addEventListener('click', function(){

let A = parseInt(CoeficienteaEl.value);
let B = parseInt(CoeficientebEl.value);
let X = parseInt(ValorxEl.value);

ResultadoEl.value = A * X + B;

let CortayEl = document.querySelector('#corta-y');
CortayEl.value = B;


let RetaEl = document.querySelector('#reta');
let Reta = RetaEl.value;

if(CoeficienteaEl.value > 0)
{
  RetaEl.value = 'Crescente';
}
else
{
  RetaEl.value = 'Decrescente';
}

});
