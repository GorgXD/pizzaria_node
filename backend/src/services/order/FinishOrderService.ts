import { Order } from '@prisma/client';
import prismaClient from '../../prisma'

interface OrderRequest{
    order_id: string;
}

class FinishOrdersService{
  async execute({ order_id }: OrderRequest){

    //Verificar se esse email já está cadastrado na plataforma
    const order = await prismaClient.order.update({
      where:{
        id: order_id,
      },
      data:{
        status: true
      }
    })

    return order;
  }
}

export { FinishOrdersService }