import "./home.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import Navbar from "../NavBar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Newsletter from "../Newsletter/Newsletter";

interface Items {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}


const Home = () => {

    const [Items, setItems] = useState<Items[]>([])
    useEffect(() => {
        fetchData();
    }, [])




    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://fakestoreapi.com/products'
                // "https://fakestoreapi.com/products?limit=5"

            );
            const responseData: Items[] = response.data;
            setItems(responseData)
            console.log(response.data);

        } catch (error) {
            console.log(`Error fetching Data: ${error}`);

        }
    }



    // const handleDelete = (id: number) => {
    //     alert("user with: " + id + " deleted succesfully");
    // }

    return (

        <>
            <MantineProvider>

                <Navbar/>
                <Hero/>
                <div className='center'> <h1>Explore Our Latest Collection</h1></div>
                <div className='table'>
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
                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={500}>{item.title}</Text>
                                <Badge color="pink">${item.price}</Badge>

                            </Group>

                            {/* <Text size="sm" c="dimmed">
                                {item.description}
                            </Text> */}


                            {/* <div><button className='delete' onClick={() => { handleDelete(item.id) }}>Delete</button></div> */}
                        </Card>

                    ))}
                </div>
                <Newsletter/>
                <Footer/>
            </MantineProvider>
        </>

    )
}


export default Home
