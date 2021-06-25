
module.exports={
  
name:"rol",
  async  executee(reaction, user) {

   
  
      if(user.bot) return;
      if(!reaction.message.guild) return;
      if(reaction.message.channel.id==='771511471800320050'){
      if(reaction.emoji.name===`👎`) {
          return await reaction.message.guild.members.cache.get(user.id).roles.add('768909128373370880')
      }
      else (reaction.emoji.name===`768908669857169428`)
     return  await reaction.message.guild.members.cache.get(user.id).roles.add('768940164335665233')
      }
      else if (reaction.message.channel.id==='769970545851629589')
      if(reaction.message.channel.id==='771515876234493963'){
        return  await reaction.message.guild.members.cache.get(user.id).roles.add('771495199654150144')
      }
  } }