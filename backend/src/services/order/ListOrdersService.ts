import prismaClient from '../../prisma'

class ListOrdersService{
  async execute(){

    //Verificar se esse email já está cadastrado na plataforma
    const order = await prismaClient.order.findMany({
      where:{
        draft: false,
        status: false,
      },
      orderBy:{
        created_at:'desc'
      }
    })

    return order;
  }
}

export { ListOrdersService }