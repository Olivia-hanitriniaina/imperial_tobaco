Page 5

SELECT itg_product.name as article,IFNULL(plv_line.quantity , 0) as quatite FROM plv_line JOIN itg_product ON plv_line.product_id = itg_product.id 
WHERE plv_line.visit_sheet_id=82

Page 6
 get_data_for_p6(visit_sheet_id : number){
        return this.init_database().then((db : SQLiteObject) =>{
            let sql_select : string = "";
            let data_return = [visit_sheet_id] ;
            console.log("Requete_p6==>" + sql_select);
            return db.executeSql(sql_select, [])
                .then (data => {
                    console.log(' get_data_for_p6 ==> ' + JSON.stringify(data));
                    if(data.rows.length > 0){
                        for(var i = 0; i<data.rows.length; i++) {
                            data_return.push(data.rows.item(i));
                        }
                        return data_return;
                    }
                })
                .catch(e => {
                    console.log('Error on select get_data_for_p6 \n' + JSON.stringify(e)) ;
                })
        });
    }
Page 7

