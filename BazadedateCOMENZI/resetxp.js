const { User } = require("discord.js");

module.exports= {
    name:"resetxp",
    description:"balance",
    
    async execute(message, args, bot,currency,Users,Op,CurrencyShop,commandArgs,xp,lv,Reflect){
        target=message.mentions.users.first() || message.author;
        
        Reflect.defineProperty(xp, 'reset', {
            value: async function reset(id) {
                const user = xp.get(id);
                if (user) {
                    user.xp = 0;
                    return user.save();
                }
              
            },
        });
        xp.reset(target.id);
        return message.channel.send(`${target.tag} xp reseted`);
    } }