//db.larena.js

function renderNodes(nodes) {
  var html = '';
  if(nodes.length) {
    nodes.forEach(function(node) {
      html+= `<li class="note" style="border:1px solid #00ff0f;padding:1em;background-color:#f1f1f1;border-radius:8px">
        <p class="header">
          <button class="delete-note" title="Delete">Delete</button>
          <span class="date" style="border:1px solid #00ff0f;background-color:white;padding:0.2em;">${note.date}</span>
          <button class="btn btn-success listen-note" title="Listen to Note">Play</button>
        </p>
        <p class="content" row="12">${note.content}</p>
      </li>`;    
    });
  }
  else {
    html = '<li><p class="content">You don\'t have any nodes yet.</p></li>';
  }
  nodesList.html(html);
}


function saveNode(dateTime, content) {
  localStorage.setItem('_avm:/db/larena-' + dateTime, content);
}


function getAllNodes() {
  var nodes = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if(key.substring(0,5) == '_avm:/db/larena-') {
      nodes.push({
        date: key.replace('_avm:/db/larena-',''),
        content: localStorage.getItem(localStorage.key(i))
      });
    } 
  }
  return nodes;
}


function deleteNodes(dateTime) {
  localStorage.removeItem('_avm:/db/larena-' + dateTime); 
}

