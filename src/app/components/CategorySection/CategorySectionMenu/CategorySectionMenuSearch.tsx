import { IconButton } from '@/core/Button/IconButton';
import { useRef, useState } from 'react';
import { useCategorySectionContentStore } from '../categorySectionContentStore';
import { categorySectionContent } from '../categorySectionMockData';

export const CategorySectionMenuSearch = () => {
    const [inputValue, setInputValue] = useState('');

    const setStore = useCategorySectionContentStore((s) => s.setStore);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleCategorySectionMenuSearchButtonClick = () => {
        inputRef.current?.focus();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        if (value === '') {
            setStore(categorySectionContent);
        } else {
            setStore(
                categorySectionContent.filter((item) =>
                    item.text.toLowerCase().includes(value.toLocaleLowerCase())
                )
            );
        }
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
                ref={inputRef}
                type="text"
                placeholder="Search"
                className="outline-none font-normal text-lg font-roboto p-el-sm pl-0 bg-transparent border-0 w-full md:p-el-xl md:pl-0 md:text-xl md:leading-2xl xl:p-el-lg xl:pl-0"
                value={inputValue}
                onChange={handleInputChange}
            />
        </div>
    );
};
