const sequelize = require("../config/connection")
const {User, Garden, Plant, Health, Type, Climate} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true});
    const user = await User.bulkCreate([
        {
            email:"violet@dreamdevs.com",
            password:"visualviolet"
        },
        {
            email:"ben@bingus.com",
            password:"twoggerblogger"
        },
        {
            email:"emma@regulargnoll.com",
            password:"watermelongum"
        },
        {
            email:"anthony@mangobango.com",
            password:"mangoTHEbango"
        }
    ],{
        individualHooks:true
    })

    const garden = await Garden.bulkCreate([
        {
            user_id: 1,
            plant_id:3
        },
        {
            user_id: 1,
            plant_id: 10
        },
        {
            user_id: 1,
            plant_id: 5
        },
        {
            user_id: 2,
            plant_id: 2
        },
        {
            user_id: 2,
            plant_id: 11
        },
        {
            user_id: 3,
            plant_id: 1
        },
        {
            user_id: 3,
            plant_id: 5
        },
        {
            user_id: 3,
            plant_id: 6
        },
        {
            user_id: 3,
            plant_id: 8
        },
        {
            user_id: 4,
            plant_id: 12
        },
        {
            user_id: 4,
            plant_id: 4
        },
    ])

     const plant = await Plant.bulkCreate([
        {
            plant_name:"Calendula",
            type_id: 2,
            climate_id: 1,
            health_id: 3
        },
        {
            plant_name:"Chamomile",
            type_id: 2,
            climate_id: 3,
            health_id: 4
        },
        {
            plant_name:"Peppermint",
            type_id: 1,
            climate_id: 3,
            health_id: 2
        },
        {
            plant_name:"Holy Basil",
            type_id: 3,
            climate_id: 1,
            health_id: 5
        },
        {
            plant_name:"English Lavender",
            type_id: 3,
            climate_id: 1,
            health_id: 5
        },
        {
            plant_name:"Hawthorn",
            type_id: 4,
            climate_id: 1,
            health_id: 6
        },
        {
            plant_name:"Sage",
            type_id: 1,
            climate_id: 2,
            health_id: 6
        },
        {
            plant_name:"Yarrow",
            type_id: 2,
            climate_id: 1,
            health_id: 6
        },
        {
            plant_name:"Echinacea",
            type_id: 1,
            climate_id: 1,
            health_id: 8
        },
        {
            plant_name:"Nettle",
            type_id: 3,
            climate_id: 3,
            health_id: 9
        },
        {
            plant_name:"Ginger",
            type_id: 2,
            climate_id: 3,
            health_id: 10
        },
        {
            plant_name:"Turmeric",
            type_id: 2,
            climate_id: 2,
            health_id: 11
        },
    ])

     const health = await Health.bulkCreate([
        {
            benefits:"Headache Relief",
        },
        {
            benefits:"Digestion Aid",
        },
        {
            benefits:"Anti-Inflammatory",
        },
        {
            benefits:"Sleep",
        },
        {
            benefits:"Stress Relief",
        },
        {
            benefits:"Circulation",
        },
        {
            benefits:"Anti-Anxiety",
        },
        {
            benefits:"Antiviral",
        },
        {
            benefits:"Allergy Relief",
        },
        {
            benefits:"Anti-Nausea",
        },
        {
            benefits:"Pain Relief"
        }
    ])

     const type = await Type.bulkCreate([
        {
            type:"Herb",
        },
        {
            type:"Flower",
        },
        {
            type:"Shrub",
        },
        {
            type:"Tree",
        },
        {
            type: "Vine"
        }
    ])

    const climate = await Climate.bulkCreate([
        {
            climate:"Full Sun",
        },
        {
            climate:"Partial Sun",
        },
        {
            climate:"Partial Shade",
        },
        {
            climate:"Shade",
        }
    ])
    process.exit(1)
}

seed();