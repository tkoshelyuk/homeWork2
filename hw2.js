//1
let hamburger = 4;
let potatoFree = 1;

if(hamburger >= 4 && potatoFree >= 1)
{
    console.log('Ми поїли');
}
else {
    console.log('Йдемо в інше місце');
}

//2
let price = 1500;

if(price >= 1000 && price <= 1900)
{
    console.log(price);
}

//3
let price2 = 2000;

if(!(price2 >= 1000 && price2 <= 1900))
{
    console.log(price2);
}

if(price2 < 1000 || price2 > 1900)
{
    console.log(price2);
}


//4
let season = 4;

if (season===1) {
    console.log('Winter');
} else if(season===2) {
    console.log('Spring');
} else if (season===3) {
    console.log('Summer');
} else if (season===4) {
    console.log('Autumn');
} else {
    console.log('Not a season');
}

//5
let a = 600;
let b = 40;
let c = 100;

if(a > b && a < c || a > c && a < b)
{
    console.log(a + ' is middle value');
} else if(b > a && b < c || b > c && b < a) {
    console.log(b + ' is middle value');
}
else {
    console.log(c + ' is middle value');
}


//6
let dayNum = 3;

switch(dayNum)
{
    case 1:
        console.log('Monday');
        break;

     case 2:
        console.log('Tuesday');
        break;

     case 3:
        console.log('Wednesday');
        break;

     case 4:
        console.log('Thurthday');
        break;

     case 5:
        console.log('Friday');
        break;

     case 6:
        console.log('Saturday');
        break;

     case 7:
        console.log('Sunday');
        break;

     default:
        console.log('Not a day');
        break;
}

//7  "+", "-", "*", "/"

let mathSym = '+'
let oneParam = 1
let secParam = 5

switch(mathSym){
    case '+':
        console.log('Result = ' + (oneParam + secParam));
        break;
    case '-':
        console.log('Result = ' + (oneParam - secParam));
        break;
    case '*':
        console.log('Result = ' + (oneParam * secParam));
        break;
    case '/':
        console.log('Result = ' + (oneParam / secParam));
        break;
    default:
        console.log('Not operation');
        break;
}


//8
let arrNum = [];
for (let i= 1; i <= 5; i++)
{
    arrNum.push(i);
}
console.log('Array: ' + arrNum);

//9
let evenNumbers = [];
for (let i= 1; i <= 9; i++)
{
    if(i % 2 === 0) {
        evenNumbers.push(i);
    }
}

let oddNumbers = [];
for (let i= 1 ; i <= 9 ; i++)
{
    if(i % 2 !== 0){
        oddNumbers.push(i);
    }
}

console.log('Even: ' + evenNumbers);
console.log('Odd: ' + oddNumbers);

//10
let total = 0;
let arrMy3 = [2,3,4,5,6]

for (let i=0; i < arrMy3.length; i++)
{
    total = total + arrMy3[i];
}

//11
const arr4 = [ [1, 2], [3, 4], [5, 6] ];
for(let i=0; i < arr4.length; i++)
{
    console.log(arr4[i][0]);
    console.log(arr4[i][1]);
}

//12
//12-a
const arr5 = [[1], [2], [3]]
let numResult = 1;
for(let i= 0; i < arr5.length; i++)
{
    numResult = numResult*arr5[i];
}
console.log("Result is: " + numResult);

//12-b

const arr6 = [[1, 2], [3, 4], [5, 6, 7]]
let numResult2 = 1;

for(let i= 0; i < arr6.length; i++)
{
    for(let j= 0;j < arr6[i].length; j++)
    {
        numResult2 = numResult2*arr6[i][j];
    }
}
console.log("Result is: " + numResult2);



//13
let str = 'appepl asd qwe zd xc vert rty fgf sdfsdfs df ewwwwwwaaaaa';
const re = new RegExp('(.*)?[eouia](.*)');

for(let res; res = re.exec(str);) {
    let left = res[1];
    let right = res[2];

    console.log('String IN: ' + str);
    console.log('Group 1: ' + left);
    console.log('Group 2: ' + right);

    str = left ? left : "";
    str += right ? right : "";
    console.log('String OUT: ' + str);
}

//14
let numberM = 15000;
let numberKm = numberM/1000;
let strKm = (numberKm).toString();
let lengKm = strKm.length;
let last = parseInt(strKm[lengKm - 1]);

if(last === 1) {
    console.log(numberKm + " кілометр");
} else if(last === 2 || last === 3 || last === 4) {
    console.log(numberKm + " кілометри");
} else {
    console.log(numberKm + " кілометрів");
}



