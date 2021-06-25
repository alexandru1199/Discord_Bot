module.exports={
    name:"rol2",
    async  executeee(reaction, user) {
   
      ;
    
        if(user.bot) return;
        if(!reaction.message.guild) return;
      
      
        else if (reaction.message.channel.id==='769970545851629589')
        if(reaction.emoji.name===`771515876234493963`){
          console.log(da)
          console.log(user.id)
          return   reaction.message.guild.members.cache.get(user.id).roles.add('771495199654150144')
        }
    } }