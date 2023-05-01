//ex1.1
// 1. use loop for

for (let i = 0 ; i<=135; i++){
    console.log(i)
}

//ex1.2
// 1. use loop for ;
// 2. in loop use if ()
// 3. for range to even and odd number use %2===0 or 2%!==0;
// 4. 0/2 == 0;
//    1/2 == 0.5;
//    2/2 == 1;
//    3/2 == 1.5;
//    4/2== 2;
//    ...........
//    133/2 == 66.5 ;
for (let i = 0 ; i <135 ; i++){
    if (i%2!==0){
        console.log(i)
    }

}

//ex1.3
// use loop for
//clg i - see all numbers
//let sum = sum + i :
// 0 + 1 = 1 = i;
// 1 + 1 = 2 // 2 = i;
// 2 + i = 3 // 3=i
// 3 + 3 =6 // 6=i
// 4 + i = 10// 10=i
//.......................
let totalSum = 0;

for (let i = 1; i <= 135; i++) {
    console.log (i)

    totalSum += i;
    console.log( 'sum', totalSum)

}

//ex1.4
// use loop for ; use i<x.length : i go through all indexes 0f ' let x '
// clg(x[i]) for have directly indexes value 'let x '
let x = [1,4,2,12]
for (let i = 0 ; i<x.length; i++){
    console.log(x[i])
}

//ex1.5
// use loop for ()
// use if ()
// check value of y[i]>=0 ; y[i]>5-100000
// clg (y[i])
let y = [2,-5,-10,0,1,5,]
for (let i = 0 ; i<y.length; i++){



     y[i]<=0? console.log(y[i]):
         y[i]<-5? console.log(y[i]):
             y[i]<-100? console.log(y[i]):
                 y[i]>=0? console.log(y[i]):
                   y[i]>5? console.log(y[i]):
                    y[i]>100? console.log(y[i]):

                         ''
}

//ex 1.6
// arr = []
//
// creat function (); task of function return amount of idnexes arr / arr.length
//use loop fo ()
//clg function (arr)
let sum=0;
let f =  [2,1,3];
function middleCount(f){
    for(let i = 0; i<f.length;i++){
        sum+=f[i]
    }
    return sum/f.length
}
console.log(middleCount(f)) // 2
