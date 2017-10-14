let min = 0, max = 10, input = 0, i = 0, j = 0, k_times = 0;
let a = [0], b=[0];
let btn1 = document.getElementsByTagName("button")[0];

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn1.addEventListener('click', function( event ){
    k_times = document.getElementsByTagName("input")[0].value;

    for(i=0; i<max; i++){
        a[i] = getRandomInt(min, max);
        document.getElementsByTagName("p")[0].innerHTML += a[i] + ", ";
    }

    for(i=0; i<3; i++){
        for(j=0; j<max; j++){
            if(j === max-1){
                b[0] = a[j];
            }
            else
            {
                b[j+1] = a[j];
            }
        }
        a = b.slice();
    }

    document.getElementsByTagName("p")[1].innerHTML =  "a = " + a;
    document.getElementsByTagName("p")[1].innerHTML += "</br>b = " + b;
});