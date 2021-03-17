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
      width: '97%',
      minWidth:300,
      height: theme.spacing(13),
      paddingTop:'20px'
 
      
    },
  },
}));


const useStylesT = makeStyles({
   root: {
       width: '100%',
       maxWidth: 500,
       color:"#737270",
   },
});


export default function GlobalData() {
  const classes = useStyles();
  const classesT = useStylesT();
const [globalData,setGlobalData] = useState();
const [isFetching,setFetching] = useState(false);

         useEffect( () => {
           async function fetchGlobalData() {
             
            setFetching(true);
             const apiResponse= await fetch("https://disease.sh/v3/covid-19/all")
             // console.log(apiResponse);

             const dataFromApi= await apiResponse.json();
            // console.log('Globaldata =', dataFromApi)
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
                  <div className={classesT.root}>
                      <Typography variant="h4" gutterBottom>
                     
                             {loading}
                          </Typography> 
               
                             <Typography variant="subtitle2" gutterBottom style={{ fontWeight:'bold'}}>
                             Global Data as of today
                                </Typography> </div>
                     
                      </Paper>
                      <Paper elevation={3} >
                      <div className={classesT.root}>
                      <Typography variant="h4" gutterBottom style={{color:'orange'}}>
                      {loading}
                          </Typography>
               
                             <Typography variant="subtitle2" gutterBottom style={{color:'orange', fontWeight:'bold' , textAlign:'center'}} >
                             Active
                                </Typography> </div>
                      </Paper>
                      <Paper elevation={3} >
                      <div className={classesT.root}>
                      <Typography variant="h4" gutterBottom style={{color:"green"}}>
                     {loading}
                          </Typography>
               
                             <Typography variant="subtitle2" gutterBottom style={{color:'green', fontWeight:'bold'}} >
                             Recovered
                                </Typography> </div>
                      </Paper>
                      <Paper elevation={3} >
                      <div className={classesT.root}>
                      <Typography variant="h4" gutterBottom style={{color:'red'}}>
                     {loading}
                          </Typography>
               
                             <Typography variant="subtitle2" gutterBottom  style={{color:'red', fontWeight:'bold'}}>
                             Fatailities
                                </Typography> </div>
                      </Paper>
                   
                   </div>

                )
              }



             

  return (

  
    <div className={classes.root}>
   <Paper elevation={3} >

   <div className={classesT.root}>
       <Typography variant="h4" gutterBottom style={{color:'#2F4F4F'}}>
       <NumberFormat value={globalData && globalData.cases} displayType={'text'} thousandSeparator={true}  />
           </Typography>

              <Typography variant="subtitle2" gutterBottom style={{color:'#2F4F4F', fontWeight:'bold' ,fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}}>
              Global Data As Of Today
                 </Typography> </div>
       </Paper>
       <Paper elevation={3} >
       <div className={classesT.root}>
       <Typography variant="h4" gutterBottom style={{color:'#3f51b5', fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}}>
       <NumberFormat value={globalData && globalData.active} displayType={'text'} thousandSeparator={true}  />
       
       
           </Typography>

              <Typography variant="subtitle2" gutterBottom style={{color:'#3f51b5', fontWeight:'bold',fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif'}} >
              Active
                 </Typography> </div>
       </Paper>
       <Paper elevation={3} >
       <div className={classesT.root}>
       <Typography variant="h4" gutterBottom style={{color:"green"}}>
       <NumberFormat value= {globalData && globalData.recovered}displayType={'text'} thousandSeparator={true}  />
       
       
      
           </Typography>

              <Typography variant="subtitle2" gutterBottom style={{color:'green', fontWeight:'bold'}} >
              Recovered
                 </Typography> </div>
       </Paper>
       <Paper elevation={3} >
       <div className={classesT.root}>
       <Typography variant="h4" gutterBottom style={{color:'red'}}>
       <NumberFormat value={globalData && globalData.deaths} displayType={'text'} thousandSeparator={true}  />
       
       
           </Typography>

              <Typography variant="subtitle2" gutterBottom  style={{color:'red', fontWeight:'bold'}}>
              Fatailities
                 </Typography> </div>
       </Paper>
    
    </div>
  );
}