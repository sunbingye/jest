export function add(a, b) {
    return a + b;
}
export function getLength(val) {
    if (val && val.length) return val.length;
    return 'val does not have property named length';
}
