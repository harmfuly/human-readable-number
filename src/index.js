module.exports = function toReadable (number) {
    if (number == 0) {
        return 'zero'
    }
    let res = 0;
    let b = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen' }

        if (number < 20) {
            return b[number];
        }

        let c = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'one hundred']

        if (number == 20) {
            return c[0];
        }

        if (number == 30) {
            return c[1];
        }

        if (number == 40) {
            return c[2];
        }

        if (number == 50) {
            return c[3];
        }

        if (number == 60) {
            return c[4];
        }

        if (number == 70) {
            return c[5];
        }

        if (number == 80) {
            return c[6];
        }

        if (number == 90) {
            return c[7];
        }

        if (number == 100) {
            return c[8];
        }

        if (number < 100) {
            res = number % 10;
            return c[Math.floor(number / 10) - 2] + ' ' + (res > 0 ? b[res] : ' '); 
        }

        if (number == 200) {
            return b[2] + ' hundred';
        }

        if (number == 300) {
            return b[3] + ' hundred';
        }

        if (number == 400) {
            return b[4] + ' hundred';
        }

        if (number == 500) {
            return b[5] + ' hundred';
        }

        if (number == 600) {
            return b[6] + ' hundred';
        }

        if (number == 700) {
            return b[7] + ' hundred';
        }

        if (number == 800) {
            return b[8] + ' hundred';
        }

        if (number == 900) {
            return b[9] + ' hundred';
        }

        if (number < 1000) {
            return b[Math.floor(number / 100)] + ' hundred ' + (number % 100 > 0 ? toReadable(number % 100) : ' ');
        }
        
                  
}



  