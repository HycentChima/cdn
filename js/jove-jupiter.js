var isCommonJS = typeof window == "undefined" && typeof exports == "object";

/**
 * Top level namespace for Jupiter, a lightweight JavaScript BDD/spec/testing framework.
 *
 * @namespace
 */
var jupiter = {};
if (isCommonJS) exports.jupiter = jupiter;

jupiter.setting={
	output: false,
	harness_timeout:{
        "normal":10000,
        "long":60000
    },
    task_timeout:null,
	message_events: ["start", "task_state", "result", "completion"]
};

jupiter.console={
	logs:[],
	log: function(data){
		this.logs.push(data);
	},
	clear: function(data) {
		if (data) {
			this.logs=[];
		}
	},
	run: function(data){
		eval(data);
	},
	get: function(data) {
		if(this.logs.hasOwnProperty(data)){
			return this.logs[data];
		}
	}
};
jupiter.files=[];