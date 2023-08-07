module.exports = function toReadable(number) {
    if (number === 0) return 'zero';

    const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const convertHundreds = (num) => num === 0 ? '' : digits[num] + ' hundred';

    const convertTens = (num) => {
        if (num < 10) {
            return digits[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            const ten = Math.floor(num / 10);
            const digit = num % 10;
            return tens[ten] + (digit !== 0 ? (' ' + digits[digit]) : '');
        }
    }

    const hundreds = Math.floor(number / 100);
    const remaining = number % 100;

    let result = convertHundreds(hundreds);
    if (remaining > 0) {
        result += ' ' + convertTens(remaining);
    }

    return result.trim();
}
