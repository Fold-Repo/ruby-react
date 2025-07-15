export const formatDigits = (num: number): [string, string] => {
    const str = num.toString().padStart(2, '0');
    return [str[0], str[1]];
}