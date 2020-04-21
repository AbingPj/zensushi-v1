function JsObj() {
        this.categories,
        this.rawmaterials,
        this.units,
        this.units_sub,
        this.selected_rawmaterials,
        this.packaging,
        this.get_selected_category_id = (cat_id) => {
            if (cat_id == "ALL") {
                return this.selected_rawmaterials = this.rawmaterials;
            } else {
                let x = this.rawmaterials.filter(raw => raw.cat_id == cat_id);
                return this.selected_rawmaterials = x;
            }
        },

        this.selected_unit_label,
        this.get_selected_unit_label = (id) => {
            let raw = this.rawmaterials.find(raw => raw.id == id);
            return this.selected_unit_label = raw;
        },
        this.get_selected_unit_label_name = () => {
            if (this.selected_unit_label == null) {
                return ".";
            } else if (this.selected_unit_label.units_id == 3) {
                return "UNIT";
            } else {
                return this.units.find(unit => unit.id == this.selected_unit_label.units_id).name;
            }
        },
        this.selected_units_sub,
        this.set_selected_units_sub = () => {
            if (this.selected_unit_label == null) {
                return this.selected_units_sub = null;
            } else {
                let x = this.units_sub.filter(u_sub => u_sub.units_id == this.selected_unit_label.units_id);
                return this.selected_units_sub = x;
            }
        },

        this.selected_prod_save,
        this.set_selected_prod_save = (name, rawmaterial_id, units_sub_id, value, packaging_id, critical_level) => {
            if (value > 0) {
                let prod;
                let newvalue;
                let units_sub_value = this.units_sub.find(unit => unit.id == units_sub_id).value;
                if (units_sub_id == 1 || units_sub_id == 5){
                    console.log("I."+ units_sub_id);
                    newvalue = value * units_sub_value;
                    if (newvalue >= 1 && units_sub_id == 1){
                        console.log("II."+units_sub_id);
                        units_sub_id = 2;
                        console.log("III."+units_sub_id);
                    }else if (newvalue >= 1 && units_sub_id == 5){
                        units_sub_id = 4;
                    }
                    prod = {
                        name: name,
                        raw_id: rawmaterial_id,
                        units_sub_id: units_sub_id,
                        value: newvalue,
                        packaging_id:packaging_id,
                        critical_level:critical_level,
                    };
                    return this.selected_prod_save = prod;

                }else{

                    newvalue = value * units_sub_value;
                    prod = {
                        name: name,
                        raw_id: rawmaterial_id,
                        units_sub_id: units_sub_id,
                        value: newvalue,
                        packaging_id:packaging_id,
                        critical_level:critical_level,
                    };
                    return this.selected_prod_save = prod;

                }
            }
        }

        this.products,
        this.checkedProd = [
            id = [],
            name = []
        ];
        this.Selected_Delete_Product,
        this.Selected_Update_Product,
        this.selected_rawmaterials2,

        this.get_selected_category_id2 = (cat_id) => {
            if (cat_id == "ALL") {
                return this.selected_rawmaterials2 = this.rawmaterials;
            } else {
                let x = this.rawmaterials.filter(raw => raw.cat_id == cat_id);
                return this.selected_rawmaterials2 = x;
            }
        },
        this.selected_unit_label2,
        this.get_selected_unit_label2 = (id) => {
            let raw = this.rawmaterials.find(raw => raw.id == id);
            return this.selected_unit_label2 = raw;
        },
        this.get_selected_unit_label_name2 = () => {
            if (this.selected_unit_label2 == null) {
                return ".";
            } else if (this.selected_unit_label2.units_id == 3) {
                return "UNIT";
            } else {
                return this.units.find(unit => unit.id == this.selected_unit_label2.units_id).name;
            }
        },
        
        this.selected_units_sub2,
        this.set_selected_units_sub2 = () => {
            if (this.selected_unit_label2 == null) {
                return this.selected_units_sub2 = null;
            } else {
                let x = this.units_sub.filter(u_sub => u_sub.units_id == this.selected_unit_label2.units_id);
                return this.selected_units_sub2 = x;
            }
        }

        
        this.save_update_product,
        this.set_save_update_product = (id,name, rawmaterial_id, units_sub_id, value, packaging_id, critical_level) => {
            if (value > 0) {
                let units_sub_value = this.units_sub.find(unit => unit.id == units_sub_id).value;
                let newvalue = value * units_sub_value;
                let prod = {
                    id: id,
                    name: name,
                    raw_id: rawmaterial_id,
                    units_sub_id: units_sub_id,
                    value: newvalue,
                    packaging_id: packaging_id,
                    critical_level: critical_level,
                };
                return this.save_update_product = prod;
            }
        }
};


const mydataObj = new JsObj();