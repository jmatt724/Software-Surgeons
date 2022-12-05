export const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
export const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const yearRange = (currentYear) => { 
    let range = []
    for(let i = currentYear-10; i<=currentYear+10; i++){
        range.push(i)
    }
    return range
}