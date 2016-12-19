var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

var db = mongojs('mongodb://chad:chad@ds133398.mlab.com:33398/mytasklist_lonel', ['tasks']);


router.get('/tasks', function(req, res, next){
//	res.send('task api');
	db.tasks.find(function(error, tasks){
		if (error){
			res.send(error);
		}
		res.json(tasks);

	});

});
//single task
router.get('/task/:id', function(req, res, next){
//	res.send('task api');
	db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(error, task){
		if (error){
			res.send(error);
		}
		res.json(task);

	});

});
//save task

router.post('/task', function(){
	var task = req.body;
	if (!task.title || (task.isDone + '')) {
		res.status(400);
		res.json({
			"error" : "Bad Data"
		});
	} else {
		db.tasks.save(task, function(err, task) {
			if (err) {
				res.send(err)
			}
			res.json(task);	
		});
	}
	
});
//delete task
router.delete('/task/:id', function(req, res, next){
//	res.send('task api');
	db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(error, task){
		if (error){
			res.send(error);
		}
		res.json(task);

	});

});
//update task
router.put('/task/:id', function(req, res, next){
//	res.send('task api');
	var task = req.body;
	var updTask = {};
	if (task.isDone){
		updTask.isDone = task.isDone;
	}	
	
	if (!updTask) {

		res.status(400);
		res.json({
			"error" : "bad data"
		});
	}else {

		db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(error, task){
			if (error){
				res.send(error);
			}
			res.json(task);

		});
	}
});
module.exports = router;
