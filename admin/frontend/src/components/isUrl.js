function isURL(str) {
    try {
        new URL(str);
        return true;
    } catch {
        return false;
    }
}
export default isURL