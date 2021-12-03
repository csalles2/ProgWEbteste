import { useEffect, useState } from "react";
import Card from "../../Components/Card";
import api from "../../Api";
function Episodios(){
    const [data, setData] = useState(null);
    const [dateCreated, setDateCreated] = useState(null);

    useEffect( () => {
        const load = async()=>{
            let response = await api.getEpisodios();
            setData(response);
            console.log(data);
            
            let data_criacao = new Date(response.air_date);
            data_criacao = data_criacao.toLocaleDateString("pt-BR");

            setDateCreated(data_criacao);
        }
        load();
    }, [])   
return(
    <div className="results-container">
    {data &&
        ((data.error)
            ? <h1>Busca não encontrada 
            </h1>
            : data.results.map((item, key) => {
                return <Card
                    key={key}
                    id={item.id}
                    episode={item.episode}
                    name={item.name}
                    air_date={item.air_date}
                />
            })
            )
        }
    </div>
);
    
} 
    
    
  

        


export default Episodios;