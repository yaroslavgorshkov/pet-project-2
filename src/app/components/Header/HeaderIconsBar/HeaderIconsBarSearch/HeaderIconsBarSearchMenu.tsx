/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Text } from '@/core/Text/Text';
import { createPortal } from 'react-dom';
import { IconButton } from '@/core/Button/IconButton';
import { useForm } from 'react-hook-form';
import { searchData } from '@/Header/HeaderIconsBar/HeaderIconsBarSearch/searchData';

type HeaderIconsBarSearchMenuProps = {
    setIsHeaderIconsBarSearchMenuOpen: React.Dispatch<
        React.SetStateAction<boolean>
    >;
};

type HeaderIconsBarSearchMenuFormData = {
    search: string;
};

export const HeaderIconsBarSearchMenu = ({
    setIsHeaderIconsBarSearchMenuOpen,
}: HeaderIconsBarSearchMenuProps) => {
    const { register, watch } = useForm<HeaderIconsBarSearchMenuFormData>();
    const searchValue = watch('search') ?? '';

    const filteredSearchData = searchData.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    const filteredSearchDataList = filteredSearchData.map(
        ({ category, href, id, text }) => {
            const itemFullName = `${category}: ${text}`;
            return (
                <li key={id} className="flex gap-sm">
                    <a href={href} className="truncate w-4/5">
                        <div className="md:hidden">
                            <Text
                                fontSize={'sm'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={itemFullName}
                            />
                        </div>
                        <div className="hidden md:block">
                            <Text
                                fontSize={'md'}
                                fontFamily={'opensans'}
                                color={'lapis'}
                                content={itemFullName}
                            />
                        </div>
                    </a>
                </li>
            );
        }
    );

    const isFilteredSearchDataListEmpty = filteredSearchDataList.length === 0;
    const isSearchValueEmpty = !searchValue;

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsHeaderIconsBarSearchMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [setIsHeaderIconsBarSearchMenuOpen]);

    const handleHeaderIconsBarSearchMenuBackgroundClick = () => {
        setIsHeaderIconsBarSearchMenuOpen((prev) => !prev);
    };

    const handleHeaderIconsBarSearchMenuCloseButtonClick = () => {
        handleHeaderIconsBarSearchMenuBackgroundClick();
    };

    return createPortal(
        <motion.div
            className="fixed inset-0 bg-black bg-opacity-20 z-50 border-0 backdrop-blur-sm flex items-center justify-center p-el-3xl lg:p-el-8xl cursor-default"
            role="button"
            tabIndex={0}
            onClick={handleHeaderIconsBarSearchMenuBackgroundClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="p-el-sm bg-white shadow-xl flex justify-center rounded-xl w-full max-w-md md:max-w-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col gap-sm w-full max-w-lg">
                    <div className="flex gap-lg items-center">
                        <form className="flex-1">
                            <input
                                type="text"
                                placeholder="Product name..."
                                className="bg-transparent border rounded-sm p-el-xs font-opensans text-md w-full"
                                {...register('search')}
                            />
                        </form>
                        <IconButton
                            iconType={'close-icon'}
                            iconFillColor={'lapis'}
                            iconSize={'3xl'}
                            onClick={
                                handleHeaderIconsBarSearchMenuCloseButtonClick
                            }
                        />
                    </div>
                    <ul className="list-none m-0 p-0 flex flex-col gap-sm overflow-auto h-dvh max-h-xs">
                        {isSearchValueEmpty ? null : isFilteredSearchDataListEmpty ? (
                            <div className="w-full flex justify-center">
                                <Text
                                    fontSize={'xl'}
                                    fontFamily={'opensans'}
                                    color={'red'}
                                    content={'No matches!'}
                                />
                            </div>
                        ) : (
                            filteredSearchDataList
                        )}
                    </ul>
                </div>
            </div>
        </motion.div>,
        document.body
    );
};
