export const calcBalance = (list) => {
    const initialValue = 0
    const sumAmounts = list.reduce(
        (previousValue, currentValue) => previousValue + (parseFloat(currentValue.amount)),
        initialValue
    );
    return sumAmounts.toFixed(2)
}