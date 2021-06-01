'use strict';

let formEl = document.getElementById('form');
let tableEl =document.getElementById('table');
let submitEl=document.getElementById('submit');

let imgArray = ['burger.jpg','pizza.jpg','shawarma.jpg'];

let foodArry=[];
function Foodlover(customerName,FoodType,img,foodprice){
  this.customerName=customerName ;
  this.FoodType = FoodType;
  this.foodprice = foodprice;
  this.img= 'img/' + img;
  foodArry.push(this);
  settingItems();

}

function randomNum (max , min){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let headerArray = ['Order Image','Order Details'];
let headerEl =document.createElement('tr');


function headerRow(){

  tableEl.appendChild(headerEl);
  for (let i = 0; i < headerArray.length; i++) {
    let header1 =document.createElement('td');
    headerEl.appendChild(header1);
    header1.textContent = headerArray[i];
  }
}


headerRow();
let bodyRow= document.createElement('tbody');
  tableEl.appendChild(bodyRow);

  function render(){
    bodyRow.textContent ='';
  for (let i = 0; i < foodArry.length; i++) {
    let tableROW=document.createElement('tr');
    bodyRow.appendChild(tableROW);

  let customer =document.createElement('td');
  bodyRow.appendChild(customer);


  let typeEl =document.createElement('td');
  bodyRow.appendChild(typeEl);

let pEL=document.createElement('p');
typeEl.appendChild(pEL);
pEL.textContent=`customer Name : ${foodArry[i].customerName}`;

let pEl1=document.createElement('p');
typeEl.appendChild(pEl1);
pEl1.textContent=`Food Type: ${foodArry[i].FoodType}`;

let pEl2=document.createElement('p');
typeEl.appendChild(pEl2);
pEl2.textContent=`Food Price: ${foodArry[i].foodprice}`;

  let imgEl =document.createElement('img');
  customer.appendChild(imgEl);
  imgEl.setAttribute('src',foodArry[i].img);

  }


}

formEl.addEventListener('submit',handlesubmit);

function handlesubmit(event){
  event.preventDefault();

  let customerName =event.target.customerName.value;
  let FoodType =event.target.FoodType.value;
  let foodprice = randomNum(20,80);
 let img;
  if(FoodType=='shawarma'){
      img =imgArray[2];
  }else if(FoodType=='burger'){
      img=imgArray[1];
  }else if(FoodType=='pizza'){
      img=imgArray[0];
  }
  
  new Foodlover(customerName,FoodType,img,foodprice);
  render();
}

function settingItems(){
  let data =JSON.stringify(foodArry);
  localStorage.setItem('foodArry',data);
}
function gettingItems(){
  let getData=localStorage.getItem('foodArry');
  let normalObj =JSON.parse(getData);
  if (normalObj!== null){
    foodArry=normalObj;
  }
  render();
}
gettingItems();
