type IWavyWheelProps = React.SVGProps<SVGSVGElement>;

const WavyWheel = ({ className, ...rest }: IWavyWheelProps) => {
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
            <g clip-path="url(#clip0_5956_12458)">
                <path
                    d="M37 64.75C52.3259 64.75 64.75 52.3259 64.75 37C64.75 21.6741 52.3259 9.25 37 9.25C21.6741 9.25 9.25 21.6741 9.25 37C9.25 52.3259 21.6741 64.75 37 64.75Z"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M9.25 37.4654C31.9559 20.2113 42.0441 53.7888 64.75 36.5347"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M51.2781 60.7943C24.9734 49.7608 49.0177 24.2308 22.7188 13.1973"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M50.4706 12.7363C54.055 41.0298 19.9456 32.9765 23.53 61.2844"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_5956_12458">
                    <rect width="74" height="74" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default WavyWheel;
