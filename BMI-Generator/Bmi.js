const form =document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height =parseInt(document.querySelector('#Height').value);
    const weight =parseInt(document.querySelector('#Weight').value);
    const result =(document.querySelector('#result'));
    if( height===""||height<0||isNaN(height)){
        result.innerHTML = `Please give me a valid height ${height}`;
    }
    else if(weight===""||weight<0||isNaN(weight)){
        result.innerHTML =`Please give me a valid weight${weight}`;
    }
else{
   const Bmi= (weight / ((height * height)/10000)).toFixed(2)
   console.log(Bmi)
    result.innerHTML=`<span>Your Bmi is ${Bmi}</span>`
}

});