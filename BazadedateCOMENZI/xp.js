module.exports={
    name:"xp",
    description:"shows how much xp",
    execute(message, args, bot,currency,Users,Op,CurrencyShop,commandArgs,xp,lv){
        Reflect.defineProperty(xp,'getxp',{
    value: function getxp(id){
        const user=xp.get(id);
        return user ? user.xp : 0;
    }
})
        target=message.mentions.users.first() || message.author;
        return message.channel.send(`${target.tag} has ${xp.getxp(target.id)} xp`)
    }
}