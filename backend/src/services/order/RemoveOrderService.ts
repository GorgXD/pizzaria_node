import prismaClient from '../../prisma'

interface RemoveOrderRequest{
  order_id: string;
}

class RemoveOrderService{
  async execute({ order_id }: RemoveOrderRequest){

    // validacões dos campos
    if(order_id === ''){
      throw new Error("Order id incorrect")
    }

    const order = await prismaClient.order.delete({
      where:{
        id: order_id,
      }
    })

    return order;
  }
}

export { RemoveOrderService }