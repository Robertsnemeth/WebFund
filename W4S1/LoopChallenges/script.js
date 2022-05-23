// 1.Print odds 1-20

for(i=1;i<=20;i++) {
    if(i % 2 ==1) {
        console.log(i)
    } 
}

// 2.Decrease multiples of 3

for(i=100;i>0;i--) {
    if(i % 3 == 0) {
        console.log(i)
    }
}

// 3.Print the sequence

for(i=4;i>=-3.5;i-=1.5) {
    console.log(i)
}

// 4.Sigma

var sum = 0;
for(var i=1; i<=100; i++) {
        sum += i; 
        console.log(sum);
    }

// 5.Factorial

var num = 1;
for(var i=1;i<=12;i++) {
    num *= i;
    console.log(num);
}

