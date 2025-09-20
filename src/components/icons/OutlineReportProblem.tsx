type IOutlineReportProblemProps = React.SVGProps<SVGSVGElement>;

const OutlineReportProblem = ({ className, ...rest }: IOutlineReportProblemProps) => {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M8.00033 3.99398L13.0203 12.6673H2.98033L8.00033 3.99398ZM8.00033 1.33398L0.666992 14.0007H15.3337L8.00033 1.33398ZM8.66699 10.6673H7.33366V12.0007H8.66699V10.6673ZM8.66699 6.66732H7.33366V9.33398H8.66699V6.66732Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default OutlineReportProblem;
