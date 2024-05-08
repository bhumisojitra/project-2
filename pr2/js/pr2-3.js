let P = 50000;
let R = 2;
let N = 150;
let SI = (P * N * R) / 100;

if(8>N || N<=12){   
    if(5>N || N<=8){
        if(3>N || N<=5){ 
            if(3>N){
                console.log("no interest");
            }
            else{
                console.log("R is 3");
            }
        }
        else{
            console.log("r is 5");
        }
    }
    else{
     console.log("r is 12");
    }
}
else{
    console.log("r is 15");
}

document.querySelector('.pa').innerHTML = P;
document.querySelector('.rt').innerHTML = R;
document.querySelector('.ny').innerHTML = N;
document.querySelector('.total-interest').innerHTML = SI;