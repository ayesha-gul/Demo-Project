import React , {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import  NumberFormat  from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(10),
      
    },
  },
}));

export default function GlobalData() {
  const classes = useStyles();
const [globalData,setGlobalData] = useState();
const [isFetching,setFetching] = useState(false);

         useEffect( () => {
           async function fetchGlobalData() {
             setFetching(true);
             const apiResponse= await fetch("https://disease.sh/v3/covid-19/all")
             console.log(apiResponse);

             const dataFromApi= await apiResponse.json();
             console.log(dataFromApi)
             setGlobalData(dataFromApi);
             setFetching(false)
           }
           fetchGlobalData();



         },[]);

        const loading = 'data Loading..'
         
              if (isFetching) {
                return(
                  <div className={classes.root}>
                  <Paper elevation={3} >
                      <Typography variant="h4" gutterBottom>
                     
                             {loading}
                          </Typography>
               
                             <Typography variant="subtitle2" gutterBottom>
                             Global Data as of today
                                </Typography>
                     
                      </Paper>
                      <Paper elevation={3} >
                      <Typography variant="h4" gutterBottom style={{color:'orange'}}>
                      {loading}
                          </Typography>
               
                             <Typography variant="subtitle2" gutterBottom style={{color:'orange', fontWeight:'bold'}} >
                             Active
                                </Typography>
                      </Paper>
                      <Paper elevation={3} >
                      <Typography variant="h4" gutterBottom style={{color:"green"}}>
                     {loading}
                          </Typography>
               
                             <Typography variant="subtitle2" gutterBottom style={{color:'green', fontWeight:'bold'}} >
                             Recovered
                                </Typography>
                      </Paper>
                      <Paper elevation={3} >
                      <Typography variant="h4" gutterBottom style={{color:'red'}}>
                     {loading}
                          </Typography>
               
                             <Typography variant="subtitle2" gutterBottom  style={{color:'red', fontWeight:'bold'}}>
                             Fatailities
                                </Typography>
                      </Paper>
                   
                   </div>

                )
              }



             

  return (

  
    <div className={classes.root}>
   <Paper elevation={3} >
       <Typography variant="h4" gutterBottom>
       <NumberFormat value={globalData && globalData.todayCases} displayType={'text'} thousandSeparator={true}  />

           
      
           </Typography>

              <Typography variant="subtitle2" gutterBottom>
              Global Data as of today
                 </Typography>
      
       </Paper>
       <Paper elevation={3} >
       <Typography variant="h4" gutterBottom style={{color:'orange'}}>
       <NumberFormat value={globalData && globalData.active} displayType={'text'} thousandSeparator={true}  />
       
       
           </Typography>

              <Typography variant="subtitle2" gutterBottom style={{color:'orange', fontWeight:'bold'}} >
              Active
                 </Typography>
       </Paper>
       <Paper elevation={3} >
       <Typography variant="h4" gutterBottom style={{color:"green"}}>
       <NumberFormat value= {globalData && globalData.recovered}displayType={'text'} thousandSeparator={true}  />
       
       
      
           </Typography>

              <Typography variant="subtitle2" gutterBottom style={{color:'green', fontWeight:'bold'}} >
              Recovered
                 </Typography>
       </Paper>
       <Paper elevation={3} >
       <Typography variant="h4" gutterBottom style={{color:'red'}}>
       <NumberFormat value={globalData && globalData.deaths} displayType={'text'} thousandSeparator={true}  />
       
       
           </Typography>

              <Typography variant="subtitle2" gutterBottom  style={{color:'red', fontWeight:'bold'}}>
              Fatailities
                 </Typography>
       </Paper>
    
    </div>
  );
}