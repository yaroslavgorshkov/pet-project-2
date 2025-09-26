import { NavigationListContentItem } from '@/types';

type CategorySectionItem = {
    id: number;
    text: string;
    href: string;
    imgSrc: string;
    alt: string;
};

export const categorySectionContent: CategorySectionItem[] = [
    {
        id: 0,
        href: '#bedroom',
        text: 'Bedroom',
        imgSrc: '/img/categories-bedroom.jpg',
        alt: 'Bedroom',
    },
    {
        id: 1,
        href: '#dinning-room',
        text: 'Dinning Room',
        imgSrc: '/img/categories-dinning.jpg',
        alt: 'Dinning Room',
    },
    {
        id: 2,
        href: '#meeting-room',
        text: 'Meeting Room',
        imgSrc: '/img/categories-meeting-room.jpg',
        alt: 'Meeting Room',
    },
    {
        id: 3,
        href: '#workspace',
        text: 'Workspace',
        imgSrc: '/img/categories-workspace-room.jpg',
        alt: 'Workspace',
    },
    {
        id: 4,
        href: '#living-room',
        text: 'Living Room',
        imgSrc: '/img/categories-living-room.jpg',
        alt: 'Living Room',
    },
    {
        id: 5,
        href: '#kitchen-room',
        text: 'Kitchen Room',
        imgSrc: '/img/categories-kitchen-room.jpg',
        alt: 'Kitchen Room',
    },
];

export const categorySectionMenuNavigationListContent: NavigationListContentItem[] =
    [
        { id: 0, href: '#bedroom', text: 'Bedroom' },
        { id: 1, href: '#dinning-room', text: 'Dinning Room' },
        { id: 2, href: '#meeting-room', text: 'Meeting Room' },
        { id: 3, href: '#workspace', text: 'Workspace' },
        { id: 4, href: '#living-room', text: 'Living Room' },
        { id: 5, href: '#kitchen-room', text: 'Kitchen Room' },
        { id: 6, href: '#living-space', text: 'Living Space' },
        { id: 7, href: '#kids-room', text: 'Kids Room' },
        { id: 8, href: '#guest-room', text: 'Guest Room' },
        { id: 9, href: '#bathroom', text: 'Bathroom' },
    ];
