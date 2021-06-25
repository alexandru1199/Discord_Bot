module.exports= {
    name:"usertime",
    description:"cand a fost userul creat",
    execute(message,args){
    const taggedUsers = message.mentions.users;
    if (!taggedUsers.size){
       message.channel.send("ai fost creat la :" +message.author.createdAt)}
       else{
        const lista = taggedUsers.map(user => {
           message.channel.send(`${user}`+ "a fost creat la"+`${user.createdAt}`)
       });
    }

} }