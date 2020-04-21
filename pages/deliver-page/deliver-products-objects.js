function RM_inv_object() {
    this.products,
        this.product_selected_id,
        this.product_selected_quantity,
        this.list = [],
        this.add_to_list = () => {
            let x = this.products.find(prod => prod.id == this.product_selected_id);
            //let z = x;
            //console.log(x);
            //console.log(z);
            if (x == undefined) {
            } else {
                let objIndex = this.list.findIndex((obj => obj.id == this.product_selected_id));
                let y = this.list.find((obj => obj.id == this.product_selected_id));

                if (y == undefined) {
                    let subtotal = (x.value * this.product_selected_quantity);
                    x.quantity = this.product_selected_quantity;
                    x.subtotal = subtotal;

                    console.log("X: " + x.quantity)
                    console.log("z: " + x.balance)


                    if (x.balance == null) {
                        alert("The Quantity is null");
                    }
                    else if (x.balance == 0) {
                        alert("The Quantity is zero balance");
                    }
                     else if (parseFloat(x.quantity) > parseFloat(x.balance)) {
                        alert("Lapas");
                    } else {
                        return this.list.push(x);
                    }


                } else {
                    let oldqty = this.list[objIndex].quantity;
                    let newquantity = parseFloat(oldqty) + parseFloat(this.product_selected_quantity);
                    let newsubtotal = (y.value * newquantity);

                    if (parseFloat(newquantity) > parseFloat(x.balance)) {
                        alert("Lapas");
                    } else {
                        this.list[objIndex].quantity = newquantity;
                        this.list[objIndex].subtotal = newsubtotal;
                    }
                }
            }
        },

        this.selectedproduct_atlist,
        this.delete_one_row_in_list = () => {
            let x = this.list.filter(list => list.id != this.selectedproduct_atlist.id);
            return this.list = x;
        },

        this.list_item_update_quantity = (quantity) => {
            let index = this.list.findIndex(list => list.id == this.selectedproduct_atlist.id);
            let item_value = this.list[index].value;
            let newsubtotal = (item_value * quantity);

            if (parseFloat(quantity) > parseFloat(this.selectedproduct_atlist.balance)) {
                alert("Lapas");
            } else {
                this.list[index].quantity = quantity;
                this.list[index].subtotal = newsubtotal;
            }

        }

}
const data_obj = new RM_inv_object();

