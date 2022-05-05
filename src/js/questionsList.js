window.questionsList = [
  {
    id: 1,
    questionText: "Qual è il significato dell'acronimo HTML?",
    options: [
      { text: "Hyper Tag Markup Language", answer: false },
      { text: "Hyperlinks Text Mark Language", answer: false },
      { text: "Hyper Text Markup Language", answer: true },
      { text: "Hyperlinking Text Marking Language", answer: false },
    ],
    type: 'single',
  },
  {
    id: 2,
    questionText: "Scegli il corretto tag HTML per inserire il carattere più grande",
    options: [
      { text: "<Heading>", answer: false },
      { text: "<head>", answer: false },
      { text: "<h6>", answer: false },
      { text: "<h1>", answer: true },
    ],
    type: 'single',
  },
  {
    id: 3,
    questionText: "Seleziona il corretto tag HTML per trasformare il testo in grassetto",
    options: [
      { text: "Bo", answer: false },
      { text: "BB", answer: false },
      { text: "B", answer: false },
      { text: "Bold", answer: true },
    ],
    type: 'single',
  },
  {
    id: 4,
    questionText: "Qual è la corretta sintassi CSS?",
    options: [
      { text: "Body {color: black}", answer: true },
      { text: "{Body; color: black}", answer: false },
      { text: "{Body: color=black}", answer: false },
      { text: "Body: color=black", answer: false },
    ],
    type: 'single',
  },
  {
    id: 5,
    questionText: "Qual è il corretto formato CSS per allineare il testo al centro?",
    options: [
      { text: "Text-align: center", answer: true },
      { text: "Font-align: center", answer: false },
      { text: "Text: align-center", answer: false },
      { text: "Font: align-center", answer: false },
    ],
  type: 'single',
  },
  {
    id: 6,
    questionText: "Qual è il significato dell'acronimo CSS?",
    options: [
      { text: "Computing Style Sheet", answer: false },
      { text: "Creative Style System", answer: false },
      { text: "Cascading Style Sheet", answer: true },
      { text: "Creative Styling Sheet", answer: false },
    ],
    type: 'single',
  },
  {
    id: 7,
    questionText: "In quale parte del file HTML bisogna inserire il file CSS?",
    options: [
      { text: "Prima di qualsiasi codice HTML", answer: false },
      { text: "All'interno della sezione <head>", answer: true },
      { text: "Dopo il codice HTML", answer: false },
      { text: "Dentro la sezione <body>", answer: false },
    ],
    type: 'single',
  },
  {
    id: 8,
    questionText: "Quali sono le due proprietà flex per centrare un elemento?(seleziona 2 risposte)",
    options: [
      { text: "Justify-content: center;", answer: true },
      { text: "Align-element: center;", answer: false },
      { text: "Align-items: center;", answer: true },
      { text: "Justify-element: center;", answer: false },
    ],
    type: "multiple",
  },
   {
    id: 9,
    questionText: "Individua i metodi Javascript (seleziona 2 risposte)",
    options: [
      { text: "setInterval()", answer: true },
      { text: "randomArray()", answer: false },
      { text: "removeAttribute()", answer: true },
      { text: "setTime()", answer: false },
    ],
    type: "multiple",   
  },
    {
    id: 10,
    questionText: "Selezioni i valori 'falsy' (seleziona 2 risposte)",
    options: [
      { text: "undefined", answer: true },
      { text: "Num", answer: false },
      { text: "Null", answer: true },
      { text: "&", answer: false },
    ],
    type: "multiple", 
  },
];
