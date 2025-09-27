type ISystemSumProps = React.SVGProps<SVGSVGElement>;

const SystemSum = ({ className, ...rest }: ISystemSumProps) => {
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
                d="M47.0044 47.4959C32.0934 62.4069 15.3077 69.7915 9.50799 63.9917C3.71133 58.195 11.0959 41.4094 26.0038 26.4984C40.9148 11.5874 57.7036 4.1997 63.5033 9.99945C69.3 15.7961 61.9154 32.5849 47.0044 47.4959Z"
                stroke="currentColor"
                stroke-width="4"
            />
            <path
                d="M26.006 47.4959C40.917 62.4069 57.7027 69.7915 63.5025 63.9917C69.2991 58.195 61.9145 41.4094 47.0066 26.4984C32.0925 11.5874 15.3038 4.1997 9.50405 9.99945C3.70738 15.7961 11.092 32.5849 26.003 47.4959H26.006Z"
                stroke="currentColor"
                stroke-width="4"
            />
            <path d="M37 37H37.0123V37.0123H37V37Z" stroke="currentColor" stroke-width="4" />
        </svg>
    );
};

export default SystemSum;
