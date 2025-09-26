type ICheckAllProps = React.SVGProps<SVGSVGElement>;

const CheckAll = ({ className, ...rest }: ICheckAllProps) => {
    return (
        <svg
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M19.706 62.3913L50.2957 12.3395L42.4008 7.51562L17.2871 48.6087L6.21484 39.7472L0.433594 46.9715L19.706 62.3913ZM73.9988 13.875H55.4988V23.125H73.9988V13.875ZM73.9988 32.375H46.2488V41.625H73.9988V32.375ZM73.9988 50.875V60.125H36.9988V50.875H73.9988Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default CheckAll;
