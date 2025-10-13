import { forwardRef, Fragment, ReactNode } from 'react';
import React from 'react';
import { NavigationListContentItem } from '@/types';
import { cn } from '@/helpers/cn';

type RenderListItemProps = {
    id: number;
    text: string;
    href: string;
    isHighlighted: boolean;
};

type NavigationListProps = {
    renderListItem: ({
        id,
        text,
        href,
        isHighlighted,
    }: RenderListItemProps) => ReactNode;
    highlightedElementId?: number;
    navigationListContent: NavigationListContentItem[];
    navClassName?: string;
    ulClassName?: string;
    onScroll?: () => void;
};

export const NavigationList = forwardRef<HTMLUListElement, NavigationListProps>(
    (
        {
            renderListItem,
            highlightedElementId,
            navigationListContent,
            navClassName = '',
            ulClassName = '',
            onScroll,
        },
        ref
    ) => {
        const renderList = navigationListContent.map(({ id, text, href }) => {
            const isNavigationListItemHighlighted = id === highlightedElementId;
            const renderContent = renderListItem({
                text,
                href,
                isHighlighted: isNavigationListItemHighlighted,
                id,
            });
            return <Fragment key={id}>{renderContent}</Fragment>;
        });

        const navigationListUlClass = cn(
            'list-none',
            'p-0',
            'm-0',
            ulClassName
        );

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <nav className={navClassName} onClick={(e) => e.stopPropagation()}>
                <ul
                    ref={ref}
                    className={navigationListUlClass}
                    onScroll={onScroll}
                >
                    {renderList}
                </ul>
            </nav>
        );
    }
);

NavigationList.displayName = 'NavigationList';
