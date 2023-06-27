import count from './background';

let messageDiv;
messageDiv = document.getElementById('message');
messageDiv.text = 'Hello, from popup!';
messageDiv.text = `count() = ${count()}`;


