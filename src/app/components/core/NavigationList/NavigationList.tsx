import { Fragment, ReactNode } from 'react';
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
};

export const NavigationList = ({
    renderListItem,
    highlightedElementId,
    navigationListContent,
    navClassName = '',
    ulClassName = '',
}: NavigationListProps) => {
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

    const navigationListUlClass = cn('list-none', 'p-0', 'm-0', ulClassName);

    return (
        <nav className={navClassName}>
            <ul className={navigationListUlClass}>{renderList}</ul>
        </nav>
    );
};
