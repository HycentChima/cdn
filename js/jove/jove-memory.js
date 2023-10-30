var EventEmitter=function(){};EventEmitter.prototype.on=function(e,t,n){n||(n=this),this._listeners||(this._listeners={}),this._listeners[e]||(this._listeners[e]=[]),this._unbinders||(this._unbinders={}),this._unbinders[e]||(this._unbinders[e]=[]);var r=function(e){t.apply(n,[e])};this._unbinders[e].push(t),this._listeners[e].push(r)},EventEmitter.prototype.trigger=function(e,t){t===undefined&&(t={}),this._listeners||(this._listeners={});if(!this._listeners[e])return;var n=this._listeners[e].length;while(n--)this._listeners[e][n](t)},EventEmitter.prototype.removeListener=function(e,t){this._unbinders||(this._unbinders={});if(!this._unbinders[e])return;var n=this._unbinders[e].length;while(n--)this._unbinders[e][n]===t&&(this._unbinders[e].splice(n,1),this._listeners[e].splice(n,1))},EventEmitter.augment=function(e){for(var t in EventEmitter.prototype)e[t]||(e[t]=EventEmitter.prototype[t])};
(function(){
  var Jove.memory=function(){
    this.txs=[],
    this.txIndex={}
  };
  EventEmitter.augment(Jove.memory.prototype),
  Jove.memory.prototype.addTransaction=function(e){
    this.addTransactionNoUpdate(e),
    $(this).trigger("update")
  },
  Jove.memory.prototype.addTransactionNoUpdate=function(e){
    if(this.txIndex[e.hash])return;
    this.txs.push(new Bitcoin.Transaction(e)),
    this.txIndex[e.hash]=e
  },
  Jove.memory.prototype.removeTransaction=function(e){
    this.removeTransactionNoUpdate(e),
    $(this).trigger("update")
  },
  Jove.memory.prototype.removeTransactionNoUpdate=function(e){
    var t=this.txIndex[e];
    if(!t)return;
    for(var n=0,r=this.txs.length;n<r;n++)
      if(this.txs[n].hash==e){
        this.txs.splice(n,1);
        break
      }
      delete this.txIndex[e]
  },
  Jove.memory.prototype.loadTransactions=function(e){
    for(var t=0;t<e.length;t++)this.addTransactionNoUpdate(e[t]);
    $(this).trigger("update")
  },
  Jove.memory.prototype.getTransactions=function(){
    return this.txs
  },
  Jove.memory.prototype.clear=function(){
    this.txs=[],
    this.txIndex={},
    $(this).trigger("update")
  }
var isCommonJS = typeof window == "undefined" && typeof exports == "object";

/**
 * Top level namespace for Jupiter, a lightweight JavaScript BDD/spec/testing framework.
 *
 * @namespace
 */
var jove.task = {};
if (isCommonJS) exports.jupiter = jupiter;

function saveNote(dateTime, content) {
  localStorage.setItem('jove-' + dateTime, content);
}


function getAllNotes() {
  var notes = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if(key.substring(0,5) == 'jove-') {
      notes.push({
        date: key.replace('jove-',''),
        content: localStorage.getItem(localStorage.key(i))
      });
    } 
  }
  return notes;
}


function deleteNote(dateTime) {
  localStorage.removeItem('jove-' + dateTime); 
}
