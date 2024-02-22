interface SearchBarInput {
    placeholder?: string;
    value?: string;
}

const SearchBarInput = ({ placeholder, value }: SearchBarInput) => {

    return (
        <input className="bg-[#EFF0F6] outline-none pl-4 border-none rounded h-10 w-60 text-sm" placeholder={placeholder} value={value} />
    );
};

export default SearchBarInput;