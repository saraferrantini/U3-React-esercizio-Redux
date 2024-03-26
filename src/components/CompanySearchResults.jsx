// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import Job from "./Job";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";

// //☑️HOOKS (USESELECTOR-USEDISPATCH)

// //utilizzo degli hooks useSelector e useDispatch

// //-useSelector è utilizzato per estrarre l'array content dallo stato di Redux, che rappresenta l'elenco dei preferiti.
// //-useDispatch è utilizzato per ottenere la funzione dispatch, che viene utilizzata per inviare azioni Redux quando un elemento viene eliminato dai preferiti.

// //☑️Sia in  CompanySearchResults e Favourites, quando un elemento viene eliminato dai preferiti, viene inviata un'azione Redux (DELETE_FROM_FAVOURITES).
// //Questa azione viene gestita dal reducer mainReducer, che rimuove l'elemento corrispondente dall'array content dei preferiti.

// const CompanySearchResults = () => {
//   const dispatch = useDispatch();
//   const [jobs, setJobs] = useState([]);
//   const params = useParams();
//   const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

//   useEffect(() => {
//     getJobs();
//   }, []);

//   const getJobs = async () => {
//     try {
//       const response = await fetch(baseEndpoint + params.company);
//       if (response.ok) {
//         const { data } = await response.json();
//         setJobs(data);
//       } else {
//         alert("Error fetching results");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const addToFavorites = (jobData) => {
//     dispatch({
//       type: "ADD_TO_FAVOURITES",
//       payload: jobData, //jobdata lo prende dalla props
//     });
//   };

//   return (
//     <Container>
//       <Row>
//         <Col className="my-3">
//           <h1 className="display-4">Job posting for: {params.company}</h1>
//           {jobs.map((jobData) => (
//             <div key={jobData._id}>
//               <Job data={jobData} />
//               <Button className="d-flex align-items-center" onClick={() => addToFavorites(jobData)}>
//                 Add to Favorites
//               </Button>
//             </div>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CompanySearchResults;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavouritesAction } from "../redux/action/actions";
import Job from "../components/Job";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFavourites = (jobData) => {
    dispatch(addToFavouritesAction(jobData));
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <div key={jobData._id}>
              <Job data={jobData} />
              <Button className="d-flex align-items-center" onClick={() => handleAddToFavourites(jobData)}>
                Add to Favorites
              </Button>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
