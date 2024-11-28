import { useState, useEffect } from 'react';

const CounterFC = () => {
    
    let [laps,setLaps] =useState(0);
    let [trips,setTrips] =useState(0);

    useEffect( () => {
        setTimeout( () => setLaps(1) , 500);
    } , [] );

    useEffect(() => {
        if(laps===10){
            setLaps(0);
            setTrips(trips+1);
        }else if(laps<0 && trips>0) {
            setLaps(9);
            setTrips(trips-1);
        }else if(laps<0) {
            setLaps(0);
        }
    },[laps]);

    return (
        <div className='card card-primary m-4 p-4'>
            <h3> {laps} <small>LAPS</small>  {trips} <small>TRIPS</small> </h3>
            <div className='card-foot text-end'>
                <button type="button" onClick={e => setLaps(laps - 1)} className='btn btn-sm btn-danger me-2'> Step Down </button>
                <button type="button" onClick={e => setLaps(laps + 1)} className='btn btn-sm btn-secondary'> Step Up </button>
            </div>
        </div>
    );
}

export default CounterFC;