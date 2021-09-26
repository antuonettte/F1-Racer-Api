


let tbody = $( '#tBody' );
let load = $( '#loadRace' );
let season = $("#season");
let round = $( '#round' );

load.on('submit', function( e ){
    e.preventDefault();


    axios.get(`https://ergast.com/api/f1/${season.val()}/${round.val()}/driverStandings.json`)
    .then( function(res){
        let drivers = res.data['MRData']['StandingsTable']['StandingsLists'][0]['DriverStandings']
        // console.log( res.data['MRData']['StandingsTable']['StandingsLists'][0]['season'] ) 
        console.log('Works');
        tbody.html('')
        for (const driver of drivers) {
            // console.log(driver.Constructors[0].constructorId)
            let node = $( `
                <tr>
                    <th scope="row">${driver.position}</th>
                    <td>${driver.Driver.givenName} ${driver.Driver.familyName}</td>
                    <td>${driver.Driver.nationality}</td>
                    <td>${driver.Constructors[0].name}</td>
                    <td>${driver.points}</td>
                </tr>
            ` )
            tbody.append(node)
            
        }
        
    })
    .catch( function( e ){
        alert("Check Internet Connection \n or check Inputs")
    } );

});


