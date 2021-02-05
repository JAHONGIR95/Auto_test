let quizQuestion = document.querySelector('#quiz__question');
let quizOptions = document.querySelector('#quiz__options');

function aTagsCreator(){
    // for(i = 1; i <= 20; i++){
        let aTag = document.createElement('a');
        let image = document.createElement('img');
        aTag.setAttribute('class', 'question-area');
    
        console.log(aTag);
        quizOptions.appendChild(aTag);
        aTag.appendChild(image);
        console.log(5);
    // }
}

var quizNum = 0;
let time = setInterval(() => {
    // aTagsCreator();

    if(quizNum >= 20){
        clearInterval(time);
    } else {
        quizNum++;
    }
    console.log(quizNum);
}, 200);

