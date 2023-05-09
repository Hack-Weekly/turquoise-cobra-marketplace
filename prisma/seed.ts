import { prisma } from 'src/server/db';

const productData = [
    {
        name: 'African Drum',
        description: 'African Drum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 345.54,
        category: 'Percussion',
        image: '/products/african-drum.png',
    },
    {
        name: 'Cello',
        description: 'Cello. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 3263.97,
        category: 'Strings',
        image: '/products/cello.jpg',
    },
    {
        name: 'Chico Piano',
        description: 'Chico Piano. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 2334.07,
        category: 'Keys',
        image: '/products/chico-piano.png',
    },
    {
        name: 'Clarinet',
        description: 'Clarinet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 435.86,
        category: 'Wind',
        image: '/products/clarinet.png',
    },
    {
        name: 'Drum Set',
        description: 'Drum set. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 843.21,
        category: 'Percussion',
        image: '/products/drum-set.jpg',
    },
    {
        name: 'Electric Guitar',
        description: 'Electric guitar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 1835.46,
        category: 'Strings',
        image: '/products/electric-guitar.jpg',
    },
    {
        name: 'Euphonium',
        description: 'Euphonium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 832.12,
        category: 'Wind',
        image: '/products/euphonium.jpg',
    },
    {
        name: 'Guitar',
        description: 'Guitar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 208.54,
        category: 'Strings',
        image: '/products/guitar.png',
    },
    {
        name: 'Harp',
        description: 'Harp. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 689.96,
        category: 'Strings',
        image: '/products/harp.png',
    },
    {
        name: 'Microphone',
        description: 'Microphone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 95.32,
        category: 'Accessories',
        image: '/products/microphone.jpg',
    },
    {
        name: 'Piano with Stool',
        description: 'Piano wih Stool. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 4563.90,
        category: 'Keys',
        image: '/products/piano-stool.png',
    },
    {
        name: 'Saxophone',
        description: 'Saxophone. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 647.83,
        category: 'Wind',
        image: '/products/saxophone.jpg',
    },
    {
        name: 'Tambourine',
        description: 'Tambourine. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 64.87,
        category: 'Percussion',
        image: '/products/tambourine.jpg',
    },
    {
        name: 'Trumpet',
        description: 'Trumpet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 587.34,
        category: 'Wind',
        image: '/products/trumpet.jpg',
    },
    {
        name: 'Violin',
        description: 'Violin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesen.',
        price: 1843.83,
        category: 'Strings',
        image: '/products/violin.jpg',
    },
]

async function seed() {
    for (const data of productData) {
        await prisma.product.create({ data });
    }
}

seed()
    .then(() => {
        console.log('Seed successful');
    })
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
