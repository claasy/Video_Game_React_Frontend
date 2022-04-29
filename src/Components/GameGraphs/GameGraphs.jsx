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
            <p>Global Sales in the Millions by Console</p>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
            <p>The above chart represents the best Video Game Console to invest in since 2013</p>
        </div>

     
            )
 
}
 
export default GameGraphs;



   // props.data.filter(info => info.year > 2013).map((data, index) => {
        //     console.log(data)
        //     return (

  //     let allGamesForPlatform = filterGames.filter( game => game.platform == platform)
        //     for (let i = 0; i < allGamesForPlatform.length; i++){
        //         if (obj[i.platform] != undefined) {
        //             i.platform += i.globalSales
        //         }else{
        //             obj[i.platform] = i.globalSales
        //         }
        //     }
        //    if (obj[platform] != undefined){
        //        return [platform, obj.platform, "silver"]
        //    }

     // let allGamesForPlatform = filterGames.filter(game => game.platform == platform);
        // let content = []
        // debugger
        // for (let i = 0; i < allGamesForPlatform.length; i++){
        //     content.push(allGamesForPlatform[i.globalSales])
        // }
        // console.log("Total Sales: " + content)
        // return [platform, content, "silver"]