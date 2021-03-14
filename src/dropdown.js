
import React, { useEffect,useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import CountryStats from './countryStats';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(8),
    width: 500
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  
  },
}));

  export const   CountryPicker = () =>  {
    const [coData, setCoData] = useState([]);
    const [coFetching,setCoFetching] = useState(false)
  
       useEffect(() => {
   
       async function fetchCountryData()  {
         setCoFetching(true)

        const apiResp = await  fetch ('https://disease.sh/v3/covid-19/countries')
        const apiData = await apiResp.json();
        // console.log(typeof apiData);
         //console.log(apiData)
        setCoData(apiData);
        
        console.log(coData)
        setCoFetching(false)

          }

          fetchCountryData();
        
          }, []);
          var cc;
          var getIndex;
           const [index, setIndex] = useState(0) 
           
          async function ChangeEvent(e) {
            cc =e.target.value;
            getIndex = coData.findIndex( ({country}) =>country === cc);
            setIndex(getIndex);
           }
          return(
            <div> 
              
              
              
         <Select  style={{color:'#3f51b5'}}  onChange={ChangeEvent }>
                    {coData && coData.map(({country},index) => <option  key = {index} value={country}> {country}   </option>)}
                     <CountryStats a={index}/>
          </Select></div>
          );

        }    
 