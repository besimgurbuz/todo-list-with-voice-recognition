// * List manipulation code
const todoList = document.querySelector(".list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".todo-btn");

addListBtn.addEventListener("click", function(e) {
  if (listInput.value !== "") {
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(listInput.value);
    console.log(liContent);
    newLi.appendChild(liContent);
    todoList.appendChild(newLi);
  }
  e.preventDefault();
});
// * voice recognition

const voiceBtn = document.querySelector(".voice-btn");
const listening = document.querySelector(".listen");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("Listening...");
  listening.innerHTML = "Listening...";
};
recognition.onresult = event => {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  bindToInput(transcript);
  listening.innerHTML = "";
};
voiceBtn.addEventListener("click", function() {
  recognition.start();
});

bindToInput = result => {
  listInput.value = result;
};
