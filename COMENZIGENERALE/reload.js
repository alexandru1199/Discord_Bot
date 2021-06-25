
module.exports={
    name:"reload",
    description:"da reload la o comanda",
    usage:"<!><reload><comanda>",
      execute(message,args){
      if(!args.length){
          return message.channel.send(`nu pune comanda goala ${message.author}`)
      }
      commandName=args[0].toLowerCase();
      const comande = message.client.commands.get(commandName)||message.client.BazadedateCOMENZI.get(commandName)
      || message.client.commands.find(cmd => cmd.alliases && cmd.alliases.includes(commandName));
      if (!comande) return message.channel.send(`nu e comanda asta \`${commandName}\`, ${message.author}!`);
      delete require.cache[require.resolve(`./${comande.name}.js`)];
      try {
        const newCommand = require(`./${comande.name}.js`);
        message.client.commands.set(newCommand.name, newCommand);
    } catch (error) {
        console.error(error);
        message.channel.send(`n-o vrut sa se reincarce ;-; \`${comand.name}\`:\n\`${error.message}\``);
    }
} }
