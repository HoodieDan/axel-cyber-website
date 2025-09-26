type IAddBusinessProps = React.SVGProps<SVGSVGElement>;

const AddBusiness = ({ className, ...rest }: IAddBusinessProps) => {
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
                d="M55.4987 70.9173V61.6673H46.2487V55.5006H55.4987V46.2506H61.6654V55.5006H70.9154V61.6673H61.6654V70.9173H55.4987ZM6.16536 61.6673V43.1673H3.08203V37.0007L6.16536 21.584H52.4154L55.4987 37.0007V43.1673H52.4154V52.4173H46.2487V43.1673H33.9154V61.6673H6.16536ZM12.332 55.5006H27.7487V43.1673H12.332V55.5006ZM6.16536 18.5007V12.334H52.4154V18.5007H6.16536ZM9.40286 37.0007H49.1779L47.3279 27.7507H11.2529L9.40286 37.0007Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default AddBusiness;
