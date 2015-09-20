"use strict";
var Dispatcher = require("./dispatchers");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _latestProject ={};

var LatestProjectStore = assign( {}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	getLatestProject: function(){
		return _latestProject;
	}
});

Dispatcher.register(function(action){
	switch(action.actionType){
		case "NEW_PROJECT": 
			_latestProject = action.project;
			LatestProjectStore.emitChange();
			break;
		default:
			
	}
});

module.exports = LatestProjectStore;