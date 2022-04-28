import Button from 'react-bootstrap/Button';



const GameTable = (props) => {
    return ( 
        props.searchedGames.map((game,index)=>{

        <table>
            <thead>
                <th> Game Name </th>
            </thead>
            <tbody>
                <tr key={index}>
                    <td> {game.name} </td>
                    <Button onClick = {() => props.setModal(true)}> More Info <Button/>
                </tr>
            </tbody>
        </table>
        })
     );
}
 
export default GameTable;