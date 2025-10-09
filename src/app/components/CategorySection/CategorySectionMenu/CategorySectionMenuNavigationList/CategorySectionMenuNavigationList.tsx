import { CategorySectionMenuNavigationListItem } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationListItem';
import { categorySectionMenuNavigationListContent } from '@/CategorySection/categorySectionMockData';
import { CategorySectionMenuNavigationListSlider } from '@/CategorySection/CategorySectionMenu/CategorySectionMenuNavigationList/CategorySectionMenuNavigationListSlider';
import { NavigationList } from '@/core/NavigationList/NavigationList';
import clsx from 'clsx';
import { useState } from 'react';
import { useSlider } from '@/helpers/useSlider';

export const CategorySectionMenuNavigationList = () => {
    const [activeElementId, setActiveElementId] = useState(0);

    const {
        handleScroll,
        scrollElementRef,
        thumbRef,
        trackRef,
        handleArrowDownButtonClick,
        handleArrowUpButtonClick,
    } = useSlider<HTMLUListElement>('vertical');

    const categorySectionMenuNavigationListUlClassNameSm = clsx(
        'flex',
        'flex-wrap',
        'gap-5xl',
        'justify-center'
    );

    const categorySectionMenuNavigationListUlClassNameXl = clsx(
        'category-section__menu-navigation-list-desktop',
        'flex',
        'flex-col',
        'gap-11xl',
        'max-h-sm',
        'overflow-scroll',
        'pl-el-lg'
    );

    const categorySectionMenuNavigationListNavClassNameXl = clsx('w-full');

    return (
        <>
            <div className="xl:hidden">
                <NavigationList
                    renderListItem={({ id, href, text, isHighlighted }) => (
                        <CategorySectionMenuNavigationListItem
                            text={text}
                            href={href}
                            id={id}
                            setActiveElementId={setActiveElementId}
                            isHighlighted={isHighlighted}
                        />
                    )}
                    navigationListContent={
                        categorySectionMenuNavigationListContent
                    }
                    ulClassName={categorySectionMenuNavigationListUlClassNameSm}
                    highlightedElementId={activeElementId}
                />
            </div>
            <div className="hidden w-full xl:flex">
                <NavigationList
                    onScroll={handleScroll}
                    ref={scrollElementRef}
                    renderListItem={({ id, href, text, isHighlighted }) => (
                        <CategorySectionMenuNavigationListItem
                            text={text}
                            href={href}
                            id={id}
                            setActiveElementId={setActiveElementId}
                            isHighlighted={isHighlighted}
                        />
                    )}
                    navigationListContent={
                        categorySectionMenuNavigationListContent
                    }
                    ulClassName={categorySectionMenuNavigationListUlClassNameXl}
                    navClassName={
                        categorySectionMenuNavigationListNavClassNameXl
                    }
                    highlightedElementId={activeElementId}
                />
                <CategorySectionMenuNavigationListSlider
                    trackRef={trackRef}
                    thumbRef={thumbRef}
                    handleArrowDownButtonClick={handleArrowDownButtonClick}
                    handleArrowUpButtonClick={handleArrowUpButtonClick}
                />
            </div>
        </>
    );
};
