/*!
 * JOVE v1.0.0 Jove.js
 * https://coditorlab.github.io/jove/jove-js
 * by JOVE, Inc (c) 2023.
*/

(function() {
	var Jove = window.Jove = function(){};
	Jove.Version = "1.0.0";
	Jove.ditto ="0x0000deadad";

	Jove.page = document.location;
	Jove.hostname	= ((document.location.hostname.split(".")[(document.location.hostname.split(".")).length-1]) == 'ott') ? 'jove.coditorlab.ott' : 'coditorlab.github.io/jove';
	Jove.host = ('https:'==document.location.protocol?'https://':'http://')+Jove.hostname+'/api/';
	
	Jove.request = function(url, f, type, params) {
		var x = false;
		try{
			x = ActiveXObject('Msxml2.XMLHTTP')
		} catch(e){
			try {
				x = new ActiveXObject('Microsoft.XMLHTTP')
			}catch(e){
				x = new XMLHttpRequest()
			}
		}
		if(x==false){
			return false;
		}
		x.open(type, url, true);
		x.onreadystatechange=function(){
			if((x.readyState==4)&& f) f(x.responseText);
		};
		if (type=='POST') {
			x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		}
		x.send(params);
	}
	Jove.save = function(data) {
		uri = Jove.host+encodeURI(data);
		localStorage.setItem(uri,data);
	}
	Jove.init = function() {
		setInterval(function() {
			Jove.page.reload();
		},7000);
	}
})();