
const speakBtn = document.getElementById('speakBtn');
const submitBtn = document.getElementById('submitBtn');
const listenBtn = document.getElementById('listenBtn');
const userQuery = document.getElementById('userQuery');
const responseText = document.getElementById('responseText');
const langSelect = document.getElementById('language');

// 🎤 Speech to Text
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

speakBtn.addEventListener('click', () => {
  recognition.lang = langSelect.value;
  recognition.start();
});

recognition.onresult = (event) => {
  userQuery.value = event.results[0][0].transcript;
};

// 🧠 Mock Submit Button (you’ll connect backend later)
submitBtn.addEventListener('click', async () => {
  const query = userQuery.value.trim();
  if (!query) return alert("Please enter or speak a query first!");

  // Temporary dummy response until backend connects
  responseText.textContent = `Processing your query in ${langSelect.options[langSelect.selectedIndex].text}... (mock response)`;

  // Simulate delay
  setTimeout(() => {
    responseText.textContent = "This is a sample legal response. Actual response will come from the backend ML model.";
  }, 1500);
});

// 🔊 Text to Speech
listenBtn.addEventListener('click', () => {
  const msg = new SpeechSynthesisUtterance(responseText.textContent);
  msg.lang = langSelect.value;
  speechSynthesis.speak(msg);
});


