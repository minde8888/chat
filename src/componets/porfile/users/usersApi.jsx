// import axios from "axios";
// import React from "react";
// import userImage from "../img/last ned.png"
// import "./users.scss";

// const Users = (props) => {

//   if (props.users.length === 0) {
//     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
//       props.setUsers(response.data.items)
//     })

//   }

//   return (
//     <div>
//       {props.users.map((el, k) => (
//         <div key={k} id={props.id} className={el.class}>
//           <img src={el.photos.small != null?el.photos.small :  userImage } alt={el.alt} />
//           <div className="bubble">
//             {el.name}
//             <div>
//               <div>{el.status}</div>
//               <div>{"el.city"}</div>
//               <div>{"el.country"}</div>
//             </div>
//             <div className="corner"></div>
//             <span>{"el.time"} </span>
//           </div>
//           {el.follow ? (
//             <button
//               onClick={() => {
//                 props.unfollow(el.id);
//               }}
//             >
//               follow
//             </button>
//           ) : (
//             <button
//               onClick={() => {
//                 props.follow(el.id);
//               }}
//             >
//               unfollow
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Users;
