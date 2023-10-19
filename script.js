let Advice = document.querySelector(".quote");
let AdviceNumber = document.querySelector("span");
document.querySelector(".rolling");
let btn = document.getElementById("dice");

btn.addEventListener('click', async function(){
    try {
        Advice.innerText = "loading...."
        AdviceNumber.innerText = "loading..."

        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        AdviceNumber.innerText = data.slip.id;
        Advice.innerText = data.slip.advice;   
    }
    catch (error) {
        
    }
})