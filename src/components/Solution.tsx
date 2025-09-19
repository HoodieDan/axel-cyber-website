interface Props {
    title: string;
    description: string;
    imgUrl: string;
}

export default function Solution({ title, description, imgUrl }: Props) {
    return (
        <div className="bg-[#0a0332] rounded-xl px-10 py-12.5 flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-7.5 items-center">
                <img src={imgUrl} loading="lazy" className="w-13 h-13.5" alt={title} width={51.84} height={54} />
                <p className="text-center text-white text-3xl font-medium">{title}</p>
            </div>
            <p className="text-base text-center text-[#D5D5D5]">{description}</p>
        </div>
    );
}
