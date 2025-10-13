type SearchDataTypeCategory = 'Category' | 'Popular' | 'Set' | 'Our Own';
type SearchDataTypeText =
    | 'Bedroom'
    | 'Dinning Room'
    | 'Meeting Room'
    | 'Workspace'
    | 'Living Room'
    | 'Kitchen Room'
    | 'Living Space'
    | 'Kids Room'
    | 'Guest Room'
    | 'Bathroom'
    | 'Armchair'
    | 'Premium Sofa'
    | 'Minima Sofa'
    | 'Dinning Chair'
    | 'Living Room Family Set'
    | 'Dinning Room Special Set'
    | 'Bedroom Special Set'
    | 'Kitchen Room Special Set'
    | 'Bathroom Special Set';

type SearchDataTypeHref =
    | '#bedroom'
    | '#dinning-room'
    | '#meeting-room'
    | '#workspace'
    | '#living-room'
    | '#kitchen-room'
    | '#living-space'
    | '#kids-room'
    | '#guest-room'
    | '#bathroom'
    | '#armchair'
    | '#premium-sofa'
    | '#minimal-sofa'
    | '#dinning-chair'
    | '#living-room-family-set'
    | '#dinning-room-special-set'
    | '#bedroom-special-set'
    | '#kitchen-room-special-set'
    | '#bathroom-special-set'
    | '#our-own-bedroom'
    | '#our-own-kitchen'
    | '#our-own-bathroom';

type SearchDataType = {
    id: number;
    category: SearchDataTypeCategory;
    text: SearchDataTypeText;
    href: SearchDataTypeHref;
};

export const searchData: SearchDataType[] = [
    {
        id: 0,
        category: 'Category',
        text: 'Bedroom',
        href: '#bedroom',
    },
    {
        id: 1,
        category: 'Category',
        text: 'Dinning Room',
        href: '#dinning-room',
    },
    {
        id: 2,
        category: 'Category',
        text: 'Meeting Room',
        href: '#meeting-room',
    },
    {
        id: 3,
        category: 'Category',
        text: 'Workspace',
        href: '#workspace',
    },
    {
        id: 4,
        category: 'Category',
        text: 'Living Room',
        href: '#living-room',
    },
    {
        id: 5,
        category: 'Category',
        text: 'Kitchen Room',
        href: '#kitchen-room',
    },
    {
        id: 6,
        category: 'Category',
        text: 'Living Space',
        href: '#living-space',
    },
    {
        id: 7,
        category: 'Category',
        text: 'Kids Room',
        href: '#kids-room',
    },
    {
        id: 8,
        category: 'Category',
        text: 'Guest Room',
        href: '#guest-room',
    },
    {
        id: 9,
        category: 'Category',
        text: 'Bathroom',
        href: '#bathroom',
    },
    {
        id: 10,
        category: 'Popular',
        text: 'Armchair',
        href: '#armchair',
    },
    {
        id: 11,
        category: 'Popular',
        text: 'Premium Sofa',
        href: '#premium-sofa',
    },
    {
        id: 12,
        category: 'Popular',
        text: 'Minima Sofa',
        href: '#minimal-sofa',
    },
    {
        id: 13,
        category: 'Popular',
        text: 'Dinning Chair',
        href: '#dinning-chair',
    },
    {
        id: 14,
        category: 'Set',
        text: 'Living Room Family Set',
        href: '#living-room-family-set',
    },
    {
        id: 15,
        category: 'Set',
        text: 'Dinning Room Special Set',
        href: '#dinning-room-special-set',
    },
    {
        id: 16,
        category: 'Set',
        text: 'Bedroom Special Set',
        href: '#bedroom-special-set',
    },
    {
        id: 17,
        category: 'Set',
        text: 'Kitchen Room Special Set',
        href: '#kitchen-room-special-set',
    },
    {
        id: 18,
        category: 'Set',
        text: 'Bathroom Special Set',
        href: '#bathroom-special-set',
    },
    {
        id: 19,
        category: 'Our Own',
        text: 'Bathroom',
        href: '#our-own-bathroom',
    },
    {
        id: 20,
        category: 'Our Own',
        text: 'Bedroom',
        href: '#our-own-bedroom',
    },
    {
        id: 21,
        category: 'Our Own',
        text: 'Kitchen Room',
        href: '#our-own-kitchen',
    },
];
