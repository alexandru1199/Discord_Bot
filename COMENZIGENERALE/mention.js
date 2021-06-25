module.exports= {
    name:"mention",
    description:"mentiune a unei persoane",
    execute(message){
        if (!message.mentions.users.size) {
            return message.reply('mentioneaza in plm pe cnv');
        }
        message.channel.send(`l-ai mentionat pe  ${message.mentions.users.first()}`)
      
 


} }


