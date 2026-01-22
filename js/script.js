let currentState = "categories"; 

const container = document.getElementById("jobs");

if (container) {
  jobs.forEach(job => {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${job.name}</h3>
      <strong>AI tasks:</strong>
      <ul>${job.aiTasks.map(t => `<li>${t}</li>`).join("")}</ul>
      <strong>Human tasks:</strong>
      <ul>${job.humanTasks.map(t => `<li>${t}</li>`).join("")}</ul>
      <p><strong>Impact level:</strong> ${job.impact}</p>
    `;
    container.appendChild(div);
  });
}

function showCategories() {
  currentState = "categories";
  const optionsContainer = document.getElementById("optionsContainer");
  const categories = Object.keys(jobCategories);
  
  optionsContainer.innerHTML = "";
  categories.forEach(category => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = category;
    button.onclick = () => showJobs(category);
    optionsContainer.appendChild(button);
  });
}

function showJobs(category) {
  currentState = "jobs";
  const optionsContainer = document.getElementById("optionsContainer");
  const chatMessages = document.getElementById("chatMessages");
  
  
  const botMessage = document.createElement("div");
  botMessage.className = "message bot-message";
  botMessage.innerHTML = `<p>Great! You selected <strong>${category}</strong>. Which job would you like to know about?</p>`;
  chatMessages.appendChild(botMessage);
  
  
  optionsContainer.innerHTML = "";
  jobCategories[category].forEach(job => {
    const button = document.createElement("button");
    button.className = "option-button";
    button.textContent = job.name;
    button.onclick = () => showJobExplanation(job.name, job.explanation);
    optionsContainer.appendChild(button);
  });
  

  const backButton = document.createElement("button");
  backButton.className = "option-button back-button";
  backButton.textContent = "← Back";
  backButton.onclick = () => {
    currentState = "categories";
    chatMessages.innerHTML = '<div class="message bot-message"><p>Hello! What can I help you with today?</p></div>';
    showCategories();
  };
  optionsContainer.appendChild(backButton);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showJobExplanation(jobName, explanation) {
  currentState = "answer";
  const optionsContainer = document.getElementById("optionsContainer");
  const chatMessages = document.getElementById("chatMessages");
  
  
  const userMessage = document.createElement("div");
  userMessage.className = "message user-message";
  userMessage.innerHTML = `<p><strong>${jobName}</strong></p>`;
  chatMessages.appendChild(userMessage);
  
  
  const botMessage = document.createElement("div");
  botMessage.className = "message bot-message";
  botMessage.innerHTML = `<p>${explanation}</p>`;
  chatMessages.appendChild(botMessage);
  

  optionsContainer.innerHTML = "";
  
  const anotherButton = document.createElement("button");
  anotherButton.className = "option-button";
  anotherButton.textContent = "Ask About Another Job";
  anotherButton.onclick = () => {
    chatMessages.innerHTML = '<div class="message bot-message"><p>Hello! What would you like to know next?</p></div>';
    showCategories();
  };
  optionsContainer.appendChild(anotherButton);
  
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.addEventListener("DOMContentLoaded", function() {
  showCategories();
});
