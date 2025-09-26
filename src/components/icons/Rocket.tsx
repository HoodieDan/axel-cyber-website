type IRocketProps = React.SVGProps<SVGSVGElement>;

const Rocket = ({ className, ...rest }: IRocketProps) => {
    return (
        <svg
            width="71"
            height="70"
            viewBox="0 0 71 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <g clip-path="url(#clip0_5956_12476)">
                <path
                    d="M52.9246 30.8682C59.4871 24.3057 59.8973 16.4991 59.6922 13.0182C59.6581 12.4877 59.4319 11.9878 59.056 11.6119C58.6801 11.2359 58.1801 11.0098 57.6496 10.9757C54.1688 10.7706 46.3676 11.1753 39.7996 17.7432L22.543 34.9999L35.668 48.1249L52.9246 30.8682Z"
                    stroke="currentColor"
                    stroke-width="2.36486"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M37.8558 19.6875H20.9984C20.419 19.6878 19.8634 19.9179 19.4535 20.3273L10.0609 29.7199C9.77411 30.0073 9.57298 30.3689 9.48001 30.7641C9.38703 31.1593 9.40588 31.5726 9.53444 31.9577C9.663 32.3428 9.89619 32.6845 10.2079 32.9446C10.5197 33.2047 10.8976 33.373 11.2996 33.4305L22.5433 35"
                    stroke="currentColor"
                    stroke-width="2.36486"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M50.9805 32.8125V49.6699C50.9802 50.2493 50.7501 50.8049 50.3406 51.2148L40.948 60.6074C40.6606 60.8942 40.2991 61.0953 39.9039 61.1883C39.5087 61.2813 39.0954 61.2624 38.7103 61.1339C38.3252 61.0053 37.9834 60.7721 37.7233 60.4604C37.4632 60.1486 37.295 59.7707 37.2375 59.3687L35.668 48.125"
                    stroke="currentColor"
                    stroke-width="2.36486"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M26.5242 51.3559C25.466 53.6773 21.9004 59.0613 11.6055 59.0613C11.6055 48.7664 16.9895 45.2008 19.3109 44.1426"
                    stroke="currentColor"
                    stroke-width="2.36486"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_5956_12476">
                    <rect width="70" height="70" fill="currentColor" transform="translate(0.667969)" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default Rocket;
