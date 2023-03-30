const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');
const messagesContainer = document.querySelector('.messages');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  
  if (name === '' || message === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }
  
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = '<strong>' + name + '</strong>: ' + message;
  
  messagesContainer.appendChild(messageElement);
  
  nameInput.value = '';
  messageInput.value = '';
});
