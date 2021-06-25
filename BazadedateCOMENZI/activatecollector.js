
module.exports= {
    name:"test",
    cooldown:'5',
    
    async execute(message, args, bot,currency){
        
        const filter = m => !m.author.bot
const collector = message.channel.createMessageCollector(filter, { time: 15000 });

collector.on('collect', m => {
	console.log(`Collected ${m.content}`);
});
collector.on('end', collected => {
    currency.add(message.author.id, collected.size-collected.size+1);
	console.log(`Collected ${collected.size} items`);
});
} }
    