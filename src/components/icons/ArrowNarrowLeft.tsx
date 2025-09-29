type IArrowNarrowLeftProps = React.SVGProps<SVGSVGElement>;

const ArrowNarrowLeft = ({ className, ...rest }: IArrowNarrowLeftProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M20 12H4M4 12L10 18M4 12L10 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowNarrowLeft;
