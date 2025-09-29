type IArrowUpRightProps = React.SVGProps<SVGSVGElement>;

const ArrowUpRight = ({ className, ...rest }: IArrowUpRightProps) => {
    return (
        <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <g clipPath="url(#clip0_1520_3785)">
                <path
                    d="M4.25 11.25L11.75 3.75"
                    stroke="currentColor"
                    strokeWidth="0.9375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.65625 3.75H11.75V9.84375"
                    stroke="currentColor"
                    strokeWidth="0.9375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1520_3785">
                    <rect width="15" height="15" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default ArrowUpRight;
