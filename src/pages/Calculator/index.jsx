import { useState, useId } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from '../../validators/calculator';
import HeaderDashboard from '../../components/HeaderDashboard';
import { MainCalculator,FormCalculator, ContainerCalculator, calculation, Result } from './style';
import dataBase from '../../assets/dataBase/media-salarial-programadores-2022';
import { Context } from '../../providers/userContext';
import { useContext } from 'react';


const Calculator = () => {

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    });

    const {salary_by_brazil_uf,salary_by_languages} = dataBase;

    const {valuePerMinute, setValuePerMinute} = useContext(Context);

    const [calculation, setCalculation] = useState(0);
    const [result, setResult] = useState(false)

    const ufValues = salary_by_brazil_uf.ufValues.map((uf) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const id = useId();

        return (<option id={id} key={id} value={uf.value}>{uf.uf}</option>);
    });

    const languages = salary_by_languages.languages_values.map((language) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const id = useId()

        return (<option key={ id } id={id} value={language.value}>{language.language}</option>);
    });

    const calculate = (data, workedDays, hoursWorkedInDay) => {
        const { language, region } = data
        
        const averageMonthlyValue = ((Number(language) + Number(region))/2);

        workedDays = 22;

        hoursWorkedInDay = 8

            const valuePerHour = ((averageMonthlyValue/workedDays)/hoursWorkedInDay).toFixed(2)

              
            setValuePerMinute(valuePerHour/60)
            
            setCalculation(valuePerHour);
            setResult(true)
    }
        console.log(valuePerMinute)

    return (
        <ContainerCalculator>
            <HeaderDashboard/>

            <MainCalculator>

                <h1>Calcule quanto vale sua hora</h1>

                <FormCalculator onSubmit={handleSubmit(calculate)}>
                    <div className='box__select'>
                        <label htmlFor='selecionar-Linguagem'>Linguagem / Tecnologia utilizada</label>
                            <select 
                                {...register('language')} 
                                id='selecionar-Linguagem'
                            >
                                <option value=''>Selecione a linhguagem / tecnologia</option>
                                { languages }
                            </select>
                                <span>{errors.language?.message}</span>
                    </div>

                    <div className='box__select'>
                        <label htmlFor='UF'>Região do país</label>
                        <select 
                            {...register('region')}
                            id='UF'
                        >
                            <option value=''>Selecione o estado</option>
                            { ufValues }

                        </select>
                            <span>{errors.region?.message}</span>
                    </div>

                    <div className='box__select'>
                        <label htmlFor='experience'>Tempo de experiência</label>
                        <select
                            {...register('experience')}
                            id='experience'
                        >
                            <option value='' >Digite o período trabalhado</option>
                            <option value='Menos de 1 ano'>Menos de 1 ano</option>
                            <option value='Entre 1 e 2 anos'>Entre 1 e 2 anos</option>
                            <option value='Entre 2 e 4 anos'>Entre 2 e 4 anos</option>
                            <option value='Entre 4 e 6 anos'>Entre 4 e 6 anos</option>
                            <option value='Entre 6 e 8 anos'>Entre 6 e 8 anos</option>
                            <option value='Entre 8 e 10 anos'>Entre 8 e 10 anos</option>
                            <option value='Entre 10 e 15 anos'>Entre 10 e 15 anos</option>
                            <option value='Entre 15 e 20 anos'>Entre 15 e 20 anos</option>
                            <option value='Mais de 20 anos'>Mais de 20 anos</option>
                        </select>
                        <span>{errors.experience?.message}</span>

                    </div>

                    <div className='box__btn'>
                        <button type='submit'>Calcular</button>
                    </div>
                </FormCalculator>
            </MainCalculator>
                {
                    result &&
                    <Result>
                        <div>
                            <h2>Resultado:</h2>
                            <p>Pessoas como você cobram </p>
                            <span>{ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(calculation)}</span> 
                            <p>por hora, em média.</p>
                        </div>
                    </Result>
                }
        </ContainerCalculator>
    );
} 
export default Calculator;