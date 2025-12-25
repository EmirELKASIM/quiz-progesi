//Here we could have included more, but we only included 24 questions so you can test the entire site more quickly. Among these 24 questions, the system selects 12 questions for each session until all the questions are finished. Once all the questions are completed, a congratulatory message is sent. The user validates the sessions only if they answer 6 or more questions correctly
let questionsData = [
 {
  text: "Türkiye'de yüzölçümü en küçük il hangisidir?",
  answers: [
    { text: "Yalova", isCorrect: false },
    { text: "Bartın", isCorrect: false },
    { text: "Kiliss", isCorrect: true },
  ],
},
{
  text: "Dünya'da en fazla ada sayısına sahip ülke hangisidir?",
  answers: [
    { text: "Endonezya", isCorrect: false },
    { text: "İsveçra", isCorrect: false },
    { text: "İsveç", isCorrect: true },
  ],
},
{
  text: "Kuzey Yarımkürede yer alan en büyük çöl hangisidir?",
  answers: [
    { text: "Sahra Çölü", isCorrect: true },
    { text: "Gobi Çölü", isCorrect: false },
    { text: "Arabistan Çölü", isCorrect: false },
  ],
},
{
  text: "Türkiye'nin UNESCO Dünya Mirası Listesi'ne giren ilk bölgesi hangisidir?",
  answers: [
    { text: "Göreme Milli Parkı", isCorrect: true },
    { text: "Pamukkale", isCorrect: false },
    { text: "Safranbolu", isCorrect: false },
  ],
},
{
  text: "Aşağıdakilerden hangisi Türkiye'nin kültürel miraslarından biri olan 'Meddahlık' geleneğinin özelliğidir?",
  answers: [
    { text: "Tek kişilik hikâye anlatımı", isCorrect: true },
    { text: "Saz eşliğinde türkü söyleme", isCorrect: false },
    { text: "Toplu dans gösterisi", isCorrect: false },
  ],
},
{
  text: "Dünya'nın en çok ziyaret edilen müzesi hangisidir?",
  answers: [
    { text: "Louvre Müzesi", isCorrect: true },
    { text: "British Museum", isCorrect: false },
    { text: "Metropolitan Museum", isCorrect: false },
  ],
},
{
  text: "FIFA Dünya Kupası'nı en fazla kazanan ülke hangisidir?",
  answers: [
    { text: "İtalya", isCorrect: false },
    { text: "Brezilya", isCorrect: true },
    { text: "Arjantin", isCorrect: false },
  ],
},
{
  text: "NBA tarihinde en çok MVP ödülü kazanan oyuncu kimdir?",
  answers: [
    { text: "Michael Jordan", isCorrect: false },
    { text: "Lebron James", isCorrect: false },
    { text: "Kareem Abdul-Jabbar", isCorrect: true },
  ],
},
{
  text: "Türkiye'nin en eski teknik üniversitesi hangisidir?",
  answers: [
    { text: "İstanbul Teknik Üniversitesi", isCorrect: true },
    { text: "ODTÜ", isCorrect: false },
    { text: "Boğaziçi Üniversitesi", isCorrect: false },
  ],
},
{
  text: "Dünya'da QS sıralamasında genellikle Asya’dan en yüksek dereceleri alan üniversite hangisidir?",
  answers: [
    { text: "Tokyo Üniversitesi", isCorrect: false },
    { text: "Tsinghua Üniversitesi", isCorrect: true },
    { text: "Seul Ulusal Üniversitesi", isCorrect: false },
  ],
},
{
  text: "Aşağıdakilerden hangisi İskandinav ülkelerinden biridir?",
  answers: [
    { text: "Hollanda", isCorrect: false },
    { text: "Norveç", isCorrect: true },
    { text: "Belçika", isCorrect: false },
  ],
},
{
  text: "Dünya'nın en uzun kıyı şeridine sahip ülkesi hangisidir?",
  answers: [
    { text: "Kanada", isCorrect: true },
    { text: "Avustralya", isCorrect: false },
    { text: "Rusya", isCorrect: false },
  ],
},
{
  text: "FIFA Dünya Kupası tarihinde en genç gol atan oyuncu kimdir?",
  answers: [
    { text: "Pelé", isCorrect: true },
    { text: "Maradona", isCorrect: false },
    { text: "Messi", isCorrect: false },
  ],
},
{
  text: "Dünya atletizm tarihinde en hızlı 100 metreyi koşan sporcu kimdir?",
  answers: [
    { text: "Usain Bolt", isCorrect: true },
    { text: "Carl Lewis", isCorrect: false },
    { text: "Justin Gatlin", isCorrect: false },
  ],
},
{
  text: "NBA'de en çok sayı rekoruna sahip oyuncu kimdir?",
  answers: [
    { text: "LeBron James", isCorrect: false },
    { text: "Kareem Abdul-Jabbar", isCorrect: false },
    { text: "Karl Malone", isCorrect: true },
  ],
},
{
  text: "Dünya'da en çok olimpiyat madalyası kazanan sporcu kimdir?",
  answers: [
    { text: "Michael Phelps", isCorrect: true },
    { text: "Larisa Latynina", isCorrect: false },
    { text: "Mark Spitz", isCorrect: false },
  ],
},
{
  text: "Tarihte ilk modern olimpiyat oyunları hangi yılda yapılmıştır?",
  answers: [
    { text: "1896", isCorrect: true },
    { text: "1900", isCorrect: false },
    { text: "1924", isCorrect: false },
  ],
},
{
  text: "Dünya'nın en çok konuşulan dili hangisidir?",
  answers: [
    { text: "İngilizce", isCorrect: false },
    { text: "Mandarin Çince", isCorrect: true },
    { text: "İspanyolca", isCorrect: false },
  ],
},
{
  text: "Dünya çapında UNESCO Dünya Mirası Listesi'ne giren ilk şehir hangisidir?",
  answers: [
    { text: "Roma", isCorrect: false },
    { text: "İstanbul", isCorrect: true },
    { text: "Paris", isCorrect: false },
  ],
},
{
  text: "Hangi ülke Dünya'nın en fazla Nobel Ödülü kazanmış ülkesidir?",
  answers: [
    { text: "ABD", isCorrect: true },
    { text: "İngiltere", isCorrect: false },
    { text: "Almanya", isCorrect: false },
  ],
},
{
  text: "Tarihte ilk FIFA Dünya Kupası hangi ülkede düzenlenmiştir?",
  answers: [
    { text: "Uruguay", isCorrect: true },
    { text: "Brezilya", isCorrect: false },
    { text: "Fransa", isCorrect: false },
  ],
},
{
  text: "Dünya'da en çok ziyaret edilen şehirlerden biri olan 'Tokyo' hangi ülkededir?",
  answers: [
    { text: "Güney Kore", isCorrect: false },
    { text: "Japonya", isCorrect: true },
    { text: "Çin", isCorrect: false },
  ],
},
{
  text: "Tenis Grand Slam turnuvalarından biri olmayan hangisidir?",
  answers: [
    { text: "Wimbledon", isCorrect: false },
    { text: "Roland Garros", isCorrect: false },
    { text: "Monaco Open", isCorrect: true },
  ],
},
{
  text: "Dünya'da en çok konuşulan ikinci dil hangisidir?",
  answers: [
    { text: "İspanyolca", isCorrect: true },
    { text: "İngilizce", isCorrect: false },
    { text: "Hintçe", isCorrect: false },
  ],
},


];
let score = 0; // Global score
let answeredCount = 0; // Number of questions answered in the current session
let currentSessionQuestions = []; // Questions of the current session
let repeatSession = false; // Indicator to repeat the same questions
let completedSessions = 0; // Counter for completed sessions
let totalSessions = 2; // Total number of sessions
// HTML container for displaying Q and A
const appContainer = document.getElementById("questions-container");
const scoreContainer = document.getElementById("score-container");

// Variables for the modal
const customAlert = document.getElementById("custom-alert");
const alertMessage = document.getElementById("alert-message");
const replayButton = document.getElementById("replay-button");
const endButton = document.getElementById("end-button");

// Shuffle an array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Select 12 random questions
function getRandomQuestions() {
  const remainingQuestions = questionsData.filter(
    (q) => !currentSessionQuestions.some((cq) => cq.text === q.text)
  );
  shuffle(remainingQuestions);
  return remainingQuestions.slice(0, 12);
}

// Load a session of questions
function loadQuestions(retry = false) {
  if (!retry) {
    completedSessions++; // Count a new session if it's not a "replay"
  }

  // Reset variables for a new session
  score = 0; // Reset the score to zero at the start of each game
  answeredCount = 0; // Reset the answer count

  // Update the questions
  appContainer.innerHTML = ""; // Reset the container
  if (retry && currentSessionQuestions.length > 0) {
    alertMessage.textContent =
      "You have another chance with the same questions 😊!";
  } else {
    currentSessionQuestions = getRandomQuestions();
    alertMessage.textContent = "";
  }

  // Update the score display
  scoreContainer.innerHTML = `Score: ${score} `;

  // Display the questions
  currentSessionQuestions.forEach((questionData) => {
    let question = new Question({
      text: questionData.text,
      answers: questionData.answers,
    });
    appContainer.appendChild(question.create());
  });
}

// Handling the answers
document.addEventListener("question-answered", ({ detail }) => {
  const { question, answer } = detail;

  // Check if the answer is correct
  if (answer?.isCorrect) {
    score++;
  }
  answeredCount++;

  // Check if all the questions in the session have been answered
  if (answeredCount === currentSessionQuestions.length) {
    evaluatePerformance();
  }

  // Update the score display
  scoreContainer.innerHTML = `Score: ${score} `;
});

// Evaluate the user's performance
function evaluatePerformance() {
  const correctAnswers = score; // The score represents the number of correct answers in the session

  if (correctAnswers >= 6) {
    if (completedSessions === totalSessions) {
      // Display final congratulations after the last session
      displayFinalCongratulations();
    } else {
      // Success: Offer to continue or finish
      alertMessage.textContent = `🎉 Tebrikler! 12 sorudan ${correctAnswers} soruyu doğru yanıtladınız. Yeni sorularla devam etmek ister misiniz yoksa bitirmek mi istersiniz?`;
      replayButton.textContent = "Devam Et";
      repeatSession = false; // Load new questions

      customAlert.classList.add("show");
    }
  } else {
    // Failure: Offer to replay or finish
    alertMessage.textContent = `😕 Maalesef 12 sorudan yalnızca ${correctAnswers} doğru yaptınız. Aynı sorularla tekrar denemek ister misiniz yoksa bitirmek mi istersiniz?`;
    replayButton.textContent = "Tekrar Oyna";
    repeatSession = true; // Repeat the same questions

    customAlert.classList.add("show");
  }
}

// Display final congratulations
function displayFinalCongratulations() {
  appContainer.innerHTML = `
<div class="final-congratulations">
      <h1>🎉 Tebrikler 🎉</h1>
      <p>Tüm oturumları harika bir şekilde tamamladınız! Olağanüstü performansınız için tebrikler.</p>
      <p>Öğrenmeye ve gelişmeye devam edin. Doğru yoldasınız!</p>
      <button onclick="endQuiz()">Bitir</button> 
</div>

  `;
}

// End the quiz
function endQuiz() {
  alert("Oynadığınız için teşekkürler, tekrar görüşmek üzere 😊!");
  location.reload(); // Reload the page to reset
}

// Modal button actions
replayButton.onclick = () => {
  customAlert.classList.remove("show");
  loadQuestions(repeatSession); // Reload the questions (new or repeated)
};

endButton.onclick = () => {
  customAlert.classList.remove("show");
  alert("Oynadığınız için teşekkürler, tekrar görüşmek üzere 😊!");
};

// Initialize the quiz
loadQuestions();