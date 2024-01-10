import React from 'react'
import Base from '../components/Base'
import Button from 'react-bootstrap/esm/Button'
import { toast } from 'react-toastify';
import axios from 'axios'


const Index = () => {

    const showToast = () => {
        toast.success("🦄 this is working")
    }

    const getData = () => {
        axios.get("https://fakestoreapi.com/products")
            .then( (json) =>
            {console.log(json)
            toast.success("data is fetched")
            })
            .catch((error) => {
                toast.error("Something went wrong")
                console.log(error);
            })

                
                
                    
    }


  return (
    <div>
        <Base title='shop slowly and have fun' desc={"this is awesome and just explore and go for best product at one place.." } buttonEnable={true} to="/" >
        <h3>this is content of index</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, labore similique? Consequuntur quo, rerum cupiditate modi ea beatae laborum reprehenderit, cumque vitae ipsum enim natus sapiente cum debitis nemo nobis.</p>

        <Button onClick={showToast} >Tostify Checking</Button>
        <Button onClick={getData}>Get Data from Fake API</Button>
        </Base>
    </div>
  )
}

export default Index