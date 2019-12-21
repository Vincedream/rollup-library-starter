import throttle from 'lodash/throttle';

const Sum = (a: number, b: number): number => {
    console.log(throttle)
    return a + b + 7;
}

export default Sum