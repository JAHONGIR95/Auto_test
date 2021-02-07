let signsArr = [
    {
        id: 1,
        title: `Shlagbaumli temir yo'l kesishmasi`,
        source: `../images/signs/1.gif`
    },

    // {
    //     id: 1,
    //     title: '',
    //     source: ''
    // },
    
    // {
    //     id: 1,
    //     title: '',
    //     source: ''
    // },
]
console.log(signsArr[0].source);

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
// testning levelini tanlash uchun select bu - 
let levelForTest = document.querySelector('#level-for-test');

// sahifa yuklangandagi ilk bajariladagan holat va funksiyalar bu -
window.addEventListener('load', ()=> {
    aTagsCreator(levelForTest.value)
})

// level tanlash selecti o'zgartirilganda savollar soni uchun ochiladigan maydor ham o'zgaradigan holatdir bu -
levelForTest.addEventListener('change', function(){
    aTagsCreator(levelForTest.value)
})
// start button bosilganda savollar oynasining ochilish hodisasi
startBtn.addEventListener('click', function(){
    sectionOne.classList.remove('active');  
    sectionTwo.classList.add('active');  
})

// rasm chiqadigan maydonlarni yaratadigan function bu - 
function aTagsCreator(processLength){
    // bu code maydonni tozalab tashlash uchun ishlatiladi
    quizOptions.textContent = '';

    for(i = 1; i <= processLength; i++){
        let aTag = document.createElement('button');
        let image = document.createElement('img');
        image.setAttribute('src', `${signsArr[0].source}`);
        image.setAttribute('class', 'image-area');
        aTag.setAttribute('class', 'question-area');
    
        quizOptions.appendChild(aTag);
        aTag.appendChild(image);
    }
}

