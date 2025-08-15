const letterA = document.getElementById("letterA");
const letterB = document.getElementById("letterB");
const letterC = document.getElementById("letterC");
const letterD = document.getElementById("letterD");

const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");
const d = document.querySelector(".d");



let aBoolean = false;
letterA.addEventListener("click", () => {
    aBoolean = true;
    bBoolean = false;
    cBoolean = false;
    dBoolean = false;
    console.log("A is true");
    if (aBoolean == true){
        a.classList.add("active");
        b.classList.remove("active");
        c.classList.remove("active");
        d.classList.remove("active");
    }
})

let bBoolean = false;
letterB.addEventListener("click", () => {
    
    bBoolean = false;
    bBoolean = true;
    cBoolean = false;
    dBoolean = false;
    console.log("B is true");
    if (bBoolean == true){
        a.classList.remove("active");
        b.classList.add("active");
        c.classList.remove("active");
        d.classList.remove("active");
    }
    
})

let cBoolean = false;
letterC.addEventListener("click", () => {
    
    cBoolean = false;
    bBoolean = false;
    cBoolean = true;
    dBoolean = false;
    console.log("C is true");
    if (cBoolean == true){
        a.classList.remove("active");
        b.classList.remove("active");
        c.classList.add("active");
        d.classList.remove("active");
    }
})

let dBoolean = false;
letterD.addEventListener("click", () => {
    dBoolean = false;
    bBoolean = false;
    cBoolean = false;
    dBoolean = true;
    console.log("D is true");
    if (dBoolean == true){
        a.classList.remove("active");
        b.classList.remove("active");
        c.classList.remove("active");
        d.classList.add("active");
        
    }
})

const aText = document.getElementById("letterA");
const bText = document.getElementById("letterB");
const cText = document.getElementById("letterC");
const dText = document.getElementById("letterD");
const changeQuestion = document.getElementById("changeQuestion");
const incrementCorrect = document.querySelector(".increment-correct");
const incrementWrong = document.querySelector(".increment-wrong");
const submitBtn = document.querySelector(".submit-btn")

const questionsArray = ["0", "tsk", "2. What time does my friday class start?", "3. What is my main sport?", "4. In my name, what does the L. stands for?", "5. What is my favorite fast food", "6. What is my 4 sports", "7. What is my main love languange?", "8. What is my favorite fruit", "9. What course was my forst choice", "10. What is my mother and fathers name?"];
const aChoices = ["0", "tsk", "A. 11am", "Running", "Labastida", "Burger", "Running, cycling, swimming, boxing", "Acts of service", "Orange", "Marine Transportation", "Elsie and Bryan"];
const bChoices = ["0", "tsk", "B. 8am", "Cycling", "Labastilla", "Fries", "Badminton, soccer, running, basketball", "Words of affirmation", "Frozen Green Grapes", "Aviation", "Amanda and ferdinand"];
const cChoices = ["0", "tsk", "C. 7am", "Swimming", "Labadisos", "Sisig", "Running, boxing, tennis, badminton", "Quality time", "Bannana", "Aerospace Engineering", "Elsie and Ferdinand"];
const dChoices = ["0", "tsk", "D. No class", "Boxing", "Laciones", "None of the above", "Swimming, Running, Boxing, Badminton", "Physical touch", "Apple", "Civil Engineering", "LC and Rigodon"];

let question = 1;
let correctAnswers = 0;
let wrongAnswers = 0;
let index = 2;
let max = correctAnswers + wrongAnswers;

submitBtn.addEventListener("click", () => {
    if(question == 1 && aBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 2 && cBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 3 && aBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 4 && aBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 5 && bBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 6 && dBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 7 && dBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 8 && bBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 9 && cBoolean == true){
        setTimeout(() =>{
            changeQuestion.textContent = questionsArray[index];
            aText.textContent = aChoices[index];
            bText.textContent = bChoices[index];
            cText.textContent = cChoices[index];
            dText.textContent = dChoices[index];
            question++;
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
            index++;
        }, 500)
    }
    else if(question == 10 && cBoolean == true){
        setTimeout(() =>{
            correctAnswers++;
            incrementCorrect.textContent = `Correct answers: ${correctAnswers}`
        }, 500)
    }

    else{
        switch(question){
            case 1:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 2:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 3:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 4:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 5:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 6:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 7:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 8:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 9:
                changeQuestion.textContent = questionsArray[index];
                aText.textContent = aChoices[index];
                bText.textContent = bChoices[index];
                cText.textContent = cChoices[index];
                dText.textContent = dChoices[index];
                question++;
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                index++;
                break;
            case 10: 
                wrongAnswers++;
                incrementWrong.textContent = `Wrong answers: ${wrongAnswers}`
                break;

        }
    }
    const hi = document.querySelector(".quiz-container");
    const failed = document.querySelector(".failed-the-quiz");
    const passed = document.querySelector(".passed-the-quiz");




    

    if (question == 10 && correctAnswers >= 6){
        passed.classList.add("show-passed-or-failed");
        hi.style.filter = "blur(10px)";
    }else if (question == 10 && wrongAnswers > 5){
        failed.classList.add("show-passed-or-failed");
        hi.style.filter = "blur(10px)";
    }
})