import { JSX } from 'react';

import { AccountIcon } from '@/core/Icons/IconComponents/AccountIcon';
import { ShoppingCartIcon } from '@/core/Icons/IconComponents/ShoppingCartIcon';
import { SearchIcon } from '@/core/Icons/IconComponents/SearchIcon';
import { SearchSmallIcon } from '@/core/Icons/IconComponents/SearchSmallIcon';
import { HamburgerMenuIcon } from '@/core/Icons/IconComponents/HamburgerMenuIcon';
import { ArrowUpIcon } from '@/core/Icons/IconComponents/ArrowUpIcon';
import { ArrowDownIcon } from '@/core/Icons/IconComponents/ArrowDownIcon';
import { ArrowLeftIcon } from '@/core/Icons/IconComponents/ArrowLeftIcon';
import { ArrowRightIcon } from '@/core/Icons/IconComponents/ArrowRightIcon';
import { SeeMoreIcon } from '@/core/Icons/IconComponents/SeeMoreIcon';
import { ZoomIcon } from '@/core/Icons/IconComponents/ZoomIcon';
import { ZoomOutIcon } from '@/core/Icons/IconComponents/ZoomOutIcon';
import { TwitterIcon } from '@/core/Icons/IconComponents/TwitterIcon';
import { BasketballIcon } from '@/core/Icons/IconComponents/BasketballIcon';
import { LinkedInIcon } from '@/core/Icons/IconComponents/LinkedInIcon';
import { InstagramIcon } from '@/core/Icons/IconComponents/InstagramIcon';
import { FacebookIcon } from '@/core/Icons/IconComponents/FacebookIcon';
import { BenefitsSectionPaymentMethodIcon } from '@/core/Icons/IconComponents/BenefitsSectionPaymentMethodIcon';
import { BenefitsSectionReturnPolicyIcon } from '@/core/Icons/IconComponents/BenefitsSectionReturnPolicyIcon';
import { BenefitsSectionCustomerSupportIcon } from '@/core/Icons/IconComponents/BenefitsSectionCustomerSupportIcon';
import { RatingIcon } from '@/core/Icons/IconComponents/RatingIcon';

import {
    DynamicIconType,
    IconFillColor,
    IconProps,
    IconSize,
    StaticIconType,
} from '@/types';
import { TestimonialsImageIcon } from '../IconComponents/TestimonialsImageIcon';

const dynamicIconMap: Record<
    DynamicIconType,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ color, size }: IconProps) => JSX.Element
> = {
    account: AccountIcon,
    'shopping-cart': ShoppingCartIcon,
    search: SearchIcon,
    'search-small': SearchSmallIcon,
    'hamburger-menu': HamburgerMenuIcon,
    'arrow-up': ArrowUpIcon,
    'arrow-down': ArrowDownIcon,
    'arrow-left': ArrowLeftIcon,
    'arrow-right': ArrowRightIcon,
    'see-more': SeeMoreIcon,
    zoom: ZoomIcon,
    'zoom-out': ZoomOutIcon,
    twitter: TwitterIcon,
    basketball: BasketballIcon,
    'linked-in': LinkedInIcon,
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    rating: RatingIcon,
    'testimonials-img': TestimonialsImageIcon,
};

const staticIconMap: Record<StaticIconType, () => JSX.Element> = {
    'payment-method': BenefitsSectionPaymentMethodIcon,
    'return-policy': BenefitsSectionReturnPolicyIcon,
    'customer-support': BenefitsSectionCustomerSupportIcon,
};

export const getDynamicIconComponent = (
    icon: DynamicIconType,
    iconFill: IconFillColor,
    iconSize: IconSize
): JSX.Element => {
    const IconComponent = dynamicIconMap[icon];
    return <IconComponent color={iconFill} size={iconSize} />;
};

export const getStaticIconComponent = (icon: StaticIconType) => {
    const IconComponent = staticIconMap[icon];
    return <IconComponent />;
};
