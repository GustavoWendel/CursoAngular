class Order{
  constructor(
    public adress: string,
    public number: number,
    public optionalAdress: string,
    public paymentOption: string,
    public orderItems: OrderItem[] =[]
  ){}
}

class OrderItem{
  constructor (public quantity: number, public menuId: string){}
}

export{Order, OrderItem}
