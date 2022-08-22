import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface CategoryRequest{
  name: string;
}

class CreateCategoryService{
  async execute({ name }: CategoryRequest){

    // verificar se ele enviou um nome da categoria
    if(name === ''){
      throw new Error("Name incorrect")
    }

    //Verificar se esse nome da categoria já está cadastrado na plataforma
    const categoryAlreadyExists = await prismaClient.category.findFirst({
      where:{
        name: name
      }
    })

    if(categoryAlreadyExists){
      throw new Error("Category already exists")
    }

    const category = await prismaClient.category.create({
      data:{
        name: name
      },
      select:{
        name: true
      }
    })

    return category;
  }
}

export { CreateCategoryService }