type IArrowNarrowUpRightProps = React.SVGProps<SVGSVGElement>;

const ArrowNarrowUpRight = ({ className, ...rest }: IArrowNarrowUpRightProps) => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M31.8752 65.2102L68.1249 34.7931M68.1249 34.7931L43.1249 32.6059M68.1249 34.7931L65.9376 59.7931"
                stroke="currentColor"
                strokeWidth="5.91507"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowNarrowUpRight;
