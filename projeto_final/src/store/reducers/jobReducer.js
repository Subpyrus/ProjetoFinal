const initState = {
    jobs: [
        {id:1,Name:"Web Designer UI/UX",Orcamento:"700€ - 900€",Location:"Santo Ovídio, Vila Nova de Gaia",Time:"Full-Time",Area:"Designer Gráfico",Listing:"03/03/2020",Descricao:"Esta função é desempenhada por uma equipa de 5 elementos. Todas as sextas-feiras existem meetings para se observar o progresso do trabalho. A equipa trabalha também com programadores da empresa.",Requisitos:["Experiência com HMTL e CSS","Experiência com JS","Experiência com React"],Beneficios:["Custos dos transportes cobertos pela empresa","Horário Flexível","Ambiente de trabalho criativo e colaborativo"],idEmployer:1}
    ]
}


const jobReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_JOB":
            console.log("create job", action.job)
    }
    return state
}


export default jobReducer