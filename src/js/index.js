import gsap from "gsap";
import "../css/main.scss";
import "./questionsList";


const nextBtn = document.getElementById("next-btn");
const welcomePage = document.querySelector(".container");
const mainPage = document.querySelector(".main");
const resultPage = document.getElementById("result-page");
const totalQuestion = 3;
const minPencentage = 60; // % min superamento
const minRightAnswer = Math.round(totalQuestion*minPencentage/100);
const totalTime = 11;
let attempts = 0;
let maxAttemps = 2;
let index = 0;
let questions = [];
let answered = 0;
let right = 0;
let multipleAnswer = 0;

// BOTTONE INIZIA TEST
function Start() {
  // Randomiza l'oggetto questionsList
  questions = questionsList.sort(function () {
    return 0.5 - Math.random();
  });
  
  welcomePage.classList.toggle("close");
  mainPage.classList.toggle("open");
  nextBtn.classList.toggle("open");
  printQuestion()
}
window.Start = Start;

// TIMER
function Timer() {
  let min = 0;
  let sec = 0;
  let counter = 0;

  window.timer = setInterval(function () {
    counter++;
    min = Math.floor((totalTime - counter) / 60);
    sec = totalTime - min * 60 - counter;
    $(".timerBox span").text(min + ":" + sec);

    if (counter == totalTime) {
      $('.question').prop('disabled', true);
      $(".answer").fadeTo("slow", .2);
      $("#outdated").text("Tempo scaduto!");
      $(".answer").attr("onclick", "");
      clearInterval(window.timer);
    } 
  }, 1000);
  $("#outdated").text("");
  $(".answer").fadeTo(10, .9);
};

// DOMANDE
function printQuestion() {

  //desktop only
  $(".question_heading").text(questions[index].questionText);
  $(".answer-text-desktop").eq(0).text(questions[index].options[0].text);
  $(".answer-text-desktop").eq(1).text(questions[index].options[1].text);
  $(".answer-text-desktop").eq(2).text(questions[index].options[2].text);
  $(".answer-text-desktop").eq(3).text(questions[index].options[3].text);

  //mobile only
  $(".answer-text-mobile").eq(0).text(questions[index].options[0].text);
  $(".answer-text-mobile").eq(1).text(questions[index].options[1].text);
  $(".answer-text-mobile").eq(2).text(questions[index].options[2].text);
  $(".answer-text-mobile").eq(3).text(questions[index].options[3].text);
  clearInterval(window.timer)
  Timer()
}

// SELEZIONE RISPOSTE
function onSelect(option) {
  let optionClicked = $(option).data("opt"); //data() estrapola il valore assegnato ad opt all'oggetto del DOM

  switch (questions[index].type) {
    case 'single':
      answered++;
      if (questions[index].options[optionClicked].answer == true) {
        $(option).addClass("right");
        right++;
      } else {
        $(option).addClass("wrong");

      }
      $(".answer").attr("onclick", ""); //in modo che non possa selezionare altre opzioni
      break

    case 'multiple':
      if (questions[index].options[optionClicked].answer == true) {
        multipleAnswer++
        $(option).addClass("right");
        if (multipleAnswer >= 2) {
          right++;
          $(".answer").attr("onclick", "");
          answered++;
          multipleAnswer = 0;
        }
      } else {
        $(option).addClass("wrong");
        $(".answer").attr("onclick", "");
        answered++;
        multipleAnswer = 0;
      }
      break

  }
}
window.onSelect = onSelect;

// BOTTONE NEXT
function nextQuestion() {
  if (index + 1 >= totalQuestion) {
    Result();
    return;
  }
  index++;
  $(".answer").removeClass("right");
  $(".answer").removeClass("wrong");
  $(".answer").attr("onclick", "onSelect(this)");

  printQuestion();
}
window.nextQuestion = nextQuestion;

// RISULTATO
function Result() {
  attempts++
  if (attempts >= maxAttemps) {
    $('#restart').prop('disabled', true);
    $("#restart").fadeTo("slow", .4);
    $('.no-more-attempts').text('Non è possibile effettuare ulteriori tentativi.')
  }
  $(".answered span").text(answered + "/" + totalQuestion);
  $(".attempts span").text(attempts + "/" + maxAttemps);
  $(".right-answers span").text(right);
  $(".wrong-answers span").text(totalQuestion - right);


  nextBtn.classList.toggle("open");
  resultPage.classList.toggle("open");
  mainPage.classList.toggle("open");

  if (right < minRightAnswer) {
    $(".failed").text("Ci dispiace, non hai superato la prova!");
  } else {
    $(".succeed").text("Complimenti, prova superata!")
  }
  $(".percentage span").text(Math.round(right / totalQuestion * 100));
}

// BOTTONE RIPETI
function Restart() {
  index = 0;
  answered = 0;
  right = 0;
  $(".answer").removeClass("right");
  $(".answer").removeClass("wrong");
  $(".answer").attr("onclick", "onSelect(this)");
  $(".failed").text("");
  $(".succeed").text("")

  nextBtn.classList.toggle("open");
  resultPage.classList.toggle("open");
  mainPage.classList.toggle("open");

  Start();
}
window.Restart = Restart;

// SWIPER desktop
new Swiper(".mySwiper", {

  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: false,

  pagination: {
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SWIPER mobile
new Swiper(".mySwiper2", {

  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//GSAP animazioni


let logo = gsap.timeline({
    scrollTrigger: {
        trigger: ".img",
    }
});
logo.from(".logo", { x: -200, opacity: 0, duration: 0.5 })

let welcomeH1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".welcome-text",
    }
});
welcomeH1.from(".welcome-text", { y: -200, opacity: 0, duration: 0.6 })

let welcomeIndications = gsap.timeline({
    scrollTrigger: {
        trigger: "#welcome-indications",
    }
});
welcomeIndications.from("#welcome-indications", { y: 200, opacity: 0, duration: 0.7 })



TweenMax.to('#start', 0.8, { scale: 1.1, repeat: -1, ease: Back.easeOut, yoyo: true, yoyoEase: true });
TweenMax.to('.failed', 1, { scale: 1.1, repeat: -1, ease: Back.easeOut, yoyo: true, yoyoEase: true });
TweenMax.to('.succeed', 1, { scale: 1.1, repeat: -1, ease: Back.easeOut, yoyo: true, yoyoEase: true });





