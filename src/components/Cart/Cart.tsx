import { NavLink } from "react-router-dom";
import "./Cart.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { MantineProvider } from "@mantine/core";
// import { Card, Image, Button} from '@mantine/core';
import Navbar from "../NavBar/Navbar";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";


// interface Items {
//     id: number
//     title: string
//     price: string
//     category: string
//     description: string
//     image: string
// }

const Cart = () => {
    // const [Items, setItems] = useState<Items[]>([])
    


    //  const {id} = useParams<{id:string}>()
    //  const {image} = useParams<{image:string}>()
    // const itemChanger=(id:number)=>{
        
        
    //     useEffect(() => {
    //         fetchData();
    //     }, [])
    //     const fetchData= async()=>{
    //         try {
    //             const response = await axios.get(
    //                 'https://fakestoreapi.com/products/carts?userId=1'
    //             );
    //             const responseData: Items[] = response.data;
    //         setItems(responseData)
    //         console.log(response.data);
    //         } catch (error) {
    //             console.log(`Error fetching Data: ${error}`);
    //         }
    //     }
        
    // }
  return (
    <>
    <Navbar/>
    <div className="cartTitle">
       <NavLink to={"/"}> <MdOutlineKeyboardArrowLeft color="red"/></NavLink>
    <h3>Cart</h3>
    </div>
      {/* <MantineProvider>
        <div>
      {Items.map((item) => (


<Card shadow="sm" padding="lg" radius="md" withBorder className='card' key={item.id}>
    <Card.Section>

        <Image
            src={item.image}
            height={160}
            alt="Norway"
            className='apiimage'
            
        />
    </Card.Section>
    <div>
        <Button color="blue" fullWidth mt="md" radius="md">
            {item.category}
        </Button>
    </div>
    </Card>
    ))
    }
    </div>
      </MantineProvider> */}
      
    </>
  )
  
 }

export default Cart
