// import axios from "axios";

// export const getAllPosts = async () => {

//     axios.get('https://fakestoreapi.com/products').then((response) => {
//        console.log(response.data)
//       }).catch((err)=> console.log(err))
//     }

  



// export const addPost = async (data) => {
//     const res = await axios.post("http://localhost:5001/posts/", {
//         title : data.title,
//         description: data.description,
//         brand : data.brand,
//         price: data.price,
//         imageUrl: data.imageUrl,
//         location : data.location,
//         name: data.name
//     } ).catch((err) => console.log(err))
//     if(res.status !== 201) {
//        return console.log("error Occured")
//     }

//     const resData = await res.data;
//     return resData;
// }

