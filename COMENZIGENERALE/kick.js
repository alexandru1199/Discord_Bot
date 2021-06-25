
module.exports={
    name:"kick",
    description:"e doar contu meu pentru faculta #alex",
    alliases:["account","cont"],
    execute(message){
    const member2 = message.mentions.members.first();
    if(message.member.hasPermission('KICK_MEMBERS')) 
    member2.kick();
    else 
    message.channel.send("nu ai permisiuni");
} } 