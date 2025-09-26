import { FooterMainBlockContentData } from '@/Footer/footerData';
import { Text } from '@/core/Text/Text';
import { Fragment } from 'react';

type FooterContentMainBlockItemProps = {
    footerContentMainBlockItemData: FooterMainBlockContentData;
};

export const FooterContentMainBlockItem = ({
    footerContentMainBlockItemData: { mainBlockItemName, mainBlockItemContent },
}: FooterContentMainBlockItemProps) => {
    const itemData = mainBlockItemContent.map(
        ({
            mainBlockItemContentItemHref,
            mainBlockItemContentItemId,
            mainBlockItemContentItemName,
        }) => {
            return (
                <Fragment key={mainBlockItemContentItemId}>
                    <a
                        className="flex flex-col md:hidden"
                        href={mainBlockItemContentItemHref}
                    >
                        <Text
                            fontSize={'sm'}
                            fontFamily={'opensans'}
                            color={'lapis'}
                            content={mainBlockItemContentItemName}
                        />
                    </a>
                    <a
                        className="hidden md:flex gap-sm flex-col"
                        href={mainBlockItemContentItemHref}
                    >
                        <Text
                            fontSize={'lg'}
                            fontFamily={'opensans'}
                            color={'lapis'}
                            content={mainBlockItemContentItemName}
                        />
                    </a>
                </Fragment>
            );
        }
    );

    return (
        <div className="flex flex-col gap-2xl">
            <Text
                fontSize={'lg'}
                fontFamily={'opensans'}
                color={'lapis'}
                content={mainBlockItemName}
                fontWeight={'bold'}
            />
            <div className="flex flex-col gap-sm">{itemData}</div>
        </div>
    );
};
