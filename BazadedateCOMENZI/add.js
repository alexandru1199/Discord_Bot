module.exports= {
    name:"add",
    
    
    async execute(message, args, bot,currency){
        target=message.mentions.users.first() || message.author;
        currency.add(target.id,args[0]);
        return message.channel.send(`${target.tag} recieved ${args[0]}💰`);
    } }