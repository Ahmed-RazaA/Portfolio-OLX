import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../card/card.css";
import { Link } from "react-router-dom";
import Loading from '../Loading';


const Card = () => {
    const [loading, setLoading] = useState(true)
    const startingVallue = 8;
    const [card, setCards] = useState(startingVallue);

    const LoadMore = () => {
        setCards(card + startingVallue)
    }

    const [posts, setPosts] = useState([])

    useEffect(() => {

        axios.get('https://fakestoreapi.com/products').then((response) => {
            setPosts(response.data);
            setLoading(false)
        }).catch((err) => console.log(err))


    }, []);

    return (
        <>{
            loading ? <Loading />
                :
                <>
                    <div className='container'>
                        <div className="row">
                            {posts && posts.slice(0, card).map((item, index) => {
                                return (
                                    <div key={item.id} className="col-md-4 col-sm-6 col-lg-3">
                                        <Link style={{ textDecoration: 'none', color: "black" }} to={`/product-details/${item.id}`} >
                                            <div className="m-4 border rounded p-4">
                                                <div className='mb-2 text-center' style={{ backgroundColor: "black" }}>
                                                    <img src={item.image} style={{ height: "150px", objectFit: "conatain", backgroundColor: 'black', width: "90%" }} className="card-img-top" alt="Card-image" />
                                                </div>
                                                <div className="card-body">
                                                    {/* <p style={{ color: "red" }}>{item.id}</p> */}
                                                    <p>{item.title.substring(0, 30)}</p>
                                                    <h5 className="card-title">{item.price}</h5>
                                                    <p className="card-text">{item.description.substring(0, 30)}</p>
                                                </div>
                                            </div>

                                        </Link>

                                    </div>)

                            })
                            }
                        </div>
                    </div>
                    {
                        card < posts.length ?
                            <div className='text-center'><button style={{ backgroundColor: "#002F34", color: "#fff" }} onClick={LoadMore} className='load-more btn text-center my-5' >Load More</button> </div> : <div className='text-center'> <p className='my-5'>No More Items</p></div>


                    }
                </>
        }


        </>

















    )
}

export default Card;
