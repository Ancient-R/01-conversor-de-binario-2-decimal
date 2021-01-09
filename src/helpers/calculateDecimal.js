export const calculateDecimal = value => {

    const arrayNumbers = value.split('').reverse();
    const arrayMultiply = [];
    for( let i = 0; i<arrayNumbers.length; i++){
        arrayMultiply.push( Math.pow(2, i) * arrayNumbers[i] );
    }

    const decimal = arrayMultiply.reduce( (a, b ) => a+b );

    return decimal;
}