const prisma = require("../_prisma");

const userService = {
  createcommand: async ({
    name,
    last_name,
    cin,
    itemcode,
    restaurant_name,
 
  }) => {
    const command = await prisma.command.create({
      data: {
        name,
        last_name,
        cin,
        itemcode,
        restaurant_name,
      },
    });
    return command
  },
};

module.exports=userService