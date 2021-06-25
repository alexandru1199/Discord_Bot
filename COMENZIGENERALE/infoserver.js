module.exports= {
    name:"server",
    description:"infoserver",
    execute(message){
       message.channel.send('sv se numeste ' + message.guild.name + "\n numarul de membrii: " + message.guild.memberCount) 
    }



}