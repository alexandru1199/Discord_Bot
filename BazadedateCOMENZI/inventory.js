module.exports= {
    name:"inventory",
    description:"balance",
    async execute( message, args,bot,currency,Users){
       
        const target = message.mentions.users.first() || message.author;
        const user = await Users.findOne({ where: { user_id: target.id } });
        const items = await user.getItems();
        
        if (!items.length) return message.channel.send(`${target.tag} has nothing!`);
        return message.channel.send(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
       } } 