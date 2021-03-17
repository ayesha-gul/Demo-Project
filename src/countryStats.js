import  {useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width:170
  },
}));
 
export default function CountryStats(props) {
  const classes = useStyles();
   const [state, setstate] = useState()
   const [fetchee , setFEtch] = useState(false)
  useEffect(() => {
     async function Countries() {
         setFEtch(true)
         const REsp= await fetch('https://disease.sh/v3/covid-19/countries')
         console.log('RESp =',REsp)
         const DAta = await REsp.json();
         setstate(DAta)
         setFEtch(false)
         console.log('DAta=',DAta)

       
         // console.log(Ayesha);
         
     }Countries();
  }, [])

  const loading = 'Loading'
  if (fetchee) {
      return(
    <div className={classes.root}>
    <Grid container spacing={3}>
  
  <Grid item xs={6} sm={3}>
    <Paper className={classes.paper}>Total-Cases {loading}</Paper> 
  </Grid>
  <Grid item xs={6} sm={3}>
    <Paper className={classes.paper}>Re-covered  {loading}</Paper>
  </Grid>
  <Grid item xs={6} sm={3}>
    <Paper className={classes.paper}>New-Cases  {loading}</Paper>
  </Grid>
  <Grid item xs={6} sm={3}>
   
    <Paper className={classes.paper}>Deaths  {loading} </Paper>
  </Grid>
</Grid>

</div>
      )
  }

  
  return (
    <div className={classes.root} >
   <Grid container spacing={3}>
        
         <Grid item xs={6} sm={3}>
              
                 <Paper className={classes.paper} style={{color:'	#000080', }}> <Typography variant="h6" gutterBottom  >
                    <CountUp start={0} end={state && state[props.a].cases} separator="," duration={0.2}/> </Typography>
                  <Typography  style={{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif', color:'#3f51b5',fontWeight:'bold' }}> Confirmed-Cases  </Typography>  </Paper> 
                    </Grid>
         <Grid item xs={6} sm={3}>
             
                 <Paper className={classes.paper}  style={{color:'	#000080'}}>  <Typography variant="h6" gutterBottom>
                      <CountUp start={0} end={state && state[props.a].recovered} separator="," duration={0.2}/>    </Typography>
                   <Typography  style={{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',color:'#3f51b5', fontWeight:'bold'}}> Recovered </Typography> </Paper> 
                    </Grid>
        <Grid item xs={6} sm={3}>
             
                <Paper className={classes.paper}  style={{color:'	#000080'}}>  <Typography variant="h6" gutterBottom>
                     <CountUp start={0} end={state && state[props.a].todayCases} separator="," duration={0.2}/>   </Typography>
                  <Typography  style={{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',color:'#3f51b5', fontWeight:'bold'}}> Today-Cases   </Typography> </Paper>
                    </Grid>
        <Grid item xs={6} sm={3}>
            
                <Paper className={classes.paper}  style={{color:'	#000080'}}>  <Typography variant="h6" gutterBottom>
                 <CountUp start={0} end={state && state[props.a].deaths} separator="," duration={0.2}/>    </Typography>
                  <Typography style={{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',color:'#3f51b5', fontWeight:'bold'}}> Deaths  </Typography> </Paper>
                   </Grid>
      </Grid>
    
    </div>
  );
}
