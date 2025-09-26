import { Text } from '@/core/Text/Text';
import { cn } from '@/helpers/cn';

type HeaderNavigationListItemProps = {
    id: number;
    text: string;
    href: string;
    isHighlighted: boolean;
    setActiveElementId: (id: number) => void;
};

export const HeaderNavigationListItem = ({
    id,
    text,
    href,
    isHighlighted = false,
    setActiveElementId,
}: HeaderNavigationListItemProps) => {
    const handleHeaderNavigationListItemClick = () => {
        setActiveElementId(id);
    };

    const headerNavigationListItemTextClass = cn(
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
            <a href={href} onClick={handleHeaderNavigationListItemClick}>
                <Text
                    fontSize="xl"
                    fontFamily="playfair"
                    color="lapis"
                    content={text}
                    className={headerNavigationListItemTextClass}
                />
            </a>
        </li>
    );
};
