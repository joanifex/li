import './styles.css';
import './reset.css';
import LinkedList from './LinkedList';

const linkedList = document.querySelector(`#linkedList`);
const newButton = document.querySelector(`#newButton`);

let list = null;
let nextId = 1;

newButton.addEventListener('click', function() {
  if (!list) {
    list = new LinkedList(nextId);
  } else {
    list.append(nextId);
  }
  nextId++;
  drawList();
});

function traverse(list, visit) {
  if (!list) return;
  visit(list.data);
  traverse(list.next, visit);
}

function drawList() {
  const nodes = [];
  traverse(list, data => nodes.push(data));
  linkedList.innerHTML = `
  <ul class="list">
  ${nodes.map(node => `<li class="node">${node}</li>`).join('')}
  </ul>
  `;
}
