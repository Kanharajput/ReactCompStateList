function ChartBar(props){

    let barHeight = '0%';

    if(props.max > 0){
        // calcualate how much bar should be filled
        const barHeight = Math.round((props.value / props.maxValue)*100) + '%';
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:barHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.values}</div>
        </div>
    );
}