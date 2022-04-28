import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const GameTable = (props) => {
    return ( 
        

        <table>
            <thead>
                <th> Game Name </th>
            </thead>
            <tbody>
                {props.searchedGames.map((game,index)=>{
                    return(
                        <tr key={index}>
                            <td> {game.name} </td>
                            <td>
                                <Button onClick = {() => props.setModal(true)}> More Info </Button>
                            </td>
                            <Modal
                                {...props}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                                >
                                <Modal.Header closeButton>
                                    <Modal.Title id="contained-modal-title-vcenter">
                                    Modal heading
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <h4>Centered Modal</h4>
                                    <p>
                                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                                    consectetur ac, vestibulum at eros.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button onClick={props.onHide}>Close</Button>
                                </Modal.Footer>
                            </Modal>
                        </tr>
                    )
                 })}
            </tbody>
        </table>
     );
}
 
export default GameTable;