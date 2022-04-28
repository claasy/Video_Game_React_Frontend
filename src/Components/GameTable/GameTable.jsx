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
                            <td>
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
                                       <table class="table">
                                           <thead>
                                               <tr>
                                                    <th scope='col'>Rank</th>
                                                    <th scope='col'>Name</th>
                                                    <th scope='col'>Platform</th>
                                                    <th scope='col'>Year</th>
                                                    <th scope='col'>Genre</th>
                                                    <th scope='col'>Publisher</th>
                                                    <th scope='col'>North America Sales</th>
                                                    <th scope='col'>Europe Sales</th>
                                                    <th scope='col'>Japan Sales</th>
                                                    <th scope='col'>Other Sales</th>
                                                    <th scope='col'>Global Sales</th>
                                               </tr>
                                           </thead>
                                           <tbody>
                                               <tr key={index}>
                                                   <td>{game.rank}</td>
                                                   <td>{game.name}</td>
                                                   <td>{game.platform}</td>
                                                   <td>{game.year}</td>
                                                   <td>{game.genre}</td>
                                                   <td>{game.publisher}</td>
                                                   <td>{game.northAmericaSales}</td>
                                                   <td>{game.europeSales}</td>
                                                   <td>{game.japanSales}</td>
                                                   <td>{game.otherSales}</td>
                                                   <td>{game.globalSales}</td>
                                               </tr>
                                           </tbody>
                                       </table>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={props.onHide}>Close</Button>
                                    </Modal.Footer>
                                </Modal>
                            </td>
                        </tr>
                    )
                 })}
            </tbody>
        </table>
     );
}
 
export default GameTable;