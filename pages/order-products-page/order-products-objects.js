function RM_inv_object() {
        this.products,
        this.product_selected_id,
        this.product_selected_quantity,
        this.list = [],
        this.add_to_list = () => {
            let x = this.products.find(prod => prod.id ==  this.product_selected_id);
            if (x == undefined) {
            } else {
                let objIndex = this.list.findIndex((obj => obj.id == this.product_selected_id));
                let y = this.list.find((obj => obj.id == this.product_selected_id));

                if (y == undefined) {
                    let subtotal = (x.value *  this.product_selected_quantity);
                    x.quantity =  this.product_selected_quantity;
                    x.subtotal = subtotal;
                    return this.list.push(x);
                } else {
                    let oldqty = this.list[objIndex].quantity;
                    let newquantity = parseFloat(oldqty) + parseFloat( this.product_selected_quantity);
                    let newsubtotal = (y.value * newquantity);
                    this.list[objIndex].quantity = newquantity;
                    this.list[objIndex].subtotal = newsubtotal;
                }
            }
        },

        this.selectedproduct_atlist,
        this.delete_one_row_in_list = ()=>{
            let x = this.list.filter(list => list.id !=  this.selectedproduct_atlist.id);
            return this.list = x;
        },
        this.list_item_update_quantity = (quantity) =>{
            let index = this.list.findIndex(list => list.id ==  this.selectedproduct_atlist.id);
            let item_value =  this.list[index].value;
            let newsubtotal =   (item_value * quantity);
            this.list[index].quantity = quantity;
            this.list[index].subtotal = newsubtotal;
        } 
       
}
const data_obj = new RM_inv_object();

