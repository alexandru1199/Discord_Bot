module.exports= {
    name:"avatar",
    description:"avatare",
    ussage: "<!><avatar><mentioned users>",
    alliases:["icon","pfp"],
    cooldown:3,
    execute(message){
        canal=message.channel
const taggedUsers = message.mentions.users;
if (!taggedUsers.size)
return canal.send(`Your avatar: <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
const avatarList = taggedUsers.map(user => {
return `${user.username}'s avatar: <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
});
canal.send(avatarList)
}
    }
