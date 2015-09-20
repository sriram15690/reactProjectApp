"use strict";
var Dispatcher = require("./dispatchers");
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _project = {};

var _projects = [];

var _latestProject = {};

var ProjectStore = assign( {}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	getAllProjects: function(){
		return _projects;
	}
});


Dispatcher.register(function(action){
	switch(action.actionType){
		case "NEW_PROJECT": 
			_project = action.project;
			_projects.push(action.project);
			ProjectStore.emitChange();
			break;
		case "LOAD_AUTHORS":
			_projects = action.projects;
			ProjectStore.emitChange();
			break;
		default:
	}
});

module.exports = ProjectStore;