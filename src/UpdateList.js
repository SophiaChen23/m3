import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

function UpdateList(props) {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () =>setShow(true);
        return (
            <React.Fragment>
                <Button
                    variant = "primary"
                    onClick = {(event) =>{
                            handleShow();
                            props.getList(event, props.elementId);
                        }}
                >
                        Update
                </Button>
                {/*<Button variant = "primary" onClick = {handleShow}>*/}
                {/*    update*/}
                {/*</Button>*/}
                <Modal show = {show} onHide = {handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type = "text"
                            placeholder = "Title"
                            name = "title"
                            value = {props.singledata.title}
                            onChange={ props.handleChange}
                            className="d-block my-3"
                            >
                        </input>
                        <input
                            type = "text"
                            placeholder = "Author"
                            name = "author"
                            value = {props.singledata.author}
                            onChange={ props.handleChange}
                            className="d-block my-3"
                            >
                        </input>
                        </Modal.Body>
                    <Modal.Footer>
                        <Button variant = "secondary" onclick = {handleClose}>
                            Close
                        </Button>
                        <Button
                            variant = "primary"
                            onClick = {(event) => {
                                handleClose();
                                props.updateList(event, props.elementId);
                            }}
                            >
                            Update
                        </Button>



                    </Modal.Footer>

                </Modal>
            </React.Fragment>
        )

}
export default UpdateList;
