// bu array barcha belgilar, ularning nomi kiritilgan
let signsArr = [{
        id: 1,
        title: `1.1 Shlagbaumli temir yo'l kesishmasi`,
        source: `../images/signs/1.gif`
    },
    {
        id: 2,
        title: `1.2 Shlagbaumsiz temir yo’l kesishmasi`,
        source: `../images/signs/2.gif`
    },
    {
        id: 3,
        title: `1.3. Diqqat "UZP"`,
        source: `../images/signs/3.gif`
    },
    {
        id: 4,
        title: `1.3.1 Bir izli temir yo’l`,
        source: `../images/signs/4.gif`
    },
    {
        id: 5,
        title: `1.3.2 Ko’p izli temir yo’l`,
        source: `../images/signs/5.gif`
    },
    {
        id: 6,
        title: `1.4.1 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
        source: `../images/signs/6.gif`
    },
    {
        id: 7,
        title: `1.4.2 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
        source: `../images/signs/7.gif`
    },
    {
        id: 8,
        title: `1.4.3 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
        source: `../images/signs/8.gif`
    },
    {
        id: 9,
        title: `1.4.4 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
        source: `../images/signs/9.gif`
    },
    {
        id: 10,
        title: `1.4.5 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
        source: `../images/signs/10.gif`
    },
    {
        id: 11,
        title: `1.4.6 Temir yo’l kesishmasining yaqinligi haqida ogohlantirish`,
        source: `../images/signs/11.gif`
    },
    {
        id: 12,
        title: `1.5 Tramvay yo’li bilan kesishuv`,
        source: `../images/signs/12.gif`
    },
    {
        id: 13,
        title: `1.6 Teng ahamiyatli yo’llar kesishuvi`,
        source: `../images/signs/13.gif`
    },
    {
        id: 14,
        title: `1.7 Aylanma harakatlanish bilan kesishuv`,
        source: `../images/signs/14.gif`
    },
    {
        id: 15,
        title: `1.8 Svetofor tartibga soladi`,
        source: `../images/signs/15.gif`
    },
    {
        id: 16,
        title: `1.9 Ko’tarma ko’prik`,
        source: `../images/signs/16.gif`
    },
    {
        id: 17,
        title: `1.10 Sohilga chiqish`,
        source: `../images/signs/17.gif`
    },
    {
        id: 18,
        title: `1.11.1 Xavfli burilish`,
        source: `../images/signs/18.gif`
    },
    {
        id: 19,
        title: `1.11.2 Xavfli burilish`,
        source: `../images/signs/19.gif`
    },
    {
        id: 20,
        title: `1.12.1 Xavfli burilishlar`,
        source: `../images/signs/20.gif`
    },
    {
        id: 21,
        title: `1.12.2 Xavfli burilishlar`,
        source: `../images/signs/21.gif`
    },
    {
        id: 22,
        title: `1.13 Tik nishablik`,
        source: `../images/signs/22.gif`
    },
    {
        id: 23,
        title: `1.14 Tik balandlik`,
        source: `../images/signs/23.gif`
    },
    {
        id: 24,
        title: `1.15 Sirpanchiq yo’l`,
        source: `../images/signs/24.gif`
    },
    {
        id: 25,
        title: `1.16 Notekis yo’l`,
        source: `../images/signs/25.gif`
    },
    {
        id: 26,
        title: `1.17 Tosh otilish xavfi`,
        source: `../images/signs/26.gif`
    },
    {
        id: 27,
        title: `1.18.1 Yo’lning torayishi`,
        source: `../images/signs/27.gif`
    },
    {
        id: 28,
        title: `1.18.2 Yo’lning torayishi`,
        source: `../images/signs/28.gif`
    },
    {
        id: 29,
        title: `1.18.2 Yo’lning torayishi`,
        source: `../images/signs/29.gif`
    },
    {
        id: 30,
        title: `1.19 Ikki tomonlama harakatlanish`,
        source: `../images/signs/30.gif`
    },
    {
        id: 31,
        title: `1.20 Piyodalar o’tish joyi`,
        source: `../images/signs/31.gif`
    },
    {
        id: 32,
        title: `1.21 Bolalar`,
        source: `../images/signs/32.gif`
    },
    {
        id: 33,
        title: `1.22 Velosiped yo’lkasi bilan kesishuv`,
        source: `../images/signs/33.gif`
    },
    {
        id: 34,
        title: `1.23 Ta’mirlash ishlari`,
        source: `../images/signs/34.gif`
    },
    {
        id: 35,
        title: `1.24 Mol haydab o’tish`,
        source: `../images/signs/35.gif`
    },
    {
        id: 36,
        title: `1.25 Yovvoyi hayvonlar`,
        source: `../images/signs/36.gif`
    },
    {
        id: 37,
        title: `1.26 Toshlar tushishi`,
        source: `../images/signs/37.gif`
    },
    {
        id: 38,
        title: `1.27 Yonlama shamol`,
        source: `../images/signs/38.gif`
    },
    {
        id: 39,
        title: `1.28 Pastlab uchuvchi samolyotlar`,
        source: `../images/signs/39.gif`
    },
    {
        id: 40,
        title: `1.29 Tonnel`,
        source: `../images/signs/40.gif`
    },
]

// tasodifiy tanlab olingan object lar uchun arraydir bu - 
let selectedArr = [];

// random funksiyasi keltirilgan bu yerda
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

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
let timeForTest = document.querySelector('#time-for-test');
// savol maydonchasi
let questionSpace = document.querySelector('#question-space');
let modal = document.querySelector('.modal');
// sahifa yuklangandagi ilk bajariladagan holat va funksiyalar bu -
// window.addEventListener('load', () => {
//     aTagsCreator(levelForTest.value);
// })

// level tanlash selecti o'zgartirilganda savollar soni uchun ochiladigan maydor ham o'zgaradigan holatdir bu -
levelForTest.addEventListener('change', (e) => aTagsCreator(e.target.value))

// start button bosilganda savollar oynasining ochilish hodisasi
let setInt = 0;
startBtn.addEventListener('click', function () {
    sectionOne.classList.remove('active');
    sectionTwo.classList.add('active');

    let gameType = parseInt(levelForTest.value)
    aTagsCreator(gameType)
    let givenTime = parseInt(timeForTest.value) * 60;

     setInt = setInterval(() => {

        timingFunction(givenTime);
          
        givenTime--;
    }, 5);
})

let modalValue = document.querySelector('#modal-value');
let timeTable = document.querySelector('#time-table');

function timingFunction(givenTime1) {
    
    if (givenTime1 == 0) {
        clearInterval(setInt)
        let buttons = document.querySelectorAll('.question-area');
        console.log(buttons);
        buttons.forEach(button => {
            button.disabled = true;
            button.style.opacity = .5;
            button.style.cursor = 'not-allowed';
            button.style.transform = 'scale(1)';
        })
        modal.classList.add('active');
        modalValue.textContent = 'Game over. Try again';
    }

    minute = Math.floor(givenTime1 / 60);
    second = givenTime1 % 60;

    if(second < 10  && second >= 0){
        timeTable.innerHTML = `0${minute} : 0${second}`;
    } else{
        timeTable.innerHTML = `0${minute} : ${second}`;
    }
    console.log(minute, second);
}



// rasm chiqadigan maydonlarni yaratadigan function bu - 
function aTagsCreator(processLength) {
    // console.log('level' + processLength);
    // bu code maydonni tozalab tashlash uchun ishlatiladi
    randomSelectingItems(processLength);
    quizOptions.textContent = '';
    let randomNumberTitle = getRandomInt(processLength);
    for (i = 1; i <= processLength; i++) {
        // let randomNumberImage = getRandomInt(processLength);

        let aTag = document.createElement('button');
        let image = document.createElement('img');
        image.setAttribute('src', `${selectedArr[i-1].source}`);
        image.setAttribute('class', 'image-area');
        aTag.setAttribute('data-image-id', selectedArr[i - 1].id)
        aTag.setAttribute('class', 'question-area');
        console.log(selectedArr)
        questionSpace.textContent = selectedArr[randomNumberTitle].title;
        questionSpace.setAttribute('data-id', selectedArr[randomNumberTitle].id)

        quizOptions.appendChild(aTag);
        aTag.appendChild(image);
    }

    let btn = document.querySelectorAll('.question-area');
    // console.log(btn);
    // let images = doc1ument.querySelectorAll('.image-area');
    btn.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.imageId == questionSpace.dataset.id) {
                button.style.opacity = '.4';
                button.style.backgroundColor = 'grey';
                button.style.cursor = 'not-allowed';
                button.style.transform = 'scale(1)';
                button.disabled = true;
                selectedArr = selectedArr.filter(el => el.id != button.dataset.imageId)
                console.log(selectedArr);

                btn.forEach(item => {
                    item.classList.remove('wrong-border');
                })

                if (selectedArr.length == 0) {
                     timingFunction(0);
                     modal.classList.add('active');
                     modalValue.textContent = 'You win the GAME! Great!';
                 }

                let randomNumberTitle = getRandomInt(selectedArr.length);
                questionSpace.textContent = selectedArr[randomNumberTitle].title;
                questionSpace.setAttribute('data-id', selectedArr[randomNumberTitle].id);

                console.log(selectedArr.length);
                
            } else {
                button.classList.add('wrong-border');

            }
        })
    })
}


function randomSelectingItems(num) {

    for (i = 1; i <= num;) {

        let randomNumber = getRandomInt(signsArr.length);
        if (!selectedArr.includes(signsArr[randomNumber])) {
            selectedArr.push(signsArr[randomNumber]);
            i++;
        }
    }
}