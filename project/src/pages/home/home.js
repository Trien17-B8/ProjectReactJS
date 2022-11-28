import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

function HomePage() {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
    fetch("http://localhost:3900/shoes")
      .then((res) => res.json())
      .then((data) => { 
        setShoes(data);
      });
    }, []);


    return ( 
        <>
            {shoes.map((shoes) => (
                <tr key={shoes.id}>
                    <td>{shoes.name}</td>
                    <td>{shoes.size}</td>
                    <img src={shoes.images}></img>
                    <td>{shoes.description}</td>
                    <td>{shoes.price}</td>
                    
                    <Link to={`/products/${shoes.id}`}>Detail</Link>
                </tr>
            ))};

                
        </>
     );
}

export default HomePage;