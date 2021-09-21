function convert() {
    let amount = parseFloat(document.getElementById('amountTxt').value);

    let fromCurrency = document.getElementById('fromCurrency').value;
    let toCurrency = document.getElementById('toCurrency').value;

    let result = document.getElementById('result');

    let toCurValue = 0;
    let fromCurValue = 0;

    switch (fromCurrency) { // lấy giá trị from Currency Value
        case "vnd":
            fromCurValue = 1;
            break;
        case "usd":
            fromCurValue = 23000;
            break;
    }
    
    switch (toCurrency) { // lấy giá trị to Currency Value
        case "vnd":
            toCurValue = 1;
            break;
        case "usd":
            toCurValue = 23000;
            break;
    }

    result.innerText = (amount * fromCurValue / toCurValue).toFixed(2);
       
}
