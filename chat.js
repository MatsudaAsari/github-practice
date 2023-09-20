function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatWindow = document.getElementById('chatWindow');

  const messageDiv = document.createElement('div');
  messageDiv.textContent = chatInput.value;
  chatWindow.appendChild(messageDiv);

  chatInput.value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
