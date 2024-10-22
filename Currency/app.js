const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn=document.querySelector('form button');
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg")


const updatExchangerate=async()=>{
  let amount=document.querySelector(".amount input");
let amval=amount.value;

if(amval===""||amval<1){
amval=0;
amount.value=0; 

}

const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

// console.log(URL);
let response =await fetch(URL);
let data =await response.json();
let rate =data[toCurr.value.toLowerCase()];
let finalamount=amval*rate
msg.innerText=`${amval} ${fromCurr.value} = ${finalamount} ${toCurr.value}`;}



for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "Selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "Selected";
    }
    select.append(newOption);}
select.addEventListener("change",(evt)=>{
    updateflag(evt.target)
})
  
}
const updateflag= (element)=>{
    let currCode=element.value;
    // console.log(currCode)
    let countryCode=countryList[currCode]
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector('img'); 
    img.src=newSrc; 

}
btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updatExchangerate();
})
window.addEventListener("load",()=>{
  updatExchangerate();
})


