import React from 'react';

const MainFilter = () => {
    return (
        <section className='w-full px-[24px] pt-[24px]'>
         <div className='w-full px-[12px] py-[20px] bg-white rounded-[12px] border-[1px] border-black'>
             <div className='flex flex-col gap-[12px]'>
                 <h3>지역</h3>
                 <div className='flex gap-[8px]'>
                     <div className='flex items-center py-[7px] px-[12px] border-[1px] rounded-full text-white bg-blue10'>
                         <span>전체</span>
                     </div>
                     <div className='flex items-center py-[7px] px-[12px] border-[1px] rounded-full text-black'>
                         <span>수도권</span>
                     </div>
                     <div className='flex items-center py-[7px] px-[12px] border-[1px] rounded-full text-black'>
                         <span>비수도권</span>
                     </div>
                 </div>
             </div>
                <hr className='border-[#DEDEDE] my-[20px]' />
             <div className='flex flex-col gap-[12px]'>
                 <h3>지역</h3>
                 <div className='flex gap-[8px]'>
                     <button className='flex items-center py-[7px] px-[12px] border-[1px] rounded-full text-white bg-blue10'>
                         <span>전체</span>
                     </button>
                     <button className='flex items-center py-[7px] px-[12px] border-[1px] rounded-full text-black'>
                         <span>풀</span>
                     </button>
                     <button className='flex items-center py-[7px] px-[12px] border-[1px] rounded-full text-black'>
                         <span>하프</span>
                     </button>
                     <button className='flex items-center py-[7px] px-[12px] border-[1px] rounded-full text-black'>
                         <span>10KM</span>
                     </button>
                     <button className='flex items-center py-[7px] px-[12px] border-[1px] rounded-full text-black'>
                         <span>5KM</span>
                     </button>
                 </div>
             </div>
         </div>
        </section>
    );
};

export default MainFilter;