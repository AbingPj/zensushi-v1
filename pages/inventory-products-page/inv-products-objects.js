function RM_inv_object() {
    this.rawmaterials,
        this.selected_rm,
        this.products,

        this.RM_last_out_value,

        this.units,
        this.total_units_name,
        this.selected_products,
        this.raw_get_selected = (raw_id) => {
            requestToGetRMLastOut(raw_id);
            let x = this.products.filter(prod => prod.rawmaterial_id == raw_id);
            this.cart = [];
            let rm = this.rawmaterials.find(prod => prod.id == raw_id);
            let selectunit = this.units.find(units => units.id == rm.units_id);
     
            if (selectunit.id == '1') {
                this.total_units_name = "Kilo"
                var shit = document.getElementById("ScrapForm");
                shit.style.display = "block";
                $('#txtScrap').val("");
            } else if (selectunit.id == 2) {
                this.total_units_name = "Litre"
                var shit = document.getElementById("ScrapForm");
                shit.style.display = "none";
                $('#txtScrap').val("");
            } else if (selectunit.id == 3) {
                this.total_units_name = "Pack"
                var shit = document.getElementById("ScrapForm");
                shit.style.display = "none";
                $('#txtScrap').val("");
            }

            return this.selected_products = x

        },
        this.cart = [],
        this.add_to_cart = (prod_id, quantity) => {
            let x = this.products.find(prod => prod.id == prod_id);
            if (x == undefined) {
            } else {
                let objIndex = this.cart.findIndex((obj => obj.id == prod_id));
                let y = this.cart.find((obj => obj.id == prod_id));

                if (y == undefined) {
                    let subtotal = (x.value * quantity);
                    x.quantity = quantity;
                    x.subtotal = subtotal;


                    return this.cart.push(x);
                } else {
                    let oldqty = this.cart[objIndex].quantity;
                    let newquantity = parseFloat(oldqty) + parseFloat(quantity);
                    let newsubtotal = (y.value * newquantity);
                    this.cart[objIndex].quantity = newquantity;
                    this.cart[objIndex].subtotal = newsubtotal;
                }
            }
        },














        this.totalQty,
        this.totalWeight,
       
        this.get_totalQty = () => {
            let totalQ = 0;
            this.cart.forEach((obj) => {
                totalQ = parseFloat(totalQ) + parseFloat(obj.quantity)
            }
            );
            return this.totalQty = totalQ;
        },


        this.get_totalWeight = () => {
            let totalW = 0;
            this.cart.forEach((obj) => {
                totalW = parseFloat(totalW) + parseFloat(obj.subtotal)
            }
            );
            this.final_totalWeight = totalW;
            return this.totalWeight = totalW;
        },

        this.final_totalWeight,
        this.get_final_totalWeight = (scrap,bones) => {
         
            let totalW = 0;
            let FtotalW = 0;
            let ScrapBones = 0;
            this.cart.forEach((obj) => {
                totalW = parseFloat(totalW) + parseFloat(obj.subtotal)
            });
            ScrapBones = parseFloat(scrap) + parseFloat(bones);
            FtotalW = ScrapBones + totalW;
            return this.final_totalWeight = FtotalW;
        },






        this.selectedproduct_atcart,
        this.delete_one_row_in_cart = () => {
            let x = this.cart.filter(cart => cart.id != this.selectedproduct_atcart.id);
            return this.cart = x;
        },

        this.cart_item_update_quantity = (quantity) => {
            let index = this.cart.findIndex(cart => cart.id == this.selectedproduct_atcart.id);
            let item_value = this.cart[index].value;
            let newsubtotal = (item_value * quantity);
            this.cart[index].quantity = quantity;
            this.cart[index].subtotal = newsubtotal;
        },

















        this.products_no_raw,
        this.get_products_no_raw = () => {
            let x = this.products.filter(prod => prod.rawmaterial_id == null);
            return this.products_no_raw = x;
        },
        this.cart2 = [],
        this.selectedproduct_atcart2,
        this.totalQty2,
        this.add_to_cart2 = (quantity) => {
            let prod_id = this.selectedproduct_atcart2.id;
            let x = this.products_no_raw.find(prod => prod.id == prod_id);
            if (x == undefined) {
            } else {
                let objIndex = this.cart2.findIndex((obj => obj.id == prod_id));
                let y = this.cart2.find((obj => obj.id == prod_id));
                if (y == undefined) {
                    x.quantity = quantity;
                    return this.cart2.push(x);
                } else {
                    let oldqty = this.cart2[objIndex].quantity;
                    let newquantity = parseFloat(oldqty) + parseFloat(quantity);
                    this.cart2[objIndex].quantity = newquantity;
                }
            }
        },

        this.delete_one_row_in_cart2 = () => {
            let x = this.cart2.filter(cart2 => cart2.id != this.selectedproduct_atcart2.id);
            return this.cart2 = x;
        },

        this.cart2_item_update_quantity = (quantity) => {
            let index = this.cart2.findIndex(cart => cart.id == this.selectedproduct_atcart2.id);
            this.cart2[index].quantity = quantity;
        },

        this.get_totalQty_ofCart2 = () => {
            let totalQ = 0;
            this.cart2.forEach((obj) => {
                totalQ = parseFloat(totalQ) + parseFloat(obj.quantity)
            }
            );
            return this.totalQty2 = totalQ;
        }
}
const data_obj = new RM_inv_object();

