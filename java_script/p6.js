const trainer = {
	name : 'Nithin',
	tech1() {  // ES6 Syntax to define a Method
 		console.log("AIML JavaFS Trainer")
        return 100
	},
	tech2() {  // ES6 Syntax to define a Method
		console.log("C++ MERN Trainer")
        return 'python'
	}
}

function my_function(param) {
	trainer['name'] = 'Nithin Belamkar' // name of the trainer object modified
	trainer['tech2']();
    trainer[param] = 'Mysuru'; //// Adds the new field named location and its value will be Mysuru
    console.log(`Location = ${trainer.location}`)
}
my_function('location');