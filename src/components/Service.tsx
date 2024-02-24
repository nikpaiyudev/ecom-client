interface ServiceProps {
    icon: JSX.Element;
    title: string;
    description: string;
}

const Service = ({ icon, title, description }: ServiceProps) => {

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-blue-gray-300 rounded-full h-20 w-20 flex justify-center items-center">
                <div className="bg-black rounded-full h-14 w-14 flex justify-center items-center">
                    {icon}
                </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-6">
                <span className="uppercase text-black font-bold">{title}</span>
                <span>{description}</span>
            </div>
        </div>
    );
};

export default Service;