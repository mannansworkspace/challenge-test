const mongoose = require('mongoose');
const { Sector } = require('../models/index'); // Adjust the path
require('dotenv').config();

const data = [
    {
        name: 'Manufacturing',
        checked: false,
        subSectors: [
            {
                name: 'Construction materials',
                checked: false,
                subSectors: null
            },
            {
                name: 'Electronics and Optics',
                checked: false,
                subSectors: null
            },
            {
                name: 'Food and Beverage',
                checked: false,
                subSectors: [
                    {
                        name: 'Bakery & confectionery products',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Beverages',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Fish & fish products',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Meat & meat products',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Milk and dairy products',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Other',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Sweets & snack food',
                        checked: false,
                        subSectors: null
                    },
                ]
            },
            {
                name: 'Furniture',
                checked: false,
                subSectors: [
                    {
                        name: 'Bathroom/sauna',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Bedroom',
                        checked: false,
                        subSectors: null
                    }, {
                        name: "Children's room",
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Kitchen',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Living room',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Office',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Other (Furniture)',
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: 'Outdoor',
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: 'Project furniture',
                        checked: false,
                        subSectors: null
                    },
                ]
            },
            {
                name: 'Machinery',
                checked: false,
                subSectors: [
                    {
                        name: 'Machinery components',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Machinery equipment/tools',
                        checked: false,
                        subSectors: null
                    }, {
                        name: "Manufacture of machinery",
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: "Maritime",
                        checked: false,
                        subSectors: [
                            {
                                name: 'Aluminium and steel workboats',
                                checked: false,
                                subSectors: null
                            }, {
                                name: 'Boat/Yacht building',
                                checked: false,
                                subSectors: null
                            }, {
                                name: "Ship repair and conversion",
                                checked: false,
                                subSectors: null
                            },
                        ]
                    },
                    {
                        name: "Metal structures",
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: "Other",
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: "Repair and maintenance service",
                        checked: false,
                        subSectors: null
                    },
                ]
            },
            {
                name: 'Metalworking',
                checked: false,
                subSectors: [
                    {
                        name: 'Construction of metal structures',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'House and buildings',
                        checked: false,
                        subSectors: null
                    }, {
                        name: "Metal products",
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Metal works',
                        checked: false,
                        subSectors: [
                            {
                                name: 'CNC-machining',
                                checked: false,
                                subSectors: null
                            }, {
                                name: 'forgings, Fasteners',
                                checked: false,
                                subSectors: null
                            }, {
                                name: "Gas, Plasma, Laser cutting",
                                checked: false,
                                subSectors: null
                            }, {
                                name: 'MIG, TIG, Aluminum welding',
                                checked: false,
                                subSectors: null
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Plastic and Rubber',
                checked: false,
                subSectors: [
                    {
                        name: 'Packing',
                        checked: false,
                        subSectors: null
                    }, {
                        name: "Plastic goods",
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Plastic processing technology',
                        checked: false,
                        subSectors: [
                            {
                                name: 'Blowing',
                                checked: false,
                                subSectors: null
                            }, {
                                name: 'Moduling',
                                checked: false,
                                subSectors: null
                            }, {
                                name: "Plastic welding and processing",
                                checked: false,
                                subSectors: null
                            },
                        ]
                    },
                    {
                        name: 'Plastic profiles',
                        checked: false,
                        subSectors: null
                    },
                ]
            },
            {
                name: 'Printing',
                checked: false,
                subSectors: [
                    {
                        name: 'Advertising',
                        checked: false,
                        subSectors: null
                    }, {
                        name: "Book/Periodicals printing",
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Labeling and packaging printing',
                        checked: false,
                        subSectors: null
                    },
                ]
            },
            {
                name: 'Testile and Clothing',
                checked: false,
                subSectors: [
                    {
                        name: 'Clothing',
                        checked: false,
                        subSectors: null
                    }, {
                        name: "textile",
                        checked: false,
                        subSectors: null
                    },
                ]
            },
            {
                name: 'Wood',
                checked: false,
                subSectors: [
                    {
                        name: 'Other (Wood)',
                        checked: false,
                        subSectors: null
                    }, {
                        name: "Wooden building materials",
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: "Wooden houses",
                        checked: false,
                        subSectors: null
                    },
                ]
            },
        ]
    },
    {
        name: 'Other',
        checked: false,
        subSectors: [
            {
                name: 'Creative Industries',
                checked: false,
                subSectors: null
            },
            {
                name: 'Energy technology',
                checked: false,
                subSectors: null
            },
            {
                name: 'Environment',
                checked: false,
                subSectors: null
            },
        ]
    },
    {
        name: 'Service',
        checked: false,
        subSectors: [
            {
                name: 'Buisness services',
                checked: false,
                subSectors: null
            },
            {
                name: 'Engineering',
                checked: false,
                subSectors: null
            },
            {
                name: 'Information Technology and Telecommunications',
                checked: false,
                subSectors: [
                    {
                        name: 'Data processing, Web portals, E-marketing',
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: 'Programming, Consultancy',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Software, Hardware',
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: 'Telecommunications',
                        checked: false,
                        subSectors: null
                    },
                ]
            },
            {
                name: 'Tourism',
                checked: false,
                subSectors: null
            },
            {
                name: 'Translation services',
                checked: false,
                subSectors: null
            },
            {
                name: 'Transport and Logistics',
                checked: false,
                subSectors: [
                    {
                        name: 'Air',
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: 'Rail',
                        checked: false,
                        subSectors: null
                    }, {
                        name: 'Road',
                        checked: false,
                        subSectors: null
                    },
                    {
                        name: 'Water',
                        checked: false,
                        subSectors: null
                    },
                ]
            },
        ]
    }
];

// Seeding function for SubSectors
async function seedSubSectors(subSectors, parent = null,) {
    const subSectorDocs = [];

    for (const item of subSectors) {
        const subSector = new Sector({
            name: item.name,
            isRoot: false
            // reference: modelReferences.SUB_SECTOR
        });

        await subSector.save()
        subSectorDocs.push(subSector);

        if (item.subSectors) {
            await seedSubSectors(item.subSectors, subSector);
        }
    }

    if (parent) {
        parent.subSectors = subSectorDocs;
        await parent.save();
    }
}

// Seeding function for Sectors
async function seedSectors(data) {
    for (const item of data) {
        const sector = new Sector({
            name: item.name,
        });

        await sector.save();

        if (item.subSectors) {
            await seedSubSectors(item.subSectors, sector);
        }
    }
}

// Connect to the database and call the seeding function
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to database');
        return seedSectors(data);
    })
    .then(() => {
        console.log('Seeding completed');
        mongoose.disconnect();
    })
    .catch(error => {
        console.error('Error:', error);
        mongoose.disconnect();
    });
