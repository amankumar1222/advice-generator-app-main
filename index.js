console.log('aasan hai ');


let changeAdvice = document.getElementById('change')
var adviceCome = document.getElementById('advice');


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.adviceslip.com/advice')

xhr.onload = function (){
    if(this.status === 200){
        
        let json = JSON.parse(this.responseText);
        let id = json.slip.id;
        let advice = json.slip.advice;
        console.log(advice , id.length);
       let htmladvice = `
       <div class="top ">
       <span class="adId">ADVICE # ${id}</span>
       <div class="para">
         <p> "${advice}"</p>
   </div>
   </div>
  
   <div class="play">
     <img src="/images/pattern-divider-desktop.svg" alt="">
   </div>
   <div class="btn">
     <img id="change" src="/images/icon-dice.svg" alt="">
   </div>
  
       

     `   
    
     adviceCome.innerHTML = htmladvice;

  
     

    }

}

xhr.send();
this.addEventListener("click", ()=>{
    window.location.reload()
    
 })
 







/* 
1. fetch api -: throw , display text
2. speak buttons 
3. play and push 


*/