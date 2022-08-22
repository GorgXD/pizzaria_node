import { Order } from '@prisma/client';
import { Request, response, Response } from 'express';
import { FinishOrdersService } from '../../services/order/FinishOrderService';

class FinishOrderController{

   async handle(req:Request, res: Response)  {

    const { order_id } = req.body;

    const finishOrdersService = new FinishOrdersService();

    const order = await finishOrdersService.execute({
      order_id
    });
  
    return res.json(order);

    }

}

export {FinishOrderController}