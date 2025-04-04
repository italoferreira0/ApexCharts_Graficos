let el = document.getElementById('grafico');
    let options = {

        chart:{
            type: 'bar',
            heigth: 500,
            width: 700,
        },

        series:[
            {
                name: 'Homens',
                data:[10,30,20,80,42,50,60]
            },
            {
                name: 'Mulheres',
                data:[20,80,42,50,60,45,25]
            }
        ],

        xaxis:{ //Eixo x
            categories:['2ª feira','3ª feira','4ª feira','5ª feira','6ª feira','Sabado','Domingo']
        },

        plotOptions:{
            bar:{
                horizontal: false,
                dataLabels:{
                    position: 'top'
                }
            }
        },

        yaxis:{ //Eixo y
            min:0,   //Escala de 0 a 100
            max:100
        },
        grid:{
            show:true,
            xaxis:{
                lines:{
                    show:true
                }
            }
        },

        colors:['#4466FF','#FF6688']// cor da primeira serie , cor da segunda serie




    };
    
    let chart = new ApexCharts(el, options);
    chart.render()
