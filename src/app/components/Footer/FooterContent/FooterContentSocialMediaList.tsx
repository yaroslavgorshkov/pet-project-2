import { IconButton } from '@/core/Button/IconButton';
import { footerSocialMediaContent } from '@/Footer/footerData';

export const FooterContentSocialMediaList = () => {
    const footerContentSocialMediaList = footerSocialMediaContent.map(
        ({ id, buttonType, href }) => {
            return (
                <a key={id} href={href}>
                    <IconButton
                        iconType={buttonType}
                        iconFillColor={'lapis'}
                        iconSize={'5xl'}
                    />
                </a>
            );
        }
    );

    return (
        <div className="flex gap-2xl w-full">
            {footerContentSocialMediaList}
        </div>
    );
};
