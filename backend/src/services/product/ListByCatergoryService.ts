import prismaClient from '../../prisma'

interface ProductRequest{
  category_id: string;
}

class ListByCategoryService{
  async execute({ category_id }: ProductRequest){

    //Verificar se esse email já está cadastrado na plataforma
    const findbyCategory = await prismaClient.product.findMany({
      where:{
        category_id: category_id
      }
    })

    return findbyCategory;
  }
}

export { ListByCategoryService }