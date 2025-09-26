import { Text } from '@/core/Text/Text';
import clsx from 'clsx';

type CategorySectionMenuNavigationListItem = {
    id: number;
    text: string;
    href: string;
    isHighlighted: boolean;
    setActiveElementId: (id: number) => void;
};

export const CategorySectionMenuNavigationListItem = ({
    text,
    href,
    id,
    isHighlighted,
    setActiveElementId,
}: CategorySectionMenuNavigationListItem) => {
    const handleCategorySectionMenuNavigationListItemClick = () => {
        setActiveElementId(id);
    };

    const categorySectionNavigationListItemTextClass = clsx(
        isHighlighted
            ? ['font-bold', 'after:top-nl-hover', 'after:opacity-100']
            : [
                  'hover:font-bold',
                  'after:top-nl',
                  'after:opacity-0',
                  'after:transition-all',
                  'after:duration-200',
                  'hover:after:opacity-100',
                  'hover:after:top-nl-hover',
              ],
        'relative',
        'after:absolute',
        'after:left-0',
        'after:bg-lapis',
        'after:w-full',
        'after:h-slider-sm'
    );

    return (
        <li>
            <a
                href={href}
                onClick={handleCategorySectionMenuNavigationListItemClick}
            >
                <Text
                    fontSize="3xl"
                    fontFamily="roboto"
                    color="lapis"
                    content={text}
                    className={categorySectionNavigationListItemTextClass}
                />
            </a>
        </li>
    );
};
