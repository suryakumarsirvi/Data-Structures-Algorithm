// Find the Highest Altitude

function HighestAlt(Gain){
    let CurrentAltitude = 0;
    let HighestAlt = 0;

    for(let Step = 0; Step < Gain.length; Step++){
        CurrentAltitude = CurrentAltitude + Gain[Step];

        if(CurrentAltitude > HighestAlt){
            HighestAlt = CurrentAltitude
        }
    }

    return HighestAlt
}

console.log(HighestAlt([-5, 1, 5, 0, -7]))