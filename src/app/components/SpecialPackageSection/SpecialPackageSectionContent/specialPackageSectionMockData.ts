export type Rating = 0 | 1 | 2 | 3 | 4 | 5;

export type SpecialPackageSectionHighlightedItemMockDataType = {
    name: string;
    price: number;
    rating: Rating;
    imageSrc: string;
    alt: string;
    href: string;
};

export const specialPackageSectionHighlightedItemMockData: SpecialPackageSectionHighlightedItemMockDataType =
    {
        name: 'Living Room Family Set',
        price: 999.99,
        imageSrc: '/img/special-package-high-el.jpg',
        alt: 'Special Package Section Family Set',
        href: '#living-room-family-set',
        rating: 4,
    };

type SpecialPackageSectionMainItemMockDataType = Omit<
    SpecialPackageSectionHighlightedItemMockDataType,
    'href'
> & { description: string };

export const specialPackageSectionMainItemMockData: SpecialPackageSectionMainItemMockDataType =
    {
        name: 'Larkin Wood Full Set',
        price: 729.99,
        imageSrc: '/img/special-package-main-el.jpg',
        alt: 'Special Package Main Item',
        description:
            'Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast...',
        rating: 5,
    };

export type SpecialPackageSectionMockDataType = Omit<
    SpecialPackageSectionHighlightedItemMockDataType,
    'href'
> & { id: number; description: string };

export const specialPackageSectionMockData: SpecialPackageSectionMockDataType[] =
    [
        {
            id: 0,
            name: 'Dinning Room Special Set',
            price: 399.99,
            imageSrc: '/img/special-package-more-el-1.jpg',
            alt: 'Special Package Section 1 product',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 4,
        },
        {
            id: 1,
            name: 'Bedroom Special Set',
            price: 499.99,
            imageSrc: '/img/special-package-more-el-2.jpg',
            alt: 'Special Package Section 2 product',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 3,
        },
        {
            id: 2,
            name: 'Kitchen Room Special Set',
            price: 599.99,
            imageSrc: '/img/special-package-more-el-3.jpg',
            alt: 'Special Package Section 3 product',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 3,
        },
        {
            id: 3,
            name: 'Bathroom Special Set',
            price: 699.99,
            imageSrc: '/img/special-package-more-el-4.jpg',
            alt: 'Special Package Section 4 product',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            rating: 2,
        },
    ];
