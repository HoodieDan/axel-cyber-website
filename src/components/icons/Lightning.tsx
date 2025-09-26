type ILightningProps = React.SVGProps<SVGSVGElement>;

const Lightning = ({ className, ...rest }: ILightningProps) => {
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
            <g clip-path="url(#clip0_5696_8241)">
                <path
                    d="M20.9289 1.82275L21.3096 14.5646L31.8973 15.9651L19.0718 38.1759L18.6912 25.434L8.10341 24.0335L20.9289 1.82275Z"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_5696_8241">
                    <rect width="40" height="40" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Lightning;
