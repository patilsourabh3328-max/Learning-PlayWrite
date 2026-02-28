let a=1;
let b=10;
let c=10;

if(a===b && b===c ){
 console.log("triangle is equilateral-all sides are equal)");
}

else if(a===b || b===c || a===c){
console.log("isosceles (exactly two sides are equal)")
}
else {
    console.log("scalene (no sides are equal).");
}
