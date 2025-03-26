let el = document.getElementById('grafico');
    let options = {

        chart:{
            type: 'line',
            heigth: 500,
            width: 700,
        },

        series:[
            {
                name:"João",
                data:[43,65,34,65,23,54,23,65,45,54,54]
            },
            {
                name:"Carlos",
                data:[10,45,32,56,23,43,65,34,65,23,54]
            },
            {
                name:"Ana",
                data:[65,23,54,23,12,67,98,67,43,21,11]
            }
        ],

        dataLabels:{
            enabled:true //Valor dado visivel.
        },

        yaxis:{ // serie de graficos no eixo y, de 0 a 100.
            min:0, 
            max:100
        },

        xaxis:{ // nome de cada graficos no eixo x
            categories:['01 Jan','02 Jan','03 Jan','04 Jan','05 Jan','06 Jan','07 Jan','08 Jan','09 Jan','10 Jan','11 Jan',]
        },

        title:{ // Titulo do grafico
            text: 'Dados Estatísticos',
            align: 'center'
        },

        stroke:{ 
            width: [2,2,2], // largura de linhas do grafico.
            curve: 'smooth' // efeito arredondado 
        },

        grid:{ // grades
            borderColor: '#000000',
            xaxis:{ // não exibir grades no eixo x
                lines:{
                    show:false 
                }
            }
        }


    };
    
    let chart = new ApexCharts(el, options);
    chart.render()