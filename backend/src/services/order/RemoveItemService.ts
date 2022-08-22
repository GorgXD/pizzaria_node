import prismaClient from '../../prisma'

interface ItemRequest{
  item_id: string;
}

class RemoveItemService{
  async execute({ item_id }: ItemRequest){

    // validacões dos campos
    if(!item_id){
      throw new Error("Item id incorrect")
    }

    const order = await prismaClient.item.delete({
        where:{
          id: item_id
        }
    })
    
    return order;
  }
}

export { RemoveItemService }