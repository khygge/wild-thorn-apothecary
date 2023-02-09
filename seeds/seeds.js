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
    ]
    )

     const plant = await Plant.bulkCreate([
        {
            plant_name:"Calendula",
            plant_type: 2,
            plant_climate: 1,
            health_id: 3

        },
        {
            plant_name:"Chamomile",
            plant_type: 2,
            plant_climate: 3,
            health_id: 4
        },
        {
            plant_name:"Peppermint",
            plant_type: 1,
            plant_climate: 3,
            health_id: 2
        },
        {
            plant_name:"Holy Basil",
            plant_type: 3,
            plant_climate: 1,
            health_id: 5
        },
        {
            plant_name:"English Lavender",
            plant_type: 3,
            plant_climate: 1,
            health_id: 5
        },
        {
            plant_name:"Hawthorn",
            plant_type: 4,
            plant_climate: 1,
            health_id: 6
        },
        {
            plant_name:"Sage",
            plant_type: 1,
            plant_climate: 2,
            health_id: 6
        },
        {
            plant_name:"Yarrow",
            plant_type: 2,
            plant_climate: 1,
            health_id: 6
        },
        {
            plant_name:"Echinacea",
            plant_type: 1,
            plant_climate: 1,
            health_id: 8
        },
        {
            plant_name:"Nettle",
            plant_type: 3,
            plant_climate: 3,
            health_id: 9
        },
        {
            plant_name:"Ginger",
            plant_type: 2,
            plant_climate: 3,
            health_id: 10
        },
        {
            plant_name:"Turmeric",
            plant_type: 2,
            plant_climate: 2,
            health_id: 11
        },
    ]
    )

     const health = await Health.bulkCreate([
        {
            name:"Headache",
        },
        {
            name:"Stomach Ache",
        },
        {
            name:"Inflammation",
        },
        {
            name:"Insomnia",
        },
        {
            name:"Stress",
        },
        {
            name:"Circulation",
        },
        {
            name:"Anxiety",
        },
        {
            name:"Infection",
        },
        {
            name:"Allergies",
        },
        {
            name:"Nausea",
        },
        {
            name:"Pain"
        },
        
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