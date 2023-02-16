
const Orders = ({items, order}) =>{
    
    return (
      <div className="container mb-5">
        <div className="d-flex flex-row align-items-start">
          <div className="col-11 d-flex flex-column m-2">
            {items.map((item) => 
              <div className="cart-item p-3">
                <div className="d-flex flex-row">
                  <img
                    className="col-2 img-fluid"
                    src={`images/${item.image}.jpg`}
                    alt="image"
                  />
                  <div className="col-4 p-2">
                    <h5>{item.name}</h5>
                    <h6>{item.category}</h6>
                    <p>quantity : {item.quantity}</p>
                    <p>${item.price}</p>
                  </div>
                 
                </div>
              </div>
            )}
            <div className="col-12">
          <p>
          <strong>Order Total : </strong>
          ${order.total_cost-order.total_cost*order.discount_in_percent/100+order.shipping_charges} | 
          <strong> Address : </strong> {order.shipping_address.first_name } {order.shipping_address.last_name }, {order.shipping_address.address1 }, {order.shipping_address.State }, {order.shipping_address.pin_code }
          </p>
          </div>
          </div>
        </div>
      </div>
    );};

 
export default Orders;