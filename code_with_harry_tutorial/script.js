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

const diff='----------------------------';
// water(879);


var arr=[1,2,3,4,5,6,8];
// console.log(arr);


// for(var i=0 ; i< arr.length; i++){
//     if(i==2)continue;
//     console.log(arr[i]);
// }
// console.log(diff);



// let j=0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }
// console.log(diff);

// console.log(j);
// console.log(diff);






// let k=0;
// do
//     {
//       console.log(arr[k]);
//       k++;
//     }
// while(k<arr.length);


// console.log(diff);






// forEach is a builtin function
// arr.forEach(function(element, index) {
//     console.log(element, index);
// });

// console.log(diff);




//array functions
// let myarr = ["fan", "camera", 34, null, true];
// console.log(myarr);

// console.log(myarr.length);    //length of array



// myarr.pop();    //remove last element
// console.log(myarr);

// myarr.push('ak');       // it adds element at last
// console.log(myarr);


// myarr.shift();      //remove first element
// console.log(myarr);

// myarr.unshift('ak1');        //it adds element at first
// console.log(myarr);

// const newlen = myarr.unshift('ak2');        //it adds element at first
// console.log(myarr);
// console.log(newlen);


//string methods in javascript

// let mylovely="ak is a good boy";

// console.log(mylovely.length);
// console.log(mylovely.indexOf('good'));
// console.log(mylovely.lastIndexOf('good'));
// console.log(mylovely.slice(0,3));
// console.log(mylovely.replace('good','bad'));


// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getTime());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMinutes());
// console.log(mydate.getHours());


//DOM MANIPULATION

let element= document.getElementById('clickme')
let element2= document.getElementsByClassName('container')
// console.log(element2[0]);

element2[0].style.background="yellow"
// element2[1].style.background="magenta"



element2[1].classList.add("bg-primary");
element2[1].classList.add("text-highlight")
element2[1].style.fontFamily="cursive";
// console.log(element2[1].style.fontFamily);

element2[1].classList.remove("text-highlight")

// console.log(element.innerHTML);
// console.log(element2[0].innerHTML);
// console.log(element2[0].innerText);


let tn= document.getElementsByTagName('div')
// console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText="this is a created para";
tn[0].appendChild(createdElement);


createdElement = document.createElement('b');
createdElement.innerText="this is a created bolder";
tn[1].appendChild(createdElement);


//selecting using query
let sel=document.querySelector('.container')
// console.log(sel);


let sel1=document.querySelectorAll('.container')
// console.log(sel1);


//events in javascript


function clicked(){
    console.log('the button was clicked');
}
// window.onload=function(){
//     console.log('the document was loaded');
// }


// ak.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>"
//     console.log("click on container");
// });

// ak.addEventListener('mouseover',function(){
//     console.log("mouse on container");
// }
// );

// ak.addEventListener('mouseout',function(){
//     console.log("mouse out of container");
// }   
// );

// let prev=document.querySelectorAll('.container')[1].innerHTML;
// ak.addEventListener('mouseup',function(){    
//     document.querySelectorAll(".container")[1].innerHTML = prev;
//     console.log("mouse up of container");
// }   
// );
// ak.addEventListener('mousedown',function(){
//         document.querySelectorAll(".container")[1].innerHTML =
//           "<b>we have clicked</b>";
//     console.log("mouse down of container");
// }   
// );




//arrow function
function sum(a,b){
    return a+b;
}


let sum2=(a,b)=>{
    return a+b;
};


//set time out and set interval

logkaro=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>set interval fired</b>"
    console.log("i am your log");
}

// clr=setInterval(logkaro,2000);
// clearInterval(clr);  //to clear the interval


// clr=setTimeout(logkaro,2000);
// clearInterval(clr);  //to clear the interval




//javascript local storage  
// localStorage.setItem('name','ak');

// console.log(localStorage.getItem('name'))


// obj = { name: "ak", code: "14", length: 2 };
// strobj=JSON.stringify(obj);
// console.log(strobj) //it is string not a object
// console.log(typeof strobj)


// jso = JSON.parse(strobj);
// console.log(jso);
// console.log(typeof jso);


// template literals ---- backtiks

// let a=89;
// console.log(`this my number ${a}`);





react

