import { Text } from '@/core/Text/Text';

export const CategorySectionContentFallback = () => {
    return (
        <>
            <div className="flex md:hidden justify-center items-center p-el-3xl bg-darken-white rounded-md w-full">
                <Text
                    fontSize={'xl'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'No categories available'}
                />
            </div>
            <div className="hidden md:flex xl:hidden justify-center items-center p-el-3xl bg-darken-white rounded-md w-full">
                <Text
                    fontSize={'3xl'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'No categories available'}
                />
            </div>
            <div className="hidden xl:flex justify-center items-center p-el-3xl bg-darken-white rounded-md w-full">
                <Text
                    fontSize={'5xl'}
                    fontFamily={'opensans'}
                    color={'absolute-black'}
                    content={'No categories available'}
                />
            </div>
        </>
    );
};
