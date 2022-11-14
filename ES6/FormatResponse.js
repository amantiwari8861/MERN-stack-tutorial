let obj3={
    "state": "Delhi",
    "cities": [
        {
            "cityName": "Bakoli",
            "warehouses": [
                {
                    "warehouse_name": "sandeep warehouse",
                    "warehouse_id": 1
                }
            ]
        },
        {
            "cityName": "Delhi",
            "warehouses": [
                {
                    "warehouse_name": "Lalit_Mohan_Goel_W.H",
                    "warehouse_id": 83
                },
                {
                    "warehouse_name": "Bimla_W.H",
                    "warehouse_id": 116
                },
                {
                    "warehouse_name": "Poonam_manju_W.h",
                    "warehouse_id": 137
                },
                {
                    "warehouse_name": "Satish_Kumar_Surendra_Kumar_W.H",
                    "warehouse_id": 144
                },
                {
                    "warehouse_name": "Kiran_W.H2",
                    "warehouse_id": 146
                },
                {
                    "warehouse_name": "Kiran_W.H2",
                    "warehouse_id": 147
                },
                {
                    "warehouse_name": "Sunil_Rana_W.H",
                    "warehouse_id": 150
                },
                {
                    "warehouse_name": "Naresh_Kumar_W.H",
                    "warehouse_id": 151
                },
                {
                    "warehouse_name": "Sneh_Rana_Lata_W.H",
                    "warehouse_id": 152
                }
            ]
        }
    ]
}

// {
//     "state": "Andhra Pradesh",
//     "city": "Jammalamadugu",
//     "warehouse_name": "BLR RURAL GODOWNS jammalamadugu.",
//     "warehouse_id": 33
// }

// for (const key in obj3) 
// {
//     console.log(key+" : "+obj3["state"]);
//     let cities=obj3["cities"]
//     for (const city in cities) 
//     {
//         console.log(key+" : "+city["cityName"]);

//     }
// }

for(var i = 0; i < obj3.cities.length; i++)
{
    var city = obj3.cities[i];
    for(var j = 0; j < city.warehouses.length; j++)
    {
        var warehouse = city.warehouses[j];
        console.log("{");
        console.log("\t\"state\":"+"\""+obj3["state"]+"\"");
        console.log("\t\"city\":"+"\""+city["cityName"]+"\"");
        console.log("\t\"Warehouse_name\":"+"\""+warehouse["warehouse_name"]+"\"");
        console.log("\t\"Warehouse_id\":"+warehouse["warehouse_id"]);
        console.log("},");
    }
}



