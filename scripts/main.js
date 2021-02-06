// savol chiqadigan maydon
let quizQuestion = document.querySelector('#quiz__question');
// savollar yachaykasi bu
let quizOptions = document.querySelector('#quiz__options');
// start buttondir bu
let startBtn = document.querySelector('#start-btn');
// section 1 class bilan chaqiriladi
let sectionOne = document.querySelector('.section1');
// section 2 class bilan chaqiriladi
let sectionTwo = document.querySelector('.section2');

//
startBtn.addEventListener('click', function(){
    sectionOne.classList.remove('active');  
    sectionTwo.classList.add('active');  
})

// rasm chiqadigan maydonlarni yaratadigan function bu - 
function aTagsCreator(){
    for(i = 1; i <= 20; i++){
        let aTag = document.createElement('a');
        let image = document.createElement('img');
        aTag.setAttribute('class', 'question-area');
    
        quizOptions.appendChild(aTag);
        aTag.appendChild(image);
    }
}

aTagsCreator();
