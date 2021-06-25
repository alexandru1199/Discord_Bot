module.exports= {
    name:"balance",
    description:"balance",
    alliases:["currency",'money'],
    async execute(message, args, bot,currency,Users,Op,CurrencyShop,commandArgs,xp,lv){
        target=message.mentions.users.first() || message.author;
        Reflect.defineProperty(currency, 'getBalance', {
 
            value: function getBalance(id) {
                const user = currency.get(id);
                return user ? user.balance : 0;
            },
        });
        return message.channel.send(`${target.tag} has ${currency.getBalance(target.id)}💰`);
    } }