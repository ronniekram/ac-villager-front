// import React from 'react';
// import {connect} from 'react-redux'
// import { Card, Col } from 'react-bootstrap';
// import {deleteIsland} from '../../actions/islandActions';
// import Villagers from '../villagers/Villagers';
// import VillagerSearch from '../villagers/VillagerSearch';
// import islandX from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/islandX.png'


// function Island({history, match, islands, villagers, deleteIsland}) {
  
//   const handleDelete = (island) => {
//     deleteIsland(island)
//     history.push('/islands')
//   }

//     const island = islands.find(island => island.id == match.params.id)
//     const village = (island && island.villagers)
//     return (
//       <>
//         <Col md={4} className="column">
//           <Card className="card island-info">
//             <Card.Body>
//               <Card.Title>
//                 {island && island.name}
//               </Card.Title>
//               <Card.Subtitle>
//                 {island && island.owner}
//               </Card.Subtitle>
//                 <p>Villagers:</p>
//                 <Villagers villagers={village} island={island} />
//                   <img src={islandX} alt="Delete Island?" onClick={() => {
//                     return handleDelete(island.id);}} />
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4} className="column">
//           <VillagerSearch villagers={villagers} island={island} />
//         </Col>
//     </>
//     )
//   }
//   const mapStateToProps = state => {
//     return {
//       villagers: state.villagerReducer.villagers
//     }
//   }

// export default connect(mapStateToProps, {deleteIsland})(Island);

import React from 'react';
import { Card, Col } from 'react-bootstrap';
import SearchContainer from '../../containers/SearchContainer'
import Villagers from '../villagers/Villagers';
import islandX from '/Users/HotRonnie/Desktop/ac-villagers-react/villager-front/src/components/img/islandX.png'


function Island({islands, handleDelete, match}) {
  const island = islands.find(island => island.id == match.params.id)

    const village = (island && island.villagers)
    return (
      <>
        <Col md={4} className="column">
          <Card className="card island-info">
            <Card.Body>
              <Card.Title>
                {island && island.name}
              </Card.Title>
              <Card.Subtitle>
                {island && island.owner}
              </Card.Subtitle>
                <p>Villagers:</p>
                <Villagers villagers={village}  />
                  <img src={islandX} alt="Delete Island?" onClick={() => {
                    return handleDelete(island.id);}} />
            </Card.Body>
          </Card>
        </Col>
        {/* <Col md={4} className="column">
          <SearchContainer />
        </Col> */}
    </>
    )
  }

export default Island;