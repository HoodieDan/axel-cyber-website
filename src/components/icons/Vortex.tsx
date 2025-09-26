type IVortexProps = React.SVGProps<SVGSVGElement>;

const Vortex = ({ className, ...rest }: IVortexProps) => {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0032 37.5C22.6871 37.5 27.2761 34 27.2761 20C27.2761 6 22.6871 2.5 20.0032 2.5C17.3195 2.5 12.7305 6.23585 12.7305 20C12.7305 33.7642 17.3195 37.5 20.0032 37.5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.25739 29.1661C5.5993 31.5097 11.043 33.6836 23.6398 26.3503C36.2364 19.017 37.0912 13.1764 35.7493 10.8328C34.4073 8.4892 28.7515 6.43877 16.367 13.6486C3.98244 20.8584 2.9155 26.8225 4.25739 29.1661Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.25544 10.8328C2.91356 13.1764 3.76827 19.017 16.3651 26.3503C28.9618 33.6836 34.4054 31.5097 35.7473 29.1661C37.0892 26.8225 36.0223 20.8584 23.6377 13.6486C11.2532 6.43877 5.59736 8.4892 4.25544 10.8328Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default Vortex;
