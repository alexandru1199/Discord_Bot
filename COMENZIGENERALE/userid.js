module.exports= {
    name:"userid",
    alliases:['id'],
    description:"cand a fost userul creat",
    execute(message){
       message.channel.send("id-ul tau este :" +message.author.id)
    }

}