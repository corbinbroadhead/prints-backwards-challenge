const printsDigits = (num) => {
    let reverseNum = 0;
    while (num > 0) {
        reverseNum = (reverseNum * 10) + (num % 10);
        console.log(reverseNum);
        num = Math.floor(num / 10);
        console.log(num);
    }
    return reverseNum;
}
console.log(printsDigits(917));
