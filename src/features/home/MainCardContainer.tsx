import type {HTMLAttributes, ReactNode} from 'react';

type MainCardContainerProps = HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
};

const MainCardContainer = ({ children, className = '', ...props }: MainCardContainerProps) => {
    return (
        <section className={`flex flex-col gap-[34px] items-center justify-center ${className}`} {...props}>
            {children}
        </section>
    );
};

export default MainCardContainer;