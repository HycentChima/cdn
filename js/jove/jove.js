var isCommonJS = typeof window == "undefined" && typeof exports == "object";

/**
 * Top level namespace for jove, a lightweight JavaScript framework building script.
 *
 * @namespace
 */
var jove = {};
if (isCommonJS) exports.jove = jove;

jove.contract = bowinc.newKeys("⋈:/jove/");
jove.ott = "⋈:"+jove.contract.address+"/tx/";

jove.dateTime=function() {
	return new Date().getTime();
}

jove.save = function(content) {
  localStorage.setItem(jove.ott + Crypto.SHA256(jove.dateTime()+content,{asBytes: false}), content);
}

jove.saveNoUpdate = function(dateTime, content) {
  localStorage.setItem(jove.ott + dateTime, content);
}


jove.getAllSaved=function() {
  var saves = [];
  var key;
  for (var i = 0; i < localStorage.length; i++) {
    key = localStorage.key(i);

    if(key.substring(0,40) == jove.ott) {
      saves.push({
        date: key.replace(jove.ott,''),
        content: localStorage.getItem(localStorage.key(i))
      });
    } 
  }
  return saves;
}


jove.deleteSaved=function(dateTime) {
  localStorage.removeItem(jove.ott + dateTime); 
}
