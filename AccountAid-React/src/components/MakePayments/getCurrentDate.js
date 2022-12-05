export default function getCurrentDate() {
    const date = new Date()

    const current = {
        day: date.getDate(),
        month: date.getMonth(),
        year: parseInt(date.getFullYear()),
    }

    return current
}
