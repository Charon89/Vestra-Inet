$(function () {
    let currentYear = new Date().getFullYear();
    var data = [
            { y: `${currentYear - 4}-01`, a: 50 },
            { y: `${currentYear - 4}-04`, a: 65 },
            { y: `${currentYear - 3}-07`, a: 90 },
            { y: `${currentYear - 2}-01`, a: 85 },
            { y: `${currentYear - 2}-04`, a: 110 },
            { y: `${currentYear - 2}-07`, a: 130 },
            { y: `${currentYear - 1}-01`, a: 100 },
            { y: `${currentYear - 1}-04`, a: 145 },
            { y: `${currentYear - 1}-07`, a: 120 },
            { y: `${currentYear}`, a: 190 },
        ],
        config = {
            data: data,
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Serssions'],
            fillOpacity: 0.6,
            hideHover: 'auto',
            behaveLikeLine: true,
            //  resize: true,
            pointFillColors: ['#2e86c4'],
            pointStrokeColors: ['#2e86c4'],
            lineColors: ['#1778be'],
        };
    config.element = 'line-chart';
    let chartLarge = Morris.Line(config);

    let chartDonut = Morris.Donut({
        element: 'pie-chart',
        data: [
            { label: 'New Visitor', value: 165 },
            { label: 'Returning Visitor', value: 135 },
        ],
    });

   

    var dataSessiosn = [
            { y: `${currentYear - 2}`, a: 1000 },
            { y: `${currentYear - 1}`, a: 2500 },
            { y: `${currentYear}`, a: 3105 },
        ],
        configSessions = {
            data: dataSessiosn,
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Serssions'],
            fillOpacity: 0.6,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
        };
    configSessions.element = 'session-chart';
    Morris.Line(configSessions);

    var dataUsers = [
            { y: `${currentYear - 2}`, a: 100 },
            { y: `${currentYear - 1}`, a: 500 },
            { y: `${currentYear}`, a: 1991 },
        ],
        configUsers = {
            data: dataUsers,
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Users'],
            fillOpacity: 0.6,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
        };
    configUsers.element = 'users-chart';
    Morris.Line(configUsers);

    var dataPageviews = [
            { y: `${currentYear - 2}`, a: 100 },
            { y: `${currentYear - 1}`, a: 500 },
            { y: `${currentYear}`, a: 8120 },
        ],
        configPageviews = {
            data: dataPageviews,
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Pageviews'],
            fillOpacity: 0.6,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
        };
    configPageviews.element = 'pageviews-chart';
    Morris.Line(configPageviews);

    var dataPages = [
            { y: `${currentYear - 2}`, a: 5100 },
            { y: `${currentYear - 1}`, a: 5100 },
            { y: `${currentYear}`, a: 8120 },
        ],
        configPages = {
            data: dataPages,
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Pages / Sessions'],
            fillOpacity: 0,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
        };
    configPages.element = 'pages-chart';
    Morris.Line(configPages);

    var dataDurotation = [
            { y: `${currentYear - 2}`, a: 45 },
            { y: `${currentYear - 1}`, a: 55 },
            { y: `${currentYear}`, a: 101 },
        ],
        configDurotation = {
            data: dataDurotation,
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Secunds'],
            fillOpacity: 0,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
        };
    configDurotation.element = 'durotation-chart';
    Morris.Line(configDurotation);

    // var dataBounce = [
    //         { y: '2014', a: 35 },
    //         { y: '2015', a: 39 },
    //         { y: '2016', a: 45 },
    //     ],
    //     configBounce = {
    //         data: dataBounce,
    //         xkey: 'y',
    //         ykeys: ['a'],
    //         labels: ['Percents'],
    //         fillOpacity: 0,
    //         hideHover: 'auto',
    //         behaveLikeLine: true,
    //         resize: true,
    //     };
    // configBounce.element = 'bounce-chart';
    // Morris.Line(configBounce);

    var dataNew = [
            { y: `${currentYear - 2}`, a: 35 },
            { y: `${currentYear - 1}`, a: 40 },
            { y: `${currentYear}`, a: 64 },
        ],
        configNew = {
            data: dataNew,
            xkey: 'y',
            ykeys: ['a'],
            labels: ['Percents'],
            fillOpacity: 0,
            hideHover: 'auto',
            behaveLikeLine: true,
            resize: true,
        };
    configNew.element = 'new-chart';
    let newSessions = Morris.Line(configNew);

     $(window).on('resize', function () {
         $(chartLarge.el).find('svg').width($(chartLarge.el).width());
          $(newSessions.el).find('svg').width($(newSessions.el).parent().width());
         chartLarge.redraw();
         chartDonut.redraw();
         newSessions.redraw();
        
     });
});
