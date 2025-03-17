// import Item from "./Item";

// const ItemList = ({ items }) => {
//     // your code here
//     return (
//         <>
//             {items.map((item) => (
//                 <Item key={item.id} item={item} />
//             ))}
//         </>
//     );
// };

// export default ItemList;

import React from "react";
import Item from "./Item";

const ItemList = ({ items, onDelete, onEdit }) => {
  return (
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </ul>
  );
};

export default ItemList;
