module.exports={
    name:"deletee",
    async execute(message){
        const userReactions = message.reactions.cache.filter(reaction => reaction.users.cache.has(userId));
try {
	for (const reaction of userReactions.values()) {
		await reaction.users.remove(userId);
	}
} catch (error) {
	console.error('Failed to remove reactions.');
}
    }
}