const Mutations = {
    async createItem(parents, args, ctx, info){

        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            },
        }, info); 

        return item;
    }

    // createDog(parents, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     const newDog = { name: args.name }
    //     global.dogs.push(newDog);
    //     return newDog;
    // }
};

module.exports = Mutations;
