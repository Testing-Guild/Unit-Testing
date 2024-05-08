export function sum(a,b){
    if (typeof (b||a) !== 'number') {
        throw new TypeError('argument must be a number');
      }
    return a+b
}