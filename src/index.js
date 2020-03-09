module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }

    const strToArr = str.split('');

    for (let i = 0; i < strToArr.length; i++) {
        for (let k = 0; k < bracketsConfig.length; k++) {
            if (strToArr[i] === bracketsConfig[k][0] && strToArr[i + 1] === bracketsConfig[k][1]) {
                strToArr.splice(i, 2);
                i = -1;
            } else {
                continue;
            }
        }
    }

    return strToArr.length === 0 ? true : false
}
