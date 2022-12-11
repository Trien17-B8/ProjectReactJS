import { useState } from "react";
import axios from "axios"

function Search() {

    let [input, setInput] = useState();
    let [products, setProducts] = useState([]);
    let timeOutId = null;

    const handleSearch =(e) =>{
        if(timeOutId != null){
            clearTimeout(timeOutId);
        }
        timeOutId = setTimeout(() => {
            axios.get(`http://localhost:3000/shoes`, {
              params: {
                name: e.target.value,
                createdAtMax: "",
                createdAtMin: ""
              }
            }).then((res) => {
              setProducts([...res.data]);
            }).catch();
          }, 500);
        }
    
    return ( 
        <>
            <div>
                <ul>
                {products.map(({ name, id }, index) => {
                    return <li><a href={`/products/${id}`}>{name}</a></li>
                })}
                </ul>
            </div>
        </>
     );
}

export default Search;