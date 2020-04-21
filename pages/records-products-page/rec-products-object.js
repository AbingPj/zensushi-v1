function prodobject() {
    this.products_in,
    this.products_inlist,
    this.selected_products_in,
    this.selected_products_inlist,
    this.prod_in_get_selected = () => {
        let x = this.products_inlist.filter(prod => prod.products_in_id == this.selected_products_in.id);
        return this.selected_products_inlist = x
    },
    this.products_delivery,
    this.products_deliverylist,
    this.selected_products_delivery,
    this.selected_products_deliverylist,
    this.delivery_get_selected = () => {
        let x = this.products_deliverylist.filter(prod => prod.delivery_id == this.selected_products_delivery.id);
        return this.selected_products_deliverylist = x
    },


    this.selected_product_inlist_for_update_delete,
    this.selected_product_deliverylist_for_update_delete,
    this.button_permession
}
const data_obj = new prodobject();

var product_in_id;