import { Rating as MaterialRating, RatingProps } from "@material-tailwind/react/components/Rating";

interface MaterialRatingProps extends RatingProps { }

const Rating = ({ value }: MaterialRatingProps) => {
    return <MaterialRating value={value} placeholder={'Rating For Product'} readonly={true} />

};

export default Rating;