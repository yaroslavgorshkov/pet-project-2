import { NavigationList } from '@/core/NavigationList/NavigationList';
import { navigationListContent } from '@/Header/headerMockData';
import { HeaderNavigationListItem } from '@/Header/HeaderNavigationList/HeaderNavigationListItem';
import clsx from 'clsx';
import { useState } from 'react';

export const HeaderNavigationList = () => {
    const [activeElementId, setActiveElementId] = useState(0);

    const headerNavigationListUlClass = clsx('flex', 'gap-6xl');

    return (
        <NavigationList
            renderListItem={({ id, href, text, isHighlighted }) => (
                <HeaderNavigationListItem
                    text={text}
                    href={href}
                    isHighlighted={isHighlighted}
                    id={id}
                    setActiveElementId={setActiveElementId}
                />
            )}
            navigationListContent={navigationListContent}
            highlightedElementId={activeElementId}
            ulClassName={headerNavigationListUlClass}
        />
    );
};
