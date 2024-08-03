let select = document.querySelectorAll('#Currency');
let input_value = document.getElementById('input-value');
let output_value = document.getElementById('output-value');

fetch('https://api.frankfurter.app/currencies')
    .then(res => res.json())
    .then(msg => DisplayCurrency(msg))

function DisplayCurrency(msg) {
    const curr = Object.entries(msg);

    for (i = 0; i < curr.length; i++) {
        let value = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += value;
        select[1].innerHTML += value;
    }
}


let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const curr1 = select[0].value;
    const curr2 = select[1].value;
    const input = input_value.value;
    const div0=document.getElementById("show");
    
   
    if (curr1 == curr2) {
        div0.innerHTML="";
        const showbox=document.createElement('p');
        showbox.classList.add('error');
        showbox.textContent="enter a different currency";
        div0.appendChild(showbox);
        div0.classList.add('div1');
        
    }
    else if(input == ""){
        div0.innerHTML="";
        const showbox1=document.createElement('p');
        showbox1.classList.add('error');
        showbox1.textContent="enter a number";
        div0.appendChild(showbox1);
        div0.classList.add('div1');
    }

    else {
        div0.innerHTML="";
        cur(curr1, curr2, input);
    }

    function cur(curr1, curr2, input) {
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/latest?amount=${input}&from=${curr1}&to=${curr2}`)
            .then(resp => resp.json())
            .then((data) => {
                let ans=Object.entries(data.rates);
                output_value.value=ans[0][1];
            });
    }
});















