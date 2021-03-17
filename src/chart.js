  
// import React,{useState,useEffect} from 'react'
// import {Bar} from 'react-chartjs-2';

// export const ChartBar = (props) => {
//     const [work, setwork] = useState([])
//    // const [fetched, setfetched] = useState(false)
//     useEffect(() => {
//         async function FEtchCountry () {
//            // setfetched(false)
//             const ApiFetch= await fetch('https://disease.sh/v3/covid-19/countries')
//         console.log('apiREsponse =',ApiFetch)
//         const APiDAta= await ApiFetch.json();
//         console.log('APiDAta=',APiDAta)
//         setwork(APiDAta);
//        // setfetched(false)
        
//         } FEtchCountry();
//     },[])

//     // console.log(work.length)
    
//     const SunData = { labels: ['Total-cases', 'Recovered', 'NEw-Cases', 'Deaths', ],
//         datasets: [
//           {
//             label: 'CoViD-19 Bar',
//             backgroundColor: '#3f51b5',
//             borderColor: 'rgba(255,99,132,1)',
//             borderWidth: 1,
//             hoverBackgroundColor: '	#2554C7',
//             hoverBorderColor: 'rgba(255,99,132,1)',
//             data: work.length > 0 ?  [work[props.a].cases,work[props.a].recovered,work[props.a].todayCases,work[props.a].deaths] :[]
//           }
//         ]
//       };
//     return (
//         <div>
//         <h2>CoViD-19 Graph</h2>
//         <Bar
//           data={SunData}
//           width={100}
//           height={90} 
//           options={{
//             maintainAspectRatio: false,
          
            
//           }}
//         />
//       </div>
//     )
// }


import React,{useState,useEffect} from 'react'
import {Bar} from 'react-chartjs-2';

 export const ChartBAr = ({a}) => {
      const [Dataa, setwork] = useState([])
     // const [fetched, setfetched] = useState(false)
      useEffect(() => {
          async function FEtchCountry () {
             // setfetched(false)
              const ApiFetch= await fetch('https://disease.sh/v3/covid-19/countries')
          console.log('apiREsponse =',ApiFetch)
          const APiDAta= await ApiFetch.json();
          console.log('APiDAta=',APiDAta)
          setwork(APiDAta);
         // setfetched(false)
          
          } FEtchCountry();
      },[])


//console.log(Dataa.length);

 const chartData = { labels: ['Total Cases', 'Deaths', 'Recovered','Active Cases'],
  datasets: [
    {
      label: 'CoViD-19 Bar',
            backgroundColor: '#3f51b5',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: '	#2554C7',
            hoverBorderColor: 'rgba(255,99,132,1)',
            barThickness:'90',
      data: Dataa.length > 0 ? [Dataa[a].cases,Dataa[a].deaths,Dataa[a].recovered,Dataa[a].active] : [] 
        }
  ]
}

    
      return (
        <div>
                <div style={{height:"400px"}}>

             <h6>COVID-19 Bar Chart</h6> 
            <Bar
          data={chartData}
          width={80}
          height={100}
          options={{
            responsive:true,
            maintainAspectRatio: false,
          }}
        />
                           </div>
        </div>
    )
}
export default ChartBAr;
