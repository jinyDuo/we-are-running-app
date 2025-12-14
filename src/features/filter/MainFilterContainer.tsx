import type {HTMLAttributes, ReactNode} from 'react';

type MainFilterContainerProps = HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
};

const MainFilterContainer = ({ children, className = '', ...props }: MainFilterContainerProps) => {
    return (
        <main className={`w-full flex flex-col ${className}`} {...props}>
            {children}
        </main>
    );
};

export default MainFilterContainer;