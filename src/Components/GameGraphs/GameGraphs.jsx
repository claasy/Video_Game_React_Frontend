import { useEffect, useState } from "react";
import Chart from "react-google-charts";


const GameGraphs = (props) => {
    const [data,setData] = useState([]);

    function generateGraph() {

        let filterGames = props.data.filter(game => game.year >= 2013);
        let platforms = filterGames.map(game => {
            return game.platform
        });


        let distinctPlatform = [...new Set(platforms)]
        console.log(distinctPlatform)

        
        let platformArrays = distinctPlatform.map(platform => {
            let total = 0 
            filterGames.map(el=>{
                if(el.platform == platform){
                    total+= el.globalSales
                }
            })
           
            return [platform, total, "silver"]
      
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
        </div>
     
            )
 
}
 
export default GameGraphs;



