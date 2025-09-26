import { IconButton } from '@/core/Button/IconButton';

export const CategorySectionMenuSearch = () => {
    const handleCategorySectionMenuSearchButtonClick = () => {
        // TODO: add CategorySectionMenuSearchButton click function
    };

    return (
        <div className="flex gap-md rounded-md pl-el-md xl:pl-el-xl bg-darken-white w-full md:w-el-5xl xl:w-el-3xl">
            <IconButton
                iconType={'search-small'}
                iconFillColor={'gray'}
                iconSize={'2xl'}
                onClick={handleCategorySectionMenuSearchButtonClick}
            />
            <input
                type="text"
                placeholder="Search"
                className="outline-none font-normal text-lg font-roboto p-el-sm pl-0 bg-transparent border-0 w-full md:p-el-xl md:pl-0 md:text-xl md:leading-2xl xl:p-el-lg xl:pl-0"
            />
        </div>
    );
};
