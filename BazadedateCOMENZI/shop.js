module.exports= {
    name:"shop",
    description:"balance",
    
    async execute(message, args, bot,currency,Users,Op,CurrencyShop){
    const items = await CurrencyShop.findAll();
    return message.channel.send(items.map(item => `${item.name}: ${item.cost}💰`).join('\n'), { code: true });
}
    } 