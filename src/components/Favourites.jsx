// import { Col, Row, Button } from "react-bootstrap";
// import { FaTrash } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";

// //☑️HOOKS (USESELECTOR-USEDISPATCH)

// //utilizzo degli hook useSelector e useDispatch

// //-useSelector è utilizzato per estrarre l'array content dallo stato di Redux, che rappresenta l'elenco dei preferiti.
// //-useDispatch è utilizzato per ottenere la funzione dispatch, che viene utilizzata per inviare azioni Redux quando un elemento viene eliminato dai preferiti.

// //☑️Sia in  CompanySearchResults e Favourites, quando un elemento viene eliminato dai preferiti, viene inviata un'azione Redux (DELETE_FROM_FAVOURITES).
// //Questa azione viene gestita dal reducer mainReducer, che rimuove l'elemento corrispondente dall'array content dei preferiti.

// const Cart = () => {
//   // qui dentro ci vanno gli hooks!
//   const favElem = useSelector((state) => {
//     return state.favourites.content; // abbiamo recuperato dallo state di Redux l'array dei libri nel carrello
//   });
//   // booksCart è l'array dei libri salvati nel carrello, memorizzati in Redux in { cart: { content: [] } }

//   // mi genero la funzione dispatch()
//   const dispatch = useDispatch();

//   return (
//     <Row>
//       <Col sm={12}>
//         <ul style={{ listStyle: "none" }}>
//           {favElem.map((data, i) => (
//             <li key={i} className="my-4">
//               <Button
//                 variant="danger"
//                 onClick={() => {
//                   // da qui dentro dovremmo eliminare il libro selezionato dal carrello!
//                   dispatch({
//                     type: "DELETE_FROM_FAVOURITES",
//                     payload: i,
//                   });
//                 }}
//               >
//                 <FaTrash />
//               </Button>

//               {data.company_name}
//             </li>
//           ))}
//         </ul>
//       </Col>
//     </Row>
//   );
// };

// export default Cart;

import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromFavouritesAction } from "../redux/action/actions";
import { FaTrash } from "react-icons/fa";

const Favourites = () => {
  const favElem = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  const handleDeleteFromFavourites = (index) => {
    dispatch(deleteFromFavouritesAction(index));
  };

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favElem.map((data, index) => (
            <li key={index} className="my-4">
              <Button variant="danger" onClick={() => handleDeleteFromFavourites(index)}>
                <FaTrash />
              </Button>
              {data.company_name}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;
