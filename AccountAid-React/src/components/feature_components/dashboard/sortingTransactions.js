export const sortTransaction = (arr, sort) => {
    const temp = arr
    if(sort==='Date'){
        temp.sort((a, b) => {
            const [ dayA, monthA ] = parseDate(a.date)
            const [ dayB, monthB ] = parseDate(b.date)
            return dayB-dayA && monthB-monthA
        })
        return temp
    }
    else if(sort==='Category'){
        temp.sort((a, b) => {
            const categoryA = a.category.toUpperCase(); // ignore upper and lowercase
            const categoryB = b.category.toUpperCase(); // ignore upper and lowercase
            if (categoryA < categoryB) {
                return -1;
            }
            if (categoryA > categoryB) {
                return 1;
            }

            // names must be equal
            return 0;
        })
        return temp
    }
    else if(sort==='From'){
        temp.sort((a, b) => {
            const senderA = a.sender.toUpperCase(); // ignore upper and lowercase
            const senderB = b.sender.toUpperCase(); // ignore upper and lowercase
            if (senderA < senderB) {
                return 1;
            }
            if (senderA > senderB) {
                return -1;
            }

            // names must be equal
            return 0;
        })
        return temp
    }
    else if(sort==='To'){
        temp.sort((a, b) => {
            const receiverA = a.recipiant.toUpperCase(); // ignore upper and lowercase
            const receiverB = b.recipiant.toUpperCase(); // ignore upper and lowercase
            if (receiverA < receiverB) {
                return 1;
            }
            if (receiverA > receiverB) {
                return -1;
            }

            // names must be equal
            return 0;
        })
        return temp
    }
    else if(sort==='Amount'){
        temp.sort((a, b) => {
            const amountA = parseFloat(a.amount).toFixed(2)
            const amountB = parseFloat(b.amount).toFixed(2)
            return amountB-amountA
        })
        return temp
    }
    
}

const parseDate = (date) => {
    const month = date.substring(0, date.indexOf(' '))
    const day = date.substring(date.indexOf(' '), date.indexOf(','))
    return [ parseInt(day), parseInt(getMonthNumber(month)) ]
}

const getMonthNumber = (month) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months.indexOf(month)+1
}