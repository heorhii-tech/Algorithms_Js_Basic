//ex1.7
//arr= [i,-i,i,] use loop for ()
//use if() in for() to check value of arr[]
// if (aar[i]<0 clg (arr[i]) - see all values < 0
// in{} if () revalue all arr[i] <0 = 0
let b = [2, -1, 4, -3];
for (let i = 0; i < b.length; i++) {
    if (b[i] < 0) {
        b[i] = 0;

    }

}
console.log(b) // x=[2,0,4,0]

//ex1.8
// X = [1,-4,0,-1
//use if() in for() to check value of x[]
//if (x[i]<0 clg (x[i]) - see all values < 0
// in{} if () revalue all x[i] <0 = 'Turing'

let c = [1, -4, 0, -1];
for (let i = 0; i < c.length; i++) {
    if (c[i] < 0) {
        c[i] = "Turing"
    }

}
console.log(c) //[ 1, 'Turing', 0, 'Turing' ]
