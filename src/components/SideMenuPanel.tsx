export interface MenuListItems {
    text: string;
    id: number;
}

interface SideMenuPanelProps {
    listItems: MenuListItems[];
}

const SideMenuPanel = ({ listItems }: SideMenuPanelProps) => {

    return (
        <ul className="flex flex-col gap-6 text-base h-full  w-[20%] p-10">
            {
                listItems.map(item => <li className="cursor-pointer hover:font-medium" key={item.id}>{item.text}</li>)
            }
        </ul>
    );
};

export default SideMenuPanel;