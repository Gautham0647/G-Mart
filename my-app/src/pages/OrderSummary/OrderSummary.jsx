import { useCart } from "../../Context/CartContext"



export function OrderSummary(){
    const {orderSummary} = useCart();
    console.log(orderSummary);
    return(
        <div>

        </div>
    )
}