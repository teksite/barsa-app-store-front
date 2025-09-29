import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from "./ui/animated-modal";

interface ModalPropsTypes {
    trigger: React.ReactNode,
    content: React.ReactNode,
}

export function AnimatedModalDemo({trigger, content}: ModalPropsTypes) {
    return (
        <Modal>
            <ModalTrigger>
                {trigger}
            </ModalTrigger>
            <ModalBody>
                <ModalContent>
                    {content}
                </ModalContent>
            </ModalBody>
        </Modal>
    );
}