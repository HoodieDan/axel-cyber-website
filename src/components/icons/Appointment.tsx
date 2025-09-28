type IAppointmentProps = React.SVGProps<SVGSVGElement>;

const Appointment = ({ className, ...rest }: IAppointmentProps) => {
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
                d="M49.3333 6.16602V18.4993M24.6667 6.16602V18.4993M64.75 40.0827V36.9994C64.75 25.3721 64.75 19.5569 61.1363 15.9463C57.5227 12.3358 51.7106 12.3327 40.0833 12.3327H33.9167C22.2894 12.3327 16.4742 12.3327 12.8637 15.9463C9.25308 19.56 9.25 25.3721 9.25 36.9994V43.166C9.25 54.7933 9.25 60.6084 12.8637 64.219C16.4773 67.8296 22.2894 67.8327 33.9167 67.8327M9.25 30.8327H64.75"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M40.082 60.1237C40.082 60.1237 44.2384 61.6869 46.2487 67.832C46.2487 67.832 56.0444 52.4154 64.7487 49.332"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default Appointment;
