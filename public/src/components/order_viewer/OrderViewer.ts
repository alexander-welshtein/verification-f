import "./OrderViewer.scss"
import Config from "../../utility/render/Config"
import Events from "../../controller/Events"
import GoodContainer from "../good_container/GoodContainer"

/**
 * Panel providing additional order data.
 */
const OrderViewer = (): Config => ({
    class: "OrderViewer",
    children: [
        {
            class: "header",
            onRender: element => {
                Events.order.view.ORDER_ITEM_SELECTED.subscribe(order => {
                    element.innerText = `Order №${order.order_id}`
                })
            }
        },
        GoodContainer()
    ],
    onRender: element => {
        Events.order.view.ORDER_ITEM_SELECTED.subscribe(() => {
            element.classList.add("OrderViewer-displayed")
        })
    }
})

export default OrderViewer