type FooterSocialMediaButtonType =
    | 'twitter'
    | 'basketball'
    | 'linked-in'
    | 'instagram'
    | 'facebook';

type FooterSocialMediaContentItem = {
    id: number;
    buttonType: FooterSocialMediaButtonType;
    href: string;
};

export const footerSocialMediaContent: FooterSocialMediaContentItem[] = [
    { id: 0, buttonType: 'facebook', href: '#home' },
    { id: 1, buttonType: 'instagram', href: '#products' },
    { id: 2, buttonType: 'linked-in', href: '#categories' },
    { id: 3, buttonType: 'basketball', href: '#about' },
    { id: 4, buttonType: 'twitter', href: '#contact-us' },
];

type FooterMainBlockContentItemName =
    | 'My Account'
    | 'Help'
    | 'Shop'
    | 'Legal Stuff';

type FooterMainBlockContentMyAccountDataItemName =
    | 'Sign in'
    | 'Register'
    | 'Order status';

type FooterMainBlockContentMyAccountDataItemHref =
    | '#sign-in'
    | '#register'
    | '#order-status';

type FooterMainBlockContentMyAccountDataItem = {
    mainBlockItemContentItemId: number;
    mainBlockItemContentItemName: FooterMainBlockContentMyAccountDataItemName;
    mainBlockItemContentItemHref: FooterMainBlockContentMyAccountDataItemHref;
};

type FooterMainBlockContentMyAccountData = {
    mainBlockItemName: FooterMainBlockContentItemName;
    mainBlockItemContent: FooterMainBlockContentMyAccountDataItem[];
};

export const footerMainBlockContentMyAccountData: FooterMainBlockContentMyAccountData =
    {
        mainBlockItemName: 'My Account',
        mainBlockItemContent: [
            {
                mainBlockItemContentItemId: 0,
                mainBlockItemContentItemName: 'Sign in',
                mainBlockItemContentItemHref: '#sign-in',
            },
            {
                mainBlockItemContentItemId: 1,
                mainBlockItemContentItemName: 'Register',
                mainBlockItemContentItemHref: '#register',
            },
            {
                mainBlockItemContentItemId: 2,
                mainBlockItemContentItemName: 'Order status',
                mainBlockItemContentItemHref: '#order-status',
            },
        ],
    };

type FooterMainBlockContentHelpDataItemName = 'Shipping' | 'Returns' | 'Sizing';

type FooterMainBlockContentHelpDataItemHref =
    | '#shipping'
    | '#returns'
    | '#sizing';

type FooterMainBlockContentHelpDataItem = {
    mainBlockItemContentItemId: number;
    mainBlockItemContentItemName: FooterMainBlockContentHelpDataItemName;
    mainBlockItemContentItemHref: FooterMainBlockContentHelpDataItemHref;
};

type FooterMainBlockContentHelpData = {
    mainBlockItemName: FooterMainBlockContentItemName;
    mainBlockItemContent: FooterMainBlockContentHelpDataItem[];
};

export const footerMainBlockContentHelpData: FooterMainBlockContentHelpData = {
    mainBlockItemName: 'Help',
    mainBlockItemContent: [
        {
            mainBlockItemContentItemId: 0,
            mainBlockItemContentItemName: 'Shipping',
            mainBlockItemContentItemHref: '#shipping',
        },
        {
            mainBlockItemContentItemId: 1,
            mainBlockItemContentItemName: 'Returns',
            mainBlockItemContentItemHref: '#returns',
        },
        {
            mainBlockItemContentItemId: 2,
            mainBlockItemContentItemName: 'Sizing',
            mainBlockItemContentItemHref: '#sizing',
        },
    ],
};

type FooterMainBlockContentShopDataItemName =
    | 'All Products'
    | 'Bedroom'
    | 'Dinning Room';

type FooterMainBlockContentShopDataItemHref =
    | '#all-products'
    | '#bedroom'
    | '#dinning-room';

type FooterMainBlockContentShopDataItem = {
    mainBlockItemContentItemId: number;
    mainBlockItemContentItemName: FooterMainBlockContentShopDataItemName;
    mainBlockItemContentItemHref: FooterMainBlockContentShopDataItemHref;
};

type FooterMainBlockContentShopData = {
    mainBlockItemName: FooterMainBlockContentItemName;
    mainBlockItemContent: FooterMainBlockContentShopDataItem[];
};

export const footerMainBlockContentShopData: FooterMainBlockContentShopData = {
    mainBlockItemName: 'Shop',
    mainBlockItemContent: [
        {
            mainBlockItemContentItemId: 0,
            mainBlockItemContentItemName: 'All Products',
            mainBlockItemContentItemHref: '#all-products',
        },
        {
            mainBlockItemContentItemId: 1,
            mainBlockItemContentItemName: 'Bedroom',
            mainBlockItemContentItemHref: '#bedroom',
        },
        {
            mainBlockItemContentItemId: 2,
            mainBlockItemContentItemName: 'Dinning Room',
            mainBlockItemContentItemHref: '#dinning-room',
        },
    ],
};

type FooterMainBlockContentLegalStuffDataItemName =
    | 'Shipping & Delivery'
    | 'Terms & Conditions'
    | 'Privacy & Policy';

type FooterMainBlockContentLegalStuffDataItemHref =
    | '#shipping-delivery'
    | '#terms-conditions'
    | '#privacy-policy';

type FooterMainBlockContentLegalStuffDataItem = {
    mainBlockItemContentItemId: number;
    mainBlockItemContentItemName: FooterMainBlockContentLegalStuffDataItemName;
    mainBlockItemContentItemHref: FooterMainBlockContentLegalStuffDataItemHref;
};

type FooterMainBlockContentLegalStuffData = {
    mainBlockItemName: FooterMainBlockContentItemName;
    mainBlockItemContent: FooterMainBlockContentLegalStuffDataItem[];
};

export const footerMainBlockContentLegalStuffData: FooterMainBlockContentLegalStuffData =
    {
        mainBlockItemName: 'Legal Stuff',
        mainBlockItemContent: [
            {
                mainBlockItemContentItemId: 0,
                mainBlockItemContentItemName: 'Shipping & Delivery',
                mainBlockItemContentItemHref: '#shipping-delivery',
            },
            {
                mainBlockItemContentItemId: 1,
                mainBlockItemContentItemName: 'Terms & Conditions',
                mainBlockItemContentItemHref: '#terms-conditions',
            },
            {
                mainBlockItemContentItemId: 2,
                mainBlockItemContentItemName: 'Privacy & Policy',
                mainBlockItemContentItemHref: '#privacy-policy',
            },
        ],
    };

export type FooterMainBlockContentData =
    | FooterMainBlockContentLegalStuffData
    | FooterMainBlockContentShopData
    | FooterMainBlockContentHelpData
    | FooterMainBlockContentMyAccountData;
