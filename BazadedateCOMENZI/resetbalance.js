module.exports= {
    name:"resetbalance",
    description:"balance",
    
    async execute(message, args, bot,currency,Users,Op,CurrencyShop,commandArgs,xp,lv,Reflect){
        target=message.mentions.users.first() || message.author;
        Reflect.defineProperty(currency, 'reset', {
            value: async function reset(id) {
                const user = currency.get(id);
                if (user) {
                    user.balance = 0;
                    return user.save();
                }
              
            },
        });
        currency.reset(target.id);
        
        return message.channel.send(`${target.tag} balance reseted`);
    } }