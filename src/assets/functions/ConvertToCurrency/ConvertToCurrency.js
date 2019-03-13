const convertToCurrency = (money_int) => {
    if ((typeof(money_int) !== "number" ) | isNaN(money_int)) {
        return "Nice. Your money is broken. It's NaN!";
    }

    let money_currency = money_int;
    let unitName = '';

    if (money_int > 1e3) {
        const units = ['k', 'M', 'B', 't', 'q', 'Q', 's', 'S', 'o', 'n', 'd'];

        const money_order = Math.floor(Math.log(money_int) / Math.log(1000));

        if (money_order > units.length) {
            return "In$ane amounts of moneyz!!!";
        }
        
        unitName = units[(money_order) - 1];
        
        money_currency = (money_int / (1000 ** money_order))
    }

    money_currency = "$" + money_currency.toFixed(2).toLocaleString() + unitName;

    return money_currency;
}

export default convertToCurrency;