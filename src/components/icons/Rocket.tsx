import { SVGProps } from "react";

type IRocketProps = SVGProps<SVGSVGElement>;

const Rocket = ({ className, ...rest }: IRocketProps) => {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...rest}
        >
            <path
                d="M11.8013 6.98949L13.2869 5.50392C14.9596 3.8312 17.1495 3.13737 19.4671 3.02399C20.3686 2.97989 20.8193 2.95784 21.1807 3.31928C21.5422 3.68071 21.5201 4.13143 21.476 5.03289C21.3626 7.3505 20.6688 9.54042 18.9961 11.2131L17.5105 12.6987C16.2871 13.9221 15.9393 14.27 16.1961 15.597C16.4496 16.6107 16.6949 17.5923 15.9578 18.3294C15.0637 19.2235 14.2481 19.2235 13.354 18.3294L6.17058 11.146C5.27649 10.2519 5.27646 9.4363 6.17058 8.54219C6.90767 7.80509 7.88929 8.05044 8.90297 8.30389C10.23 8.56073 10.5779 8.21289 11.8013 6.98949Z"
                stroke="#3084DA"
                stroke-width="1.5"
                stroke-linejoin="round"
            />
            <path
                d="M16.9961 7.5H17.0051"
                stroke="#3084DA"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path d="M2.5 22L7.5 17" stroke="#3084DA" stroke-width="1.5" stroke-linecap="round" />
            <path d="M8.5 22L10.5 20" stroke="#3084DA" stroke-width="1.5" stroke-linecap="round" />
            <path d="M2.5 16L4.5 14" stroke="#3084DA" stroke-width="1.5" stroke-linecap="round" />
        </svg>
    );
};

export default Rocket;
