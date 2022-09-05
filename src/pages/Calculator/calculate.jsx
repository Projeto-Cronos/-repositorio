import { Context } from '../../providers/userContext';
import { useContext, useState } from 'react';
import dataBase from '../../assets/dataBase/media-salarial-programadores-2022';


function Calculate (data, workedDays, hoursWorkedInDay) {
    // const {salary_by_brazil_uf, salary_by_languages, salary_by_experience} = dataBase;
    
    // const {
    //         valuePerMinute,
    //         setValuePerMinute,
    //         calculation,
    //         setCalculation,
    //         result,
    //         setResult
    //     } = useContext(Context);
    
    // // const [calculation, setCalculation] = useState(0);
    // // const [result, setResult]           = useState(false);

    // const { language, region } = data
    
    // const averageMonthlyValue = ((Number(language) + Number(region))/2);

    // workedDays = 22;

    // hoursWorkedInDay = 8;

    // const valuePerHour = ((averageMonthlyValue/workedDays)/hoursWorkedInDay).toFixed(2)

    // setValuePerMinute(valuePerHour/60);
    // setCalculation(valuePerHour);
    // setResult(true);
    // console.log('foi clicado')
}

// export default Calculate;

function CauculaPorra(data, workedDays, hoursWorkedInDay){
    // console.log('vai porra')

    // const {salary_by_brazil_uf, salary_by_languages, salary_by_experience} = dataBase;
    
    const { valuePerMinute,
            setValuePerMinute,
            calculation,
            setCalculation,
            result,
            setResult
        } = useContext(Context);
    
    // const [calculation, setCalculation] = useState(0);
    // const [result, setResult]           = useState(false);

    const { language, region } = data
    
    const averageMonthlyValue = ((Number(language) + Number(region))/2);

    workedDays = 22;

    hoursWorkedInDay = 8;

    const valuePerHour = ((averageMonthlyValue/workedDays)/hoursWorkedInDay).toFixed(2)

    setValuePerMinute(valuePerHour/60);        
    setCalculation(valuePerHour);
    setResult(true);
    console.log('foi clicado')
}
export default CauculaPorra;