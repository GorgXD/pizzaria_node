import prismaClient from '../../prisma'

interface ProductRequest{
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService{
  async execute({ name, price, description, banner, category_id }: ProductRequest){

    // validacões dos campos
    if(!name){
      throw new Error("Nome incorrect")
    }

    if(!price){
        throw new Error("Price incorrect")
    }

    if(!description){
      throw new Error("Description incorrect")
  }

    if(!category_id){
      throw new Error("Category incorrect")
  }


    //Verificar se esse email já está cadastrado na plataforma
    const productAlreadyExists = await prismaClient.product.findFirst({
      where:{
        name: name,
        price: price,
        category_id: category_id
      }
    })

    if(productAlreadyExists){
      throw new Error("Product already exists")
    }

    const product = await prismaClient.product.create({
      data:{
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id
      }
    })

    return product;
  }
}

export { CreateProductService }