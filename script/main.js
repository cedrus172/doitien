function convert() {
    let amount = parseFloat(document.getElementById('amountTxt').value);
    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;
    let result = document.getElementById('result');
    let toCurValue = 0;
    switch (toCurrency) {
        case "vnd":
            toCurValue = 1;
            break;
        case "usd":
            toCurValue = 23;
            break;
    }
    result.innerText = amount * toCurValue;
}