import { NavigationList } from '@/core/NavigationList/NavigationList';
import { navigationListContent } from '@/Header/headerMockData';
import { HeaderNavigationListItem } from '@/Header/HeaderNavigationList/HeaderNavigationListItem';
import clsx from 'clsx';

type HeaderNavigationListProps = {
    activeElementId: number;
    setActiveElementId: React.Dispatch<React.SetStateAction<number>>;
};

export const HeaderNavigationList = ({
    activeElementId,
    setActiveElementId,
}: HeaderNavigationListProps) => {
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
                    fontSize={'xl'}
                />
            )}
            navigationListContent={navigationListContent}
            highlightedElementId={activeElementId}
            ulClassName={headerNavigationListUlClass}
        />
    );
};
