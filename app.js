let kraje = []
let num1
let num2
let correct = 0
let incorrect = 0
const btn1 = document.getElementById('button1')
const btn2 = document.getElementById('button2')
// const div1 = document.querySelector('.nazwa1')
// const div2 = document.querySelector('.nazwa2')
async function getData(){
    const res = await fetch("https://restcountries.com/v3.1/all")
    let data = await res.json()
    data.forEach(element => {
        kraje.push(element)
    });
    random()
}
getData()
async function random() {
    btn1.disabled = false
    btn2.disabled = false
    document.querySelector('.nazwa1').style.backgroundColor="gray"
    document.querySelector('.nazwa2').style.backgroundColor="gray"
    num1 = Math.floor(Math.random()*kraje.length)
    num2 = Math.floor(Math.random()*kraje.length)
    console.log(num1);
    console.log(num2);
    if(num1==num2){
        random()
    }
    const img1 = document.getElementById('flaga1')
    const img2 = document.getElementById('flaga2')
    img1.src = kraje[num1].flags.png
    img2.src = kraje[num2].flags.png
    const p1 = document.getElementById('nazwapanstwa1')
    const p2 = document.getElementById('nazwapanstwa2')
    p1.textContent = kraje[num1].name.common
    p2.textContent = kraje[num2].name.common
    console.log(kraje[num1].population);
    console.log(kraje[num2].population);
} 
function wieksze1(){
  
    if(kraje[num1].population>kraje[num2].population){
        correct++
        document.querySelector('.nazwa1').style.backgroundColor="green"
        document.querySelector('.nazwa2').style.backgroundColor="red"
        btn1.disabled = true
        btn2.disabled = true
    }
    else{
        incorrect++
        document.querySelector('.nazwa1').style.backgroundColor="red"
        document.querySelector('.nazwa2').style.backgroundColor="green"
        btn1.disabled = true
        btn2.disabled = true
        if(incorrect==5){
            alert(`koniec gry zobyłeś ${correct} punktów`)
            incorrect=0
            correct=0
            document.getElementById("poprawne").textContent = correct
            document.getElementById("niepoprawne").textContent = incorrect  
            random()
        }
        else{
            setTimeout(() => {
                random()
            }, 2000);
        }
    }
    document.getElementById("poprawne").textContent = correct
    document.getElementById("niepoprawne").textContent = incorrect
    console.log("corect",correct);
    console.log("incorrect",incorrect);
    setTimeout(() => {
        random()
    }, 2000);
}
function wieksze2(){
    if(kraje[num1].population<kraje[num2].population){
        correct++
        document.querySelector('.nazwa2').style.backgroundColor="green"
        document.querySelector('.nazwa1').style.backgroundColor="red"
        btn1.disabled = true
        btn2.disabled = true
    }
    else{
        incorrect++
        document.querySelector('.nazwa1').style.backgroundColor="green"
        document.querySelector('.nazwa2').style.backgroundColor="red"
        btn1.disabled = true
        btn2.disabled = true
        if(incorrect==5){
            alert(`koniec gry zobyłeś ${correct} punktów`)
            incorrect=0
            correct=0
            document.getElementById("poprawne").textContent = correct
            document.getElementById("niepoprawne").textContent = incorrect  
            random()
        }
        else{
            setTimeout(() => {
                random()
            }, 2000);
        }
        
    }
    document.getElementById("poprawne").textContent = correct
    document.getElementById("niepoprawne").textContent = incorrect
    setTimeout(() => {
        random()
    }, 2000);
    
    
    console.log("corect",correct);
    console.log("incorrect",incorrect);
    
   
}
