module.exports={
    name:"claim",
    description:"claims money",
    cooldown:60*60*12,
    async execute( message, args, bot,currency,Users,Op,CurrencyShop,commandArgs){
        function rndr(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
          }
          return currency.add(message.author.id,rndr(500,525))
} }