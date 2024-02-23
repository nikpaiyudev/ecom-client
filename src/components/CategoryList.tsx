import { ClockIcon, ComputerDesktopIcon, PhoneIcon , CameraIcon, MusicalNoteIcon, PuzzlePieceIcon } from "@heroicons/react/24/outline";
import CategoryButton from "./Buttons/CategoryButton";


const CategoryList = () => {

    const classNames = 'h-8 w-8 text-black';
    const hoverClassNames =' h-8 w-8 text-white';

    return (
        <div className="grid grid-cols-6 gap-4 w-full">
            <CategoryButton title="Phones" icon={<PhoneIcon className={classNames}  />} hoverIcon={<PhoneIcon className={hoverClassNames} />} />
            <CategoryButton title="Computers" icon={<ComputerDesktopIcon className={classNames} />} hoverIcon={<ComputerDesktopIcon className={hoverClassNames} />} />
            <CategoryButton title="SmartWatch" icon={<ClockIcon className={classNames} />} hoverIcon={<ClockIcon className={hoverClassNames} />}/>
            <CategoryButton title="Camera" icon={<CameraIcon className={classNames} />} hoverIcon={<CameraIcon className={hoverClassNames} />}/> 
            <CategoryButton title="HeadPhones" icon={<MusicalNoteIcon className={classNames} />} hoverIcon={<MusicalNoteIcon className={hoverClassNames} />} />
            <CategoryButton title="Gaming" icon={<PuzzlePieceIcon className={classNames} />} hoverIcon={<PuzzlePieceIcon className={hoverClassNames} />}/>
        </div>
    );
};

export default CategoryList;