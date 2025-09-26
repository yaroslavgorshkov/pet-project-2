import { specialPackageSectionMainItemMockData } from '@/SpecialPackageSection/SpecialPackageSectionContent/specialPackageSectionMockData';
import { SpecialPackageSectionContentMainItemButton } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItemButton';
import { SpecialPackageSectionContentMainItemDescription } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItemDescription';
import { SpecialPackageSectionContentMainItemDetails } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItemDetails';
import { SpecialPackageSectionContentMainItemImage } from '@/SpecialPackageSection/SpecialPackageSectionContent/SpecialPackageSectionContentMainItem/SpecialPackageSectionContentMainItemImage';

export const SpecialPackageSectionContentMainItem = () => {
    const { alt, description, imageSrc, name, price, rating } =
        specialPackageSectionMainItemMockData;

    return (
        <>
            <article className="flex flex-col gap-2xl md:hidden">
                <SpecialPackageSectionContentMainItemDetails
                    name={name}
                    price={price}
                    rating={rating}
                />
                <SpecialPackageSectionContentMainItemButton />
                <SpecialPackageSectionContentMainItemImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <SpecialPackageSectionContentMainItemDescription
                    description={description}
                />
            </article>
            <article className="hidden md:flex flex-col gap-2xl lg:hidden">
                <SpecialPackageSectionContentMainItemImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <SpecialPackageSectionContentMainItemDetails
                    name={name}
                    price={price}
                    rating={rating}
                />
                <SpecialPackageSectionContentMainItemButton />
                <SpecialPackageSectionContentMainItemDescription
                    description={description}
                />
            </article>
            <article className="hidden lg:flex gap-md">
                <SpecialPackageSectionContentMainItemImage
                    alt={alt}
                    imageSrc={imageSrc}
                />
                <div className="flex flex-col justify-between">
                    <SpecialPackageSectionContentMainItemDetails
                        name={name}
                        price={price}
                        rating={rating}
                    />
                    <SpecialPackageSectionContentMainItemButton />
                    <SpecialPackageSectionContentMainItemDescription
                        description={description}
                    />
                </div>
            </article>
        </>
    );
};
