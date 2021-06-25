module.exports = {
    name: 'sterge',
    usage:'<!><sterge><nr mesaje>',
    alliases:['delete'],
	description: 'sterge n mesaje',
	execute(message,args) {
        const canal = message.channel;
        const ammount = parseInt(args[0]) + 1
        console.log(ammount);
        if (isNaN(ammount)) {
            return canal.send("pune un numar coaie")
        }
        canal.bulkDelete(ammount, true).catch(err => {
            console.error(err);
            canal.send('nu merge  , plm buguri');
        });
        canal.bulkDelete(ammount)
	},

};

