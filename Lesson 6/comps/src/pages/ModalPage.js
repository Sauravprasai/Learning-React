import {useState} from 'react';
import Modal from "../components/Modal";
import Button from '../components/Button';

function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <Button onClick={handleClose} secondary>I Accept</Button>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement that you have to accept
        </p>
    </Modal>

    return(
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
    )
}

export default ModalPage;