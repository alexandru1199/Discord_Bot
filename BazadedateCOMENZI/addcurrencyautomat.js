
module.exports={
    name:"c1",
    async executee(Reflect,xp,currency){
Reflect.defineProperty(currency, 'add', {

    value: async function add(id, amount) {
        const user = currency.get(id);
        if (user) {
            user.balance += Number(amount);
            return user.save();
        }
        const newUser = await Users.create({ user_id: id, balance: amount });
        currency.set(id, newUser);
        return newUser;
    },
}); } }