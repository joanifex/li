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

function drawNode(node) {
  return `
    <li class="node">
      <div class="node__data">${node}</div>
      <div class="node__next">x</div>
    </li>
  `;
}

function drawPointer() {
  return `
    <svg class="pointer" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="9" refY="5"
          markerWidth="10"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      <line
        x1="100%" y1="0%" x2="0%" y2="95%"
        stroke="black"
        stroke-width="2"
        marker-end="url(#arrow)"
      />
    </svg>
  `;
}

function drawList() {
  const nodes = [];
  traverse(list, data => nodes.push(data));
  linkedList.innerHTML = `
    <ul class="list">
      ${nodes.map(node => drawNode(node)).join(drawPointer())}
    </ul>
  `;
}
