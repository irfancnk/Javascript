var Tutor=require('./Tutorial.js');
exports.NodeTutorial=function()
{
	console.log("Node Tutorial")
}

exports.NodeTutorial.pTutor=function()
{
		console.log("Ptutor here")
		var PTutor=Tutor
		PTutor.tutorial();
} 	
