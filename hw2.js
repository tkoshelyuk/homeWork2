//1
function ifWeAreFull (hamburger, potatoFree){
    if(hamburger >= 4 && potatoFree >= 1)
    {
        return 'Ми поїли';
    }
    else {
        return 'Йдемо в інше місце';
    }
}

console.log(ifWeAreFull(1,2));

//2
function isPriceInRange(price){
    if(price >= 1000 && price <= 1900)
    {
        return 'Price is in range'
    } else {
        return 'Price is not in range'
    }
}

console.log(isPriceInRange(1005));

//3
function isPriceGoodInRange(price)
{
    if(!(price >= 1000 && price <= 1900))
    {
        return 'Price is in range';
    } else {
        return 'Price is not in range';
    }
}

function isPriceGoodInRange2(price)
{
    if(price < 1000 || price > 1900)
    {
        return 'Price is in range';
    } else {
        return 'Price is not in range';
    }
}

console.log(isPriceGoodInRange(1005));
console.log(isPriceGoodInRange2(1005));


//4
function printSeason(seas){
    if (seas===1) {
        return 'Winter';
    } else if(seas===2) {
        return 'Spring';
    } else if (seas===3) {
        return 'Summer';
    } else if (seas===4) {
        return 'Autumn';
    } else {
        return 'Not a season';
    }
}

console.log(printSeason(13));

//5
function findMedNumber(a, b, c){
    if(a > b && a < c || a > c && a < b) {
        return a;
    } else if(b > a && b < c || b > c && b < a) {
        return b;
    } else {
        return c;
    }
}

console.log(`${findMedNumber(6,4,5)} is middle value`);


//6
function printWeekDay (dayNum)
{
    switch(dayNum)
    {
        case 1:
            return 'Monday';

        case 2:
            return 'Tuesday';

        case 3:
            return 'Wednesday';

        case 4:
            return 'Thurthday';

        case 5:
            return 'Friday';

        case 6:
            return 'Saturday';

        case 7:
            return 'Sunday';

        default:
            return 'Not a day';
    }
}

console.log(printWeekDay(7));

//7  "+", "-", "*", "/"
function calculations (mathSym, oneParam, secParam) {
    switch(mathSym){
        case '+':
            return (oneParam + secParam);

        case '-':
            return (oneParam - secParam);

        case '*':
            return (oneParam * secParam);

        case '/':
            return (oneParam / secParam);

        default:
            return 'Not operation';
    }
}

console.log(`Result is: ${calculations('*', 1, 2)}`)


//8
function makeArr () {
    let arrNum = [];
    for (let i= 1; i <= 5; i++)
    {
        arrNum.push(i);
    }
    return arrNum;
}

console.log('Array: ' + makeArr());

//9
function setEven(){
    let evenNumbers = [];
    for (let i= 1; i <= 9; i++)
    {
        if(i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
}

function setOdd(){
    let oddNumbers = [];
    for (let i= 1 ; i <= 9 ; i++)
    {
        if(i % 2 !== 0){
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}

console.log(`Even: ${setEven()}`);
console.log(`Odd: ${setOdd()}`);

//10
function arraySumm (array){
    let total = 0;

    for (let i=0; i < array.length; i++)
    {
        total = total + array[i];
    }

    return total;
}
console.log(`Sum is ${arraySumm([12,7,4,5,6])}`)

//11
function arrayPrint(array){
    for(let i= 0; i < array.length; i++)
    {
        for(let j= 0;j < array[i].length; j++)
        {
            console.log(array[i][j]);
        }
    }
}

arrayPrint([ [1, 2], [3, 4], [5, 6] ]);

//12
//12-a
function multiplyArrayValues(array){
    let numResult = 1;
    for(let i= 0; i < array.length; i++)
    {
        numResult = numResult*array[i];
    }
    return numResult;
}

console.log(`Result is: ${multiplyArrayValues([[1], [2], [3]])}`);

//12-b

function multiplyArrayValues2(array){
    let numResult2 = 1;

    for(let i= 0; i < array.length; i++)
    {
        for(let j= 0;j < array[i].length; j++)
        {
            numResult2 = numResult2*array[i][j];
        }
    }
    return numResult2;
}

console.log(`Result is: ${multiplyArrayValues2([[1, 2], [3, 4], [5, 6, 7]])}`);



//13
function removeVowelFromString(str){
    const regularExp = new RegExp('(.*)?[eouia](.*)');
    for(let res; (res = regularExp.exec(str));) {
        let left = res[1];
        let right = res[2];

        str = left ? left : "";
        str += right ? right : "";

    }
    return str;
}

console.log(`Result is : ${removeVowelFromString('appepl asd qwe zd xc vert rty fgf sdfsdfs df ewwwwwwaaaaa')}`);

//14
function getNumSuff(numberM){
    let strKm = numberM.toString();
    let lengKm = strKm.length;
    let last = parseInt(strKm[lengKm - 1]);

    if (last === 1) {
        return '';
    } else if (last === 2 || last === 3 || last === 4) {
        return 'и';
    } else {
        return 'ів';
    }

}
function getKmStr(numberM){
    let numberKm = numberM/1000;

    if(!Number.isInteger(numberKm)) {
        return `${numberM} метр${getNumSuff(numberM)} це ${numberKm} кілометра` ;
    }
    else {
        return `${numberM} метрів це ${numberKm} кілометр${getNumSuff(numberKm)}` ;
    }
}

console.log(getKmStr(1001));



