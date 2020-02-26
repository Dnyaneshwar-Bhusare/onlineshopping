export class OrderDetail{
    orderId: number;
    userId: number;
    orderedDate: string;
    expectedDeliveryDate:string ;
    price: number;
    orderStatus: string;
    addressId: number;
    orderItem: OrderItem;
  
}

export class OrderItem{
   // orderId: number;
   productId: number;
   quantity: number;
}