const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate')

console.log(rateEl);

function calculate(){
   const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;


    fetch(`https://api.exchangeratesapi.io/latest?symbols=${currency_one},${currency_two}`)
    .then( res => res.json())
    .then( data=>{
       const rate = data.rates[currency_two];
       rateEl.innerText= `1 ${currency_one} = ${rate} ${currency_two}`
       amount_two.value = (amountEl_one.value*rate).toFixed(2);
       console.log(rate);
    })
}

//Evenlistener
currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amount_two.addEventListener('input',calculate)

calculate();