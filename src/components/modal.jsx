import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const portalRoot = typeof document !== `undefined` ? document.getElementById('modal') : null;
const ModalDiv = typeof document !== `undefined` ? document.createElement('div') : null;

export default function Modal({ children, isOpen }) {
    useEffect(() => {
        portalRoot.appendChild(ModalDiv);
        return () => {
            portalRoot.removeChild(ModalDiv);
        }
    }, []);
    if (isOpen && portalRoot && ModalDiv) {
        return createPortal(children, ModalDiv);
    }
    return null;
}
