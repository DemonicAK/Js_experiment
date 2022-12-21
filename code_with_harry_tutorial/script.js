//printing methds
// console.log("hello world", 4 + 5, "hello world new");
// alert('alert u r gonna hacked');
//  document.write("hello world");   //it should not be used


//it is js console  api
// console.log("hello world");
// console.warn("it is a wrning");
// console.error("it is an error");



//3. js variables
// var Sage=90;
// console.log(Sage);
// if(Sage>18){
    
//     console.log(Sage*0);
// }
// else if (Sage>13){
//     var i = 34;
//     console.log(i);
// }

function water(water){
    if(water>180)return "too much water";
    else if (90<water && water<180) return "medium amount of water";
    else return 0;
}


// water(879);


var arr=[1,2,3,4,5,6,8];
// console.log(arr);


// for(var i=0 ; i< arr.length; i++){
//     console.log(arr[i]);
// }


let j=0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}



do{
    console.log(arr[j]);while (j < arr.length) {
      console.log(arr[j]);
      j++;
    }
    j++;
}
while(j<arr.length);



let myarr = ["fan", "camera", 34, null, true];
console.log(myarr.length);