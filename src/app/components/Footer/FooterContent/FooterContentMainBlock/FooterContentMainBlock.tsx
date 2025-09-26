import { FooterContentMainBlockItem } from './FooterContentMainBlockItem';
import {
    footerMainBlockContentHelpData,
    footerMainBlockContentLegalStuffData,
    footerMainBlockContentMyAccountData,
    footerMainBlockContentShopData,
} from '@/Footer/footerData';

export const FooterContentMainBlock = () => {
    return (
        <div className="grid grid-cols-2 gap-x-2xl gap-y-12xl w-full md:gap-12xl lg:flex lg:justify-between lg:gap-0">
            <FooterContentMainBlockItem
                footerContentMainBlockItemData={
                    footerMainBlockContentMyAccountData
                }
            />
            <FooterContentMainBlockItem
                footerContentMainBlockItemData={footerMainBlockContentHelpData}
            />
            <FooterContentMainBlockItem
                footerContentMainBlockItemData={footerMainBlockContentShopData}
            />
            <FooterContentMainBlockItem
                footerContentMainBlockItemData={
                    footerMainBlockContentLegalStuffData
                }
            />
        </div>
    );
};
