export function RosterPositionIcon({position}:{position:number}) {
  
    position-=1;
    let perPixel = 1.75;
    let buffer = 2;
    let total = 182
   const perRow = 6;

   let rowCount =  Math.ceil(total/6);

   let height = rowCount * perPixel;
   let width = perRow * perPixel;

    let xPos = (position % perRow) * perPixel - buffer;
    let yPos = Math.floor(position / perRow) * perPixel - buffer;

   return <div className="roster-icon" style={{position:"relative",width:width+"px",height:height+"px",}}>
        <div style={{outline:"1px solid white",borderRadius:"100px",position:"absolute",width:(perPixel+buffer*2)+"px",height:(perPixel+buffer*2)+"px",left:xPos+"px",top:yPos+"px"}}></div>
   </div>
}