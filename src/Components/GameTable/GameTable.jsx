import React, { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SingleGameGraph from "../SingleGameGraph/SingleGameGraph";

const GameTable = (props) => {
    const [record, setRecord] = useState({
        rank: "",
        name: "",
        platform: "",
        year: "",
        genre: "",
        publisher: "",
        northAmericaSales: "",
        europeSales: "",
        japanSales: "",
        otherSales: "",
        globalSales: ""
    })

    function handleCLick(event) {
        event.preventDefault();
        // update state with select data
        let updatedData = {
            rank: Rank,
            name: Name,
            platform: Platform,
            year: Year,
            genre: Genre,
            publisher: Publisher,
            northAmericaSales: NASales,
            europeSales: EuSales,
            japanSales: JapanSales,
            otherSales: Other,
            globalSales: Global
        }

        setRecord(...record, updatedData)

        // flip the switch to show modal
        props.setModal(true)
    }

  return (
    <Fragment>
      <table>
        <tbody>
          {props.searchedGames.map((game, index) => {
            return (
              <tr key={index}>
                <td> {game.name} </td>
                <td> {game.platform} </td>
                <td>
                  <Button onClick={handleCLick}
                 let Rank={game.rank} Name={game.name} Platform={game.platform} Year={game.year}
                 Genre={game.genre} Publisher={game.publisher} NASales={game.northAmericaSales} EuSales={game.europeSales}
                 JapanSales={game.japanSales} Other={game.otherSales} Global={game.globalSales}>
                    {" "}
                    More Info{" "}
                  </Button>
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* Modal Code - Always goes AT THE BOTTOM */}
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
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Platform</th>
                <th scope="col">Year</th>
                <th scope="col">Genre</th>
                <th scope="col">Publisher</th>
                <th scope="col">North America Sales</th>
                <th scope="col">Europe Sales</th>
                <th scope="col">Japan Sales</th>
                <th scope="col">Other Sales</th>
                <th scope="col">Global Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{record.rank}</td>
                <td>{record.name}</td>
                <td>{record.platform}</td>
                <td>{record.year}</td>
                <td>{record.genre}</td>
                <td>{record.publisher}</td>
                <td>{record.northAmericaSales}</td>
                <td>{record.europeSales}</td>
                <td>{record.japanSales}</td>
                <td>{record.otherSales}</td>
                <td>{record.globalSales}</td>
                <td>
                  <SingleGameGraph data={record} />
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default GameTable;
