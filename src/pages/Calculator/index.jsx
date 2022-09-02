import { useState } from "react";
import HeaderDashboard from "../../components/HeaderDashboard";
import { MainCalculator,FormCalculator, ContainerCalculator, Result } from "./style";
const Calculator = () => {
    const [result, setResult] = useState(0)
    return (
        <ContainerCalculator>
            <HeaderDashboard/>
            <MainCalculator>
                <h1>Calcule quanto vale sua hora</h1>
                <FormCalculator>
                    <div className="box__select">
                        <label htmlFor="selecionar-Linguagem">Linguagem / Tecnologia utilizada</label>
                            <select name="Linguagem / tecnologia" id="selecionar-Linguagem" >
                                <option value="" >Selecione a linhguagem / tecnologia</option>
                                <option value="JavaScript" >JavaScript</option>           
                                <option value="Java">Java</option>                        
                                <option value="C#">C#</option>
                                <option value="PHP">PHP</option> 
                                <option value="Python">Python</option> 
                                <option value="TypeScript">TypeScript</option>   
                                <option value="Kotlin">Kotlin</option>
                                <option value="Dart">Dart</option>
                                <option value="Delphi">Delphi</option>                       
                                <option value="Ruby">Ruby</option>
                                <option value="Go">Go</option>
                                <option value="Swift">Swift</option>
                                <option value="SQL">SQL</option>
                                <option value=".NET (CORE)">.NET (CORE)</option>
                                <option value="Bubble">Bubble</option>
                                <option value="C++">C++</option>
                                <option value="Apex">Apex</option>
                                <option value="C">C</option>
                                <option value="PL/SQL">PL/SQL</option>
                                <option value="Elixir">Elixir</option>
                                <option value="ADVPL">ADVPL</option>
                                <option value="Clojure">Clojure</option>
                                <option value="ABAP">ABAP</option>
                                <option value="Visual Basic 6">Visual Basic 6</option>
                                <option value="HTML">HTML</option>
                                <option value="NO Code">NO Code</option>
                                <option value="Power FX">Power FX</option>
                                <option value="Visual Basic .NET">Visual Basic .NET</option>
                                <option value="COBOL">COBOL</option>
                                <option value="Shell">Shell</option>
                                <option value="Pascal">Pascal</option>
                                <option value="BASH">BASH</option>
                                <option value="PROGRESS">PROGRESS</option>
                                <option value="Scala">Scala</option>
                                <option value="ASP 3">ASP 3</option>
                                <option value="Rust">Rust</option>
                                <option value="CSS">CSS</option>
                                <option value="Genexus">Genexus</option>
                                <option value="LUA">LUA</option>
                                <option value="Groovy">Groovy</option>
                                <option value="VBA">VBA</option>
                                <option value="Shell Script">Shell Script</option>
                                <option value="Power PlataFormCalculator">Power PlataFormCalculator</option>
                                <option value="Maker">Maker</option>
                                <option value="OutSystems">OutSystems</option>
                                <option value="Uniface">Uniface</option>
                                <option value="Perl">Perl</option>
                                <option value="Yalm">Yalm</option>
                                <option value="Object Pascal">Object Pascal</option>
                                <option value="SQL Server">SQL Server</option>
                                <option value="PowerShell">PowerShell</option>
                                <option value="React">React</option>
                                <option value="TerraFormCalculator">TerraFormCalculator</option>
                                <option value="Centura">Centura</option>
                                <option value="R">R</option>
                                <option value="BI">BI</option>
                                <option value="PowerApps">PowerApps</option>
                                <option value="Spark">Spark</option>
                                <option value="Selenium">Selenium</option>
                                <option value="HCL">HCL</option>
                            </select>
                    </div>

                    <div className="box__select">
                        <label htmlFor="UF">Região do país</label>
                        <select id="UF" name="UF" placeholder="Selecione o estado">
                            <option value="" >Selecione o estado</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espirito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>

                    <div className="box__select">
                        <label htmlFor="experience">Tempo de experiência</label>
                        <select name="experience" id="experience">
                            <option value="" >Digite o período trabalhado</option>
                            <option value="Menos de 1 ano">Menos de 1 ano</option>
                            <option value="Entre 1 e 2 anos">Entre 1 e 2 anos</option>
                            <option value="Entre 2 e 4 anos">Entre 2 e 4 anos</option>
                            <option value="Entre 4 e 6 anos">Entre 4 e 6 anos</option>
                            <option value="Entre 6 e 8 anos">Entre 6 e 8 anos</option>
                            <option value="Entre 8 e 10 anos">Entre 8 e 10 anos</option>
                            <option value="Entre 10 e 15 anos">Entre 10 e 15 anos</option>
                            <option value="Entre 15 e 20 anos">Entre 15 e 20 anos</option>
                            <option value="Mais de 20 anos">Mais de 20 anos</option>
                        </select>
                    </div>

                    <div className="box__btn">
                        <button type="submit">Calcular</button>
                    </div>
                </FormCalculator>

                <Result>
                    <div>
                        <h2>Resultado:</h2>
                        <p>Pessoas como você cobram </p>
                        <span>{result}</span> 
                        <p>por hora, em média.</p>
                    </div>
                </Result>
            </MainCalculator>
        </ContainerCalculator>
    )
} 

export default Calculator;