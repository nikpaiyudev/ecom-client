import React from "react";
import {
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { size } from "@material-tailwind/react/types/components/dialog";


interface ModalProps {
    dialogHeader: string;
    children: JSX.Element;
    size?: size;
    isOpen: boolean;
    handleOpen: () => void;
}

const Modal = ({ children, dialogHeader, size = 'xs', isOpen, handleOpen }: ModalProps) => {

    return (
        <Dialog size={size} open={isOpen} handler={handleOpen} placeholder={dialogHeader}>
            <DialogHeader placeholder={dialogHeader}>
                {dialogHeader}
            </DialogHeader>
            <DialogBody placeholder={dialogHeader}>
                {children}
            </DialogBody>
        </Dialog>
    );
};

export default Modal;