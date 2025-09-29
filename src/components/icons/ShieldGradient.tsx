type IShieldGradientProps = React.SVGProps<SVGSVGElement>;

const ShieldGradient = ({ className, ...rest }: IShieldGradientProps) => {
    return (
        <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M3.16797 3.73333L8.56797 2V14C4.71064 12.4 3.16797 9.33333 3.16797 7.6V3.73333Z"
                fill="url(#paint0_linear_5645_26524)"
                fillOpacity="0.91"
            />
            <path
                d="M13.9 3.73333L8.5 2V14C12.3573 12.4 13.9 9.33333 13.9 7.6V3.73333Z"
                fill="url(#paint1_linear_5645_26524)"
                fillOpacity="0.91"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_5645_26524"
                    x1="7.1333"
                    y1="1.16"
                    x2="3.14597"
                    y2="13.8647"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.02" stopColor="#0000FF" />
                    <stop offset="0.08" stopColor="#007AFF" stopOpacity="0.9" />
                    <stop offset="0.16" stopColor="#007AFF" stopOpacity="0.93" />
                    <stop offset="0.42" stopColor="#0094FF" />
                    <stop offset="0.68" stopColor="#0038FF" />
                    <stop offset="0.9" stopColor="#0500FF" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_5645_26524"
                    x1="12.4653"
                    y1="1.16"
                    x2="8.478"
                    y2="13.8647"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.02" stop-color="#0000FF" />
                    <stop offset="0.08" stop-color="#007AFF" stop-opacity="0.9" />
                    <stop offset="0.16" stop-color="#007AFF" stop-opacity="0.93" />
                    <stop offset="0.42" stop-color="#0094FF" />
                    <stop offset="0.68" stop-color="#0038FF" />
                    <stop offset="0.9" stop-color="#0500FF" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default ShieldGradient;
