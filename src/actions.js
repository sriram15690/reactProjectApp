"use strict";

var Dispatcher = require("./dispatchers");

var ProjectActions = {
	createProject: function (project){
		$.ajax({
			url: "http://localhost:3000/projects",
			type: "POST",
			data: project,
			success: function(response){
				console.log("consoling dispatch");
				console.log(Dispatcher);
				Dispatcher.dispatch({
					actionType: "NEW_PROJECT",
					project: response
				});
			}
		});
	},
	loadAllProjects: function(){
		$.ajax({
			url: "http://localhost:3000/projects",
			type: "GET",
			success: function(response){
				console.log(Dispatcher);
				Dispatcher.dispatch({
					actionType: "LOAD_AUTHORS",
					projects: response
				});
			}
		});
	}
}

module.exports = ProjectActions;
