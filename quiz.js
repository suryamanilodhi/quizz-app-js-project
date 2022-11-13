const questions = [
  {
    que: "which  of the following is  a markup language?",
    a: "HTML",
    b: "CSS",
    c: "javascript",
    d: "bootstrap",
    correct: "a",
  },
  {
    que: "in  which year was javascript launched?",
    a: "1994",
    b: "1996",
    c: "1995",
    d: "none of the above",
    correct: "c",
  },
  {
    que: "what does css stand for?",
    a: "hyper text markup language",
    b: "Cascading  style sheet",
    c: "javascript",
    d: "bootstrap",
    correct: "b",
  },
];

let index = 0;
let total=questions.length;
let Right=0,
  Wrong=0;
const quebox = document.getElementById("quebox");
const optioninputs = document.querySelectorAll(".options");
const loadquestion = () => { 
    if(index===total){
     return endquiz()
    }
     reset()
  const data = questions[index];
  console.log(data);
  quebox.innerText = `${index + 1}) ${data.que}`;
  optioninputs[0].nextElementSibling.innerText = data.a;
  optioninputs[1].nextElementSibling.innerText = data.b;
  optioninputs[2].nextElementSibling.innerText = data.c;
  optioninputs[3].nextElementSibling.innerText = data.d;
};

const submitquiz = () => {
    const data = questions[index];
  const ans = getAnswer()
  if(ans===data.correct){
    Right++;
  }else{
    Wrong++;
  }
  index++;
  loadquestion();
  return;
};
const getAnswer = () => {
  let answer;
  optioninputs.forEach((input) => {
    if (input.checked) {
      answer=input.value;
      
    }
  });
  return answer;
}; 

const reset=()=>{
    optioninputs.forEach(
        (input)=>{
            input.checked=false;
    }
    )
}
const endquiz=()=>{
document.getElementById("box").innerHTML=`
  <h3>thankyou for playing</h3>
  <h2>${Right}/${total} are correct</h2>
`
}

loadquestion();
