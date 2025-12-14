import type {ReactNode} from 'react';

const Card = ({ children }: { children?: ReactNode }) => {
    return <div className='w-full px-[16px] max-w-[290px] rounded-[12px] shadow-custom-card flex border-[1px] border-black'>
        <div className='flex py-[20px] justify-between w-full'>
            <div className='w-full flex gap-[12px]'>
                <div className='w-[8px] h-[25px] bg-green10'/>
                <div className='w-full'>
                    <h2>09/10</h2>
                    <h3>금</h3>
                </div>
            </div>
            <div className='flex w-full rounded-full bg-green10 items-center justify-center border-[1px] border-black'>
                <div className='w-[7px] h-[8px] bg-black rounded-full'/>
                <span>접수중</span>
            </div>
        </div>
        {children}
    </div>;
};

export default Card;