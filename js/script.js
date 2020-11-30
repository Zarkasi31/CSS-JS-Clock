const secondHand= document.querySelector('second-hand');

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegree =((seconds/60) * 360);
    secondHand.style.transform = 'rotate(${secondDegree}deg)';// !style kok gak kebaca
    console.log(secondDegree);  
}
setInterval(setDate, 1000);