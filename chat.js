function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const chatWindow = document.getElementById('chatWindow');

  if (chatInput.value.trim() === '') {
      alert('メッセージを入力してください。');
      return;
  }

  const messageDiv = document.createElement('div');
  messageDiv.textContent = chatInput.value;
  chatWindow.appendChild(messageDiv);

  chatInput.value = '';
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
