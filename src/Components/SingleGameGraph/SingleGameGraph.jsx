import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";




const SingleGameGraph = (props) => {
    const [data,setData] = useState([]);
    
    function GraphData(){

        const data = [
            ["Platform", "Global Sale", { role: "style" }],
            [props.data.platform, props.data.globalSales, "#silver"], // RGB value
           
        ];
        setData(data)

    
    }
    useEffect(()=>{
        GraphData()
    },[])
    
    return ( 
        <div>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
        </div>
     );
}
 
export default SingleGameGraph;



