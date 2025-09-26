type ownProductsSectionContentItem = {
    id: number;
    href: string;
    imgSrc: string;
    alt: string;
};

export const ownProductsSectionContentMockData: ownProductsSectionContentItem[] =
    [
        {
            id: 0,
            href: '#own-bedroom',
            imgSrc: '/img/own-prod-1.jpg',
            alt: 'Own Bedroom',
        },
        {
            id: 1,
            href: '#own-kitchen',
            imgSrc: '/img/own-prod-2.jpg',
            alt: 'Own Kitchen',
        },
        {
            id: 2,
            href: '#own-bathroom',
            imgSrc: '/img/own-prod-3.jpg',
            alt: 'Own Bathromm',
        },
    ];
