import { useEffect, useState } from "react";
import Chart from "react-google-charts";


const PublisherGraph = (props) => {
    const [data,setData] = useState([]);

    function generateGraph() {

        let filterGames = props.data.filter(publisher => publisher);
        let platforms = filterGames.map(game => {
            return game.publisher
        });


        let distinctPlatform = [...new Set(platforms)]
        console.log(distinctPlatform)

        
        let platformArrays = distinctPlatform.map(publisher => {
            let total = 0 
            filterGames.map(el=>{
                if(el.publisher == publisher){
                    total+= el.globalSales
                }
            })
           
            return [publisher, total, "silver"]
      
        });
       
        const dataValue = [
            ["Platform", "Total sales", { role: "style" }],
         ...platformArrays
        ];
        console.log(dataValue)
        setData(dataValue)
    
    }
  
    useEffect(()=>{
        generateGraph()
    },[])
   

    return ( 
        <div>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
            <p>
                Bonus: Most sucsessful publisher by Console
            </p>
        </div>
     
            )
}
export default PublisherGraph;