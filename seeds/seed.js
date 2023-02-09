const sequelize = require("../config/connection")
const {User, Garden, Plant, Health} = require("../models")

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
            type: "Flower",
            climate: "Full Sun",
            health_id: 3
        },
        {
            plant_name:"Chamomile",
            type: "Flower",
            climate: "Partial Shade",
            health_id: 4
        },
        {
            plant_name:"Peppermint",
            type: "Herb",
            climate: "Partial Shade",
            health_id: 2
        },
        {
            plant_name:"Holy Basil",
            type: "Shrub",
            climate: "Full Sun",
            health_id: 5
        },
        {
            plant_name:"English Lavender",
            type: "Shrub",
            climate: "Full Sun",
            health_id: 5
        },
        {
            plant_name:"Hawthorn",
            type: "Tree",
            climate: "Full Sun",
            health_id: 6
        },
        {
            plant_name:"Sage",
            type: "Herb",
            climate: "Partial Sun",
            health_id: 6
        },
        {
            plant_name:"Yarrow",
            type: "Flower",
            climate: "Full Sun",
            health_id: 6
        },
        {
            plant_name:"Echinacea",
            type: "Herb",
            climate: "Full Sun",
            health_id: 8
        },
        {
            plant_name:"Nettle",
            type: "Shrub",
            climate: "Partial Shade",
            health_id: 9
        },
        {
            plant_name:"Ginger",
            type: "Flower",
            climate: "Partial Shade",
            health_id: 10
        },
        {
            plant_name:"Turmeric",
            type: "Flower",
            climate: "Partial Sun",
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
    process.exit(1)
}

seed();