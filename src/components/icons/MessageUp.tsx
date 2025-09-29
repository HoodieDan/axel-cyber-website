type IMessageUpProps = React.SVGProps<SVGSVGElement>;

const MessageUp = ({ className, ...rest }: IMessageUpProps) => {
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
                d="M24.6667 27.7507H49.3333M24.6667 40.084H43.1667M36.9692 57.3692L24.6667 64.7506V55.5006H18.5C16.0467 55.5006 13.694 54.5261 11.9593 52.7914C10.2246 51.0567 9.25 48.7039 9.25 46.2507V21.584C9.25 19.1307 10.2246 16.778 11.9593 15.0432C13.694 13.3085 16.0467 12.334 18.5 12.334H55.5C57.9533 12.334 60.306 13.3085 62.0407 15.0432C63.7754 16.778 64.75 19.1307 64.75 21.584V38.5423M58.5833 67.834V49.334M58.5833 49.334L67.8333 58.584M58.5833 49.334L49.3333 58.584"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MessageUp;
