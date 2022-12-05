export const calcBalance = (list) => {
    const initialValue = 0
    const sumAmounts = list.reduce(
        (previousValue, currentValue) => previousValue + (parseFloat(currentValue.amount)),
        initialValue
    );
    return sumAmounts.toFixed(2)
}

export const calcDigitalWallet = (cards) => {
    let amount = '0.00'
    cards.forEach((card) => {
        if(card.digitalWallet){
            amount = card.amount
        }
    })
    return parseFloat(amount).toFixed(2)
}