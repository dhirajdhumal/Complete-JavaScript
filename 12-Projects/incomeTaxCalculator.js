const form = document.querySelector('form');    

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const income = document.querySelector('#income')
    const amount = parseFloat(income.value);

    const result = document.querySelector('h2');
    let totalTax = 0;

    if(amount < 120000){
        totalTax = 0;
    }else if(amount<=1600000){
        totalTax = (amount - 1200000) * 0.15;
    }else if(amount<=2000000){
        totalTax = (amount - 1600000) * 0.2 + 60000;
    }else if(amount<=2400000){
        totalTax = (amount - 2000000) * 0.25 + 140000;
    }else{
        totalTax = (amount - 2400000) * 0.3 + 240000;
    }

    result.textContent = `Total Tax: ${totalTax}`;
});