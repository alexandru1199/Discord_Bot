
module.exports = {
	name: 'quiz',
	description: 'genereaza intrebari random',
	usage:"<!><quiz>",
	alliases:['t'],
	cooldown:30,
	execute(message,args) {  	
		const quiz = require('../quiz.json');
		var item = quiz[Math.floor(Math.random() * quiz.length)];
		if(!args[0]|| parseInt(args[0])===NaN) {
			 item = quiz[Math.floor(Math.random() * quiz.length)];
		} 
		else if(quiz.length>=args[0]) {
			item = quiz[args-1];
		} 
		else if(quiz.length<args[0]){
			 return message.channel.send(" nu am a "+args[0] +"-a intrebare")
		}
		
const filter = response => {
	return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};	

message.channel.send(item.question).then(() => {
	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		.then(collected => {
			message.channel.send(`${collected.first().author} bv esti destept`);
		})
		.catch(collected => {
			message.channel.send('sunteti prosti ca dracu nimeni nu a gasit raspunsu');
		});
});
		
} }