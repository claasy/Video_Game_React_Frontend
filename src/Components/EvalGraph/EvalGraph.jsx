import { useEffect, useState } from "react";
import Chart from "react-google-charts";


const EvalGraph = (props) => {
    const [data,setData] = useState([]);

    function generateGraph() {

        let filterGames = props.data.filter(genre => genre);
        let platforms = filterGames.map(game => {
            return game.genre
        });


        let distinctPlatform = [...new Set(platforms)]
        console.log(distinctPlatform)

        
        let platformArrays = distinctPlatform.map(genre => {
            let total = 0 
            filterGames.map(el=>{
                if(el.genre == genre){
                    total+= el.globalSales
                }
            })
           
            return [genre, total, "silver"]
      
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
                What is the most sucsessful genre throughout the consoles ?

                Action is the most popular by thiiiiiiiiiis much
            </p>
        </div>
     
            )
}
export default EvalGraph;