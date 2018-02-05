var express = require('express');
var app = express();
var router = express.Router();

app.use('/user', router);

// : means in can change its value
router.get('/:username(\\w+)', function(req, resp){
	resp.end(JSON.stringify(req.params));
})

router.get('/heyThereFirstRouteAgain', function(req, resp){
	resp.end('what is going on, this is a bit differant');
})

app.listen(1337, function(){
	console.log('listening 1337');

})




// http://127.0.0.1:1337/myFirstRoute/heyThereFirstRoute/
// http://127.0.0.1:1337/myFirstRoute/heyThereFirstRouteAgain