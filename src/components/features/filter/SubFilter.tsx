const SubFilter = () => {
    return (
        <div className='flex gap-[8px] w-full pt-[20px] py-[32px] px-[24px]'>
            <button className='flex h-[35px] flex-1 items-center justify-center py-[8px] px-[12px] border-[1px] rounded-full text-white bg-blue10'>
                <span>전체</span>
            </button>
            <button className='flex h-[35px] flex-1 items-center justify-center py-[8px] px-[12px] border-[1px] rounded-full text-black'>
                <span>접수중</span>
            </button>
            <button className='flex h-[35px] flex-1 items-center justify-center py-[8px] px-[12px] border-[1px] rounded-full text-black'>
                <span>지난대회</span>
            </button>
        </div>
    );
};

export default SubFilter;