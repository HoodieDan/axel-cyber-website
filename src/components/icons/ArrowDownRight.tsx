type IArrowDownRightProps = React.SVGProps<SVGSVGElement>;

const ArrowDownRight = ({ className, ...rest }: IArrowDownRightProps) => {
    return (
        <svg
            width="105"
            height="105"
            viewBox="0 0 105 105"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M34.2627 34.8848L69.7863 70.4084"
                stroke="currentColor"
                stroke-width="4.56709"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M40.5225 70.6074L69.7861 70.4085L69.985 41.1449"
                stroke="currentColor"
                stroke-width="4.56709"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default ArrowDownRight;
