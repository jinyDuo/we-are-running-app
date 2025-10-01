import type {HTMLAttributes, ReactNode} from 'react';

type MainCardContainerProps = HTMLAttributes<HTMLElement> & {
    children?: ReactNode;
};

const MainCardContainer = ({ children, className = '', ...props }: MainCardContainerProps) => {
    return (
        <section className={className} {...props}>
            {children}
        </section>
    );
};

export default MainCardContainer;