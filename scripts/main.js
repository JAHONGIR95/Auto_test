let quizQuestion = document.querySelector('#quiz__question');
let quizOptions = document.querySelector('#quiz__options');

function aTagsCreator(){
    for(i = 1; i <= 20; i++){
        let aTag = document.createElement('a');
        let image = document.createElement('img');
        aTag.setAttribute('class', 'question-area');
    
        console.log(aTag);
        quizOptions.appendChild(aTag);
        aTag.appendChild(image);
    }
}

// let time = setInterval(() => {
    aTagsCreator();
    
// }, 500);

