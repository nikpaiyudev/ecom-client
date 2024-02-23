import { Rating as MaterialRating } from "@material-tailwind/react/components/Rating";


const Rating = () => {
    return <MaterialRating value={4} placeholder={'Rating For Product'} readonly={true} />
    
};

export default Rating;