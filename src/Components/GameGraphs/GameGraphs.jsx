import Chart from "react-google-charts";





const GameGraphs = (props) => {
    console.log(props.data)
    return ( 
        props.data.map((data, index) => {
            return (
                <Chart chartType="ColumnChart" 
                width="100%" 
                height="400px" 
                data={[["platform", "Total Sale"], [data.platform, data.globalSales]]} 
                />   
            )
        })
     );
}
 
export default GameGraphs;



