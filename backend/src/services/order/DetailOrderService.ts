import prismaClient from '../../prisma'

interface DetailRequest{
  order_id: string;
}

class DetailOrderService{
  async execute({ order_id }: DetailRequest){

    //Verificar se esse id order já está cadastrado na plataforma
    const orders = await prismaClient.item.findMany({
      where:{
        id: order_id
      },
      include:{
        product: true,
        order: true
      }
    })

    return orders;
  }
}

export { DetailOrderService }