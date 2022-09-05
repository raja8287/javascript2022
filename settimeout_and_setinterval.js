//arrow functions
sum=(a,b)=>{
    return a+b;
}
//settimeout and setinterval
loginkro=()=>{
    console.log("i am loging")
}
//setTimeout(loginkro,2000);//settiemout(function name,time in milisecond)
clr=setInterval(loginkro,200);//go on till clearing the interval using clearinterval
clearInterval(clr); 