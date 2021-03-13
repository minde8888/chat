
let initialState = {
  
        users: [
            {
                name: "Miro Badev",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg",
                alt: "miro",
                id: "1",
                status: "status"
            },
            {
                name: "Martin Joseph",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg",
                alt: "martin",
                id: "2",
                status: "away"
            },
            {
                name: "Tomas Kennedy",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg",
                alt: "tomas",
                id: "3",
                status: "away"
            },
            {
                name: "Enrique Sutton",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg",
                alt: "enrique",
                id: "4",
                status: "inactive"
            },
            {
                name: "Darnell Strickland",
                src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg",
                alt: "darnell",
                id: "5",
                status: "inactive"
            },
        ],


};
const users = (state = initialState, action) => {
    return state;
}

export default users;