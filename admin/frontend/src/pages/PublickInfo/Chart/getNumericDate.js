export function getNumericDate(date) {
    const numDate = new Date(date)
    const options = {
        month: 'numeric',
        day: 'numeric',
    };
    return numDate.toLocaleString('ru', options)
}