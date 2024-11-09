import { useEffect, useMemo, useRef, useState } from "react"
import { CreateBlankFighter, Fighter } from "../data/CSVSource";
import { RosterPositionIcon } from "./RosterPostitionIcon";
import { useInView } from "react-intersection-observer";


const ingoreColumnList = ['image','characterClass',
    "rushChain1","rushChain2","rushChain3","rushChain4",
"skillOne","skillTwo","blastOne","blastTwo","ultimateBlast"]


const invertScoringList = ['cost','armorBreak','kiBlastCost'];

function IsIgnored(key:string) {
    return ingoreColumnList.includes(key);
}



export function StarRating({rating}:{rating:number}) {

    return <div className="star-container">
        <div className="star-list ">

        </div>
        <div className="star-list front" style={{maxWidth:(rating/100)*5 + "em"}} >

        </div>
    </div>
}


export function FighterTable({fighters}:{fighters:Fighter[]}) {

    const [filteredFighters, setFilteredFighters] = useState(fighters);

    const [filter,setFilter] = useState("");
    const sortKeyRef = useRef<string>("id");
    const sortDirRef = useRef<number>(-1);
    const [pinnedFighters,setPinnedFighters] = useState<string[]>([]);

    const minMaxDict = useMemo(()=>{

        let dict:any = {};

        Object.keys(CreateBlankFighter()).forEach((key)=>{

            let max = -99999;
            let min = 99999;
       

            for(let i = 0;i<fighters.length;i++){
             
                let parsed = parseFloat((fighters[i] as any)[key].replace(',',''));

                if(parsed == 999 ){
                    continue; // this is equilivant to infinity in the data set so ignore
                }

                if(isNaN(parsed))
                    continue;
                if(parsed>max)
                    max = parsed;
                if(parsed<min)
                    min = parsed;
                
            }
            dict[key] = {min,max};
        })

        return dict;

    },[fighters])


    const GetRelativeValue = (key:string,fighter:Fighter) => {


        let val = parseFloat((fighter as any)[key].replace(',',''));

        if(isNaN(val))
            return undefined;

        let def = minMaxDict[key];
        if(!def)
            return undefined;

        let min = def.min;
        let max = def.max;

        let num = Math.round(((val-min)/(max-min)) *100);

      if(invertScoringList.includes(key))
            num = 100-num;

        return num;

    }
    // const [widths,setWidths] = useState<number[]>([]);

    function SortByKey(key:string,ignoreToggle:boolean = false) {

        if(sortKeyRef.current === key&&!ignoreToggle)
            sortDirRef.current = sortDirRef.current * -1;
        else
            sortDirRef.current = 1;

        sortKeyRef.current = key;

        const sorted = [...filteredFighters].sort((a,b)=>{
            
            let isPinnedA = pinnedFighters.includes(a.id);
            let isPinnedB = pinnedFighters.includes(b.id);

            if(isPinnedA && !isPinnedB)
                return -1;
            else if(!isPinnedA && isPinnedB)
                return 1;

            let valA = (a as any)[key];
            let valB = (b as any)[key];

            let parseA = parseFloat(valA.replace(',',''));
            let parseB = parseFloat(valB.replace(',',''));

            if(isNaN(parseA) || isNaN(parseB))
                return valA.localeCompare(valB) * sortDirRef.current;
            else
                return parseA>parseB?(1*sortDirRef.current):(-1*sortDirRef.current);
        
        
        
        })
  
        setFilteredFighters(sorted)

    }

    function SortFighters(a:Fighter,b:Fighter) {

        let isPinnedA = pinnedFighters.includes(a.id);
        let isPinnedB = pinnedFighters.includes(b.id);

        if(isPinnedA && !isPinnedB)
            return -1;
        else if(!isPinnedA && isPinnedB)
            return 1;

        let valA = (a as any)[sortKeyRef.current];
        let valB = (b as any)[sortKeyRef.current];


        let parseA = parseFloat(valA.replace(',',''));
        let parseB = parseFloat(valB.replace(',',''));

        if(isNaN(parseA) || isNaN(parseB))
            return valA.localeCompare(valB) * sortDirRef.current;
        else
            return parseA>parseB?(-1*sortDirRef.current):(1*sortDirRef.current);
    
    }

    const TogglePin = (fighter:Fighter)=> {
        if(pinnedFighters.includes(fighter.id))
            setPinnedFighters(pinnedFighters.filter((id)=>id!==fighter.id))
        else
            setPinnedFighters([fighter.id,...pinnedFighters])

    }

    // const initMinMax = (returnMin:boolean) => {
   

    //    let minFighterC= CreateBlankFighter();
    //     let maxFighterC = CreateBlankFighter();
    //     let blnk = CreateBlankFighter();
    //     Object.keys(blnk ).forEach((key)=>{



    //         for(let i = 0;i<fighters.length;i++){
    //            let parsed = parseFloat((fighters[i] as any)[key].replace(',',''));
    //             if(isNaN(parsed))
    //                continue;
    //             if(i==0){
    //                  (minFighterC  as any)[key] = (fighters[i] as any)[key];
    //                 (maxFighterC  as any)[key] = (fighters[i] as any)[key];
    //              }
    //             else{
    //                 let compareA = parseFloat((minFighterC  as any)[key].replace(',',''));
    //                 let compareB = parseFloat((maxFighterC  as any)[key].replace(',',''));

    //                 if(isNaN(compareA)||isNaN(compareB)){
    //                     continue;
    //                 }

    //                 if(parsed<compareA)
    //                     (minFighterC  as any)[key] = (fighters[i] as any)[key];
    //                 if(parsed>compareB)
    //                     (maxFighterC  as any)[key] = (fighters[i] as any)[key];
    //             }

    //         }

    //     })

    //    if(returnMin)
    //         return minFighterC;
    //     else
    //         return maxFighterC;
    // }
    // const minFighter = useMemo(()=>{return initMinMax(true)},[fighters]);
    // const maxFighter = useMemo<Fighter>(()=>{return initMinMax(false)},[fighters]);
    // // useEffect(()=>{
       
    // //
    // },[fighters])


    useEffect(()=>{

        sortKeyRef.current = "id";
        let fs = fighters.filter((fighter)=>{

            if(pinnedFighters.includes(fighter.id))
                return true;
            let split = filter.split(" ");
            let check = fighter.characterName.toLowerCase()+fighter.characterClass.toLowerCase();

            for(let i = 0; i<split.length;i++){
                if(!check.includes(split[i].toLowerCase()))
                    return false;
            }
            return true;

            return (pinnedFighters.includes(fighter.id) ||
                fighter.characterName.toLowerCase().includes(filter.toLowerCase())||fighter.characterClass.toLowerCase().includes(filter.toLowerCase()))
        })

        fs.sort((a,b)=>{

            let isPinnedA = pinnedFighters.includes(a.id);
            let isPinnedB = pinnedFighters.includes(b.id);

            if(isPinnedA && !isPinnedB)
                return -1;
            else if(!isPinnedA && isPinnedB)
                return 1;

            return 0;
        })
        if(filter.length>0)

            setFilteredFighters(fs)
        else
            setFilteredFighters(fighters)



    },[filter])


    return <>
    <div className="f-table-wrapper">
   
        <table className="f-table">
            <tbody>
                {/* <HeaderRowNew/>
                {filteredFighters.map((fighter,index)=>{ 
           
                    return <FighterRowNew key={fighter.id} fighter={fighter}/>})} */}
                <TableHeader IsFlipped={sortDirRef.current<0} currentKey={sortKeyRef.current} onSort={SortByKey}>
                    <div style={{display:"flex",gap:"16px",justifyContent:'center',alignItems:"center",width:"100%"}}>
                    <input style={{width:"100%"}} onClick={(e)=>e.stopPropagation()} type="text" placeholder="Search Characters.." value={filter} onChange={(e)=>{setFilter(e.target.value)}}/>
                    Character  
               
                </div>
                </TableHeader>
                {filteredFighters.length==0&&<tr><td colSpan={100}><h3>No Characters Found</h3></td></tr>}
                {filteredFighters.sort(SortFighters).map((fighter,index)=>{  
                    
                    
                    return <FighterRow calcRelative={GetRelativeValue} onSetPin={TogglePin} index={index} key={fighter.id} fighter={fighter} isPinned={pinnedFighters.includes(fighter.id)}  />
            })}
            </tbody>
        </table>
        </div>
        </>


}

    // function HeaderRowNew(){
    //     return <tr>
    //     <th className="character"></th>
    //     <th className="character">Id</th>
    //     <th className="character">Character</th>
    //     <th className="character">Class</th>
    //     <th className="character">Cost</th>
    //     <th className="character" >Switch</th>
    //     <th className="character" >Health</th>
    //     <th className="defence">Defence</th>
    //     <th className="attack">Attack</th>
    //     <th className="special">Special</th>
    //     <th className="ki">Ki</th>
    //     <th className="skill">Skill</th>
    //     <th className="rush">Rush Chains</th>
    //     <th className="moves">Moves</th>
    //     </tr>
    // }

// function FighterRowNew({fighter}:{fighter:Fighter}) {

//     return <tr>
//           <td><RosterPositionIcon position={parseFloat(fighter.id)}/></td>  
//         <td>{fighter.id}</td>
//         <CharacterName fighter={fighter}/>
//         <td>{fighter.characterClass}</td>
//         <td>{fighter.cost}</td>
//         <td>{fighter.switch}</td>
//         <td>{fighter.health}</td>
//         <td><DefenceGroup fighter={fighter}/></td>
//         <td><AttackGroup fighter={fighter}/></td>
//         <td><SpecialGroup fighter={fighter}/></td>
//         <td><KiGroup fighter={fighter}/></td>
//         <td><SkillGroup fighter={fighter}/></td>
//         <td><RushGroup fighter={fighter}/></td>
//         <td><MoveGroup fighter={fighter}/></td>
//     </tr>




// }



// function GetRelativeValue(key:string,minFighter:Fighter,maxFighter:Fighter,fighter:Fighter) {

//     let min = parseFloat((minFighter as any)[key].replace(',',''));
//     let max = parseFloat((maxFighter as any)[key].replace(',',''));
//     let val = parseFloat((fighter as any)[key].replace(',',''));

//     console.log(min,max,val)
//     if(isNaN(val)||isNaN(min)||isNaN(max))
//         return 0;

//     let num = Math.round(((val-min)/(max-min)) *100);

//     if(invertKeys.includes(key))
//         num = 100-num;

//     return num;

// }


// function CharacterName({fighter}:{fighter:Fighter}) {
//     let split = fighter.characterName.split(",");
                    

//     if(split.length>1)
//     return <td>
//         <div style={{display:"flex"}}>
//             <div>
//                 <img src={"/images/characters/"+fighter.image} style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
//             </div>
//             <div>
//                 <div>{split[0]}</div>
//                 <div style={{fontSize:".75em",fontWeight:"600",color:"#444"}}>{split[1]}</div>
//             </div>
//         </div>
//         </td>
//     else
//         return <td>{fighter.characterName}</td>

// }




function FighterRow({fighter,isPinned,onSetPin,index,calcRelative}:{
  
    calcRelative:(key:string,fighter:Fighter)=>number|undefined,
    onSetPin:(fighter:Fighter)=>void,fighter:Fighter,isPinned:boolean,index:number}) {
        const { ref, inView } = useInView();
    let style:any = {transition:" .3s",top:"-100px"};
    const [isToggled,setIsToggled] = useState(false);
    if(isPinned){
        
      style = { position:"sticky",top:(100*(index)+64)+"px",transition:" .3s",background:(index%2!=0?"rgb(40 40 60)":"rgb(60 60 101)"),zIndex:100,borderBotto:"1px solid #444"}
    }
    else if(isToggled){

        style = {height:"276px",transition:" .3s",top:"-100px"};
    }
    return <tr ref={ref} style={style}
    
   >
     
    
       <td> <div style={{display:"flex",gap:"16px",justifyContent:'center',maxWidth:"28px"}}>
        
        <button onClick={()=>{onSetPin(fighter);setIsToggled(false)}} >{isPinned?'✖':<PinIcon/>}</button>
  
    
    </div>
    
    </td>  
        {inView&&
            Object.keys(fighter).map((key:any)=>{
                if(IsIgnored(key)){
                    return null;
                }
                let val = (fighter as any)[key];



                if(key == "id"){

                    return <td> <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"4px"}}>  <RosterPositionIcon position={parseFloat(fighter.id)}/><div className="character-id-text"> {val}</div></div></td>
                }
                else if(key == "characterName"){
                    let split = val.split(",");
                    

              
                    return <td>
                        <div style={{display:"flex",gap:"20px",alignItems:"center",fontWeight:"normal"}}>
                           
                            <img alt={fighter.characterName}  onClick={()=>setIsToggled(!isToggled)} loading="lazy" src={"/images/characters/"+fighter.image} style={{cursor:"pointer", width:(isToggled&&!isPinned?"320px":"80px"),transition:" .3s",height:(isToggled&&!isPinned?"240px":"80px"),objectFit:"cover",borderRadius:"16px"}}/>
                          
                            <div>
                                <div style={{fontSize:"1.2em"}}>{split[0]}</div>

                            {split.length>1&&  <div style={{fontSize:".9em",fontWeight:"600",opacity:".7"}}>{split[1]}</div> }

                                <div style={{display:'flex',gap:"5px",alignItems:"center",marginTop:"1px"}} >
                                <div style={{fontSize:"1em",opacity:.6,height:"1em",marginBottom:"2px"}}><svg xmlns="http://www.w3.org/2000/svg" height={"1em"} fill="currentColor" viewBox="0 0 512 512"><path d="M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16L80 64c0-8.8 7.2-16 16-16l288 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"/></svg></div>
                                
                                <div style={{fontSize:"1em",textTransform:"uppercase",opacity:".8",marginBottom:"-2px"}}>{fighter.characterClass}</div></div>

                            </div>
                        </div>
                        </td>

                }

                let relative = calcRelative(key,fighter);
                if(relative!=undefined){
                    return <td>
                        <div>{val}</div>
                        <StarRating rating={relative}/>
                        {/* <div className="percentile-text"> {relative/10}</div> */}
                    </td>
                }

                return <td>{val} </td>
            })
        }
        {!inView&&<td colSpan={100}></td>}
        {inView&&
        <>
        <td>
            <ol>
                <li><span>1</span> {fighter.rushChain1}</li>
                <li><span>3</span> {fighter.rushChain3}</li>
                <li><span>2</span> {fighter.rushChain2}</li>
                <li><span>4</span> {fighter.rushChain4}</li>
            </ol>
        </td>
        <td>
            <div style={{display:"flex",alignItems:"flex-start"}}>
                <ul style={{width:"150px"}}>
                    <li className="skill-li"><span>1</span> {fighter.skillOne}</li>
                    <li className="skill-li"><span>2</span> {fighter.skillTwo}</li>
            
                </ul>
                <ul>
                    <li className="blast-li"><span>1</span> {fighter.blastOne}</li>
                    <li className="blast-li"><span>2</span> {fighter.blastTwo}</li>
                    <li className="ult-li"><span><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height={"1em"} viewBox="0 0 384 512"><path d="M0 208C0 104.4 75.7 18.5 174.9 2.6C184 1.2 192 8.6 192 17.9l0 63.3c0 8.4 6.5 15.3 14.7 16.5C307 112.5 384 199 384 303.4c0 103.6-75.7 189.5-174.9 205.4c-9.2 1.5-17.1-5.9-17.1-15.2l0-63.3c0-8.4-6.5-15.3-14.7-16.5C77 398.9 0 312.4 0 208zm288 48A96 96 0 1 0 96 256a96 96 0 1 0 192 0zm-96-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg></span> {fighter.ultimateBlast}</li>
                </ul>
            </div>
        </td>
        </>}
    </tr>

}

function GetLabelFromKey(key:string) {

    if(key.length === 0)
        return key;
    let str = '';
    
    for(let i = 0; i<key.length;i++){
        if(i==0)
            str+=key[i].toUpperCase();
        else if(key[i] === key[i].toUpperCase()){
            str+=" "+key[i];
        }
        else
            str+=key[i];
    }
    return str;
}



function TableHeader({IsFlipped,currentKey,onSort,children}:{IsFlipped:boolean, currentKey:string,onSort:(key:string)=>void,children?:any}) {

    const fighterTemplate = useMemo(() => {return CreateBlankFighter()}, []);

    return (
        <tr> 
            <th style={{fontSize:".9em",textAlign:"center",maxWidth:"30px"}}> Pin </th>    
            {
                Object.keys(fighterTemplate).map((key:any,index)=>{

                    if(IsIgnored(key)){
                        return null;
                    }
                    let clrClass = "";

                    if(index<=5){
                        clrClass = "character"
                    }
                    else if(index<=9){
                        clrClass = "defence"
                    }
                    else if(index<16){
                        clrClass = "attack"
                    }
                    else if(index<18){
                        clrClass = "special"
                    }
                    else if(index<17){
                        clrClass = "special"
                    }
                    else if(index<29){
                        clrClass = "ki"
                    }
                    else if(index<33){
                        clrClass = "skill"
                    }
             
            

                    let extra = "";
                    if(key === currentKey){
                        extra = IsFlipped?"up":"down";
                    }

                    let label = GetLabelFromKey(key);

                    if(key=="id"){

                        label = `Roster Position`;
                        return <th  className={extra+" "+clrClass} key={key} onClick={()=>onSort(key)}><div>Roster</div><div style={{fontSize:".8em"}}>ID</div></th>
                    }

                    if(key=="characterName"){

                        return <th  className={extra+" "+clrClass} key={key} onClick={()=>onSort(key)}>
                    
                           
                            <div style={{height:"100%",display:"flex",alignItems:"center"}}>{children}</div>
                            </th>
                    }
                  
                 
                    return <th  className={extra+" "+clrClass} key={key} onClick={()=>onSort(key)}>{label}</th>
                })
            }
       <th style={{textAlign:"center",background:"#444"}}>Rush Chains</th>
       <th style={{textAlign:"center"}}>
        <div style={{display:"flex",padding:"0 10px",justifyContent:"space-around", width:"100%"}}>
            <div>Skills </div>
            <div>Blasts </div>
            <div>Ultimate </div>
            </div>
       </th>
        </tr>
        )
  
}




// function SmallItemGroup({numOfCol,pairs}:{numOfCol:number,pairs:{label:string,value:string}[]}) {



      
//          return <div className="small-item-group" style={{maxWidth:boxSize*numOfCol+"px",width:boxSize*numOfCol+"px"}}>
//            {
//                 pairs.map((pair)=>{

           

            
//                      return <SmallItem key={pair.label+pair.value} label={pair.label} value={pair.value} />
//                 })
//            }
//         </div>

// }

// function SmallItem({label,value}:{label:string,value:string}) {


//     return <div className="grouped-item"   >
      
//             <label className="label">{label}</label>
//             <div className="value">{value}</div>
            
//         </div>

// }

// function DefenceGroup({fighter}:{fighter:Fighter}) {
//     return <SmallItemGroup numOfCol={2} 
//         pairs={[
//         {label:"Melee",value:fighter.melee},
//         {label:"Energy",value:fighter.energy},
//         {label:"Armor",value:fighter.armor},
//         {label:"Rush",value:fighter.rush}



//         ]}/>

// }

// function AttackGroup({fighter}:{fighter:Fighter}) {
//     return <SmallItemGroup numOfCol={3}
//         pairs = {[
//             {label:"Smash",value:fighter.smash},
//             {label:"Throw",value:fighter.throw},
//             {label:"Pursuit",value:fighter.pursuit},
//             {label:"Revenge",value:fighter.revenge},
//             {label:"Stagger",value:fighter.stagger}

//         ]}
    
//     />

// }

// function SpecialGroup({fighter}:{fighter:Fighter}) {
//     return <SmallItemGroup numOfCol={1}
    
//         pairs={[
//             {label:"Super",value:fighter.super},
//             {label:"Ultimate",value:fighter.ultimate}]}
    
//     />

// }

// function KiGroup({fighter}:{fighter:Fighter}) {

//     const numOfCol = 5;

//     return <SmallItemGroup numOfCol={numOfCol}
    
//         pairs={[
//             {label:"Blast",value:fighter.kiBlast},
//             {label:"Blast Cost",value:fighter.KiBlastCost},
//             {label:"Blast Limit",value:fighter.KiBlastLimit},
//             {label:"Starting Ki",value:fighter.startingKi},
//             {label:"Charge",value:fighter.kiCharge},
//             {label:"Sparking Charge",value:fighter.sparkingCharge},
//             {label:"Sparking Duration",value:fighter.sparkingDuration},
//             {label:"Attack Gain",value:fighter.attackKiGain},
//             {label:"Regen",value:fighter.kiRegen},
//             {label:"Regen Range",value:fighter.kiRegenRange}
//         ]}
//     />

// }

// function SkillGroup({fighter}:{fighter:Fighter}) {

//     const numOfCol = 2;

//     return <SmallItemGroup numOfCol={numOfCol}
    
//         pairs={[
//             {label:"Start",value:fighter.skillStart},
//             {label:"Limit",value:fighter.skillLimit},
//             {label:"Regen",value:fighter.SkillRegeneration},
//             {label:"Damage",value:fighter.skillDamage}
//         ]}
//     />

// }

// function RushGroup({fighter}:{fighter:Fighter}) {

//     const numOfCol = 2;

//     return <SmallItemGroup  numOfCol={numOfCol}
    
//             pairs={[
//                 {label:"Chain 1",value:fighter.rushChain1},
//                 {label:"Chain 2",value:fighter.rushChain2},
//                 {label:"Chain 3",value:fighter.rushChain3},
//                 {label:"Chain 4",value:fighter.rushChain4}
//             ]}
//     />

// }

// function MoveGroup({fighter}:{fighter:Fighter}) {

//     const numOfCol = 3;

//     return <SmallItemGroup  numOfCol={numOfCol}
//         pairs={[
//             {label:"Skill 1",value:fighter.skillOne},
//             {label:"Skill 2",value:fighter.skillTwo},
//             {label:"Blast 1",value:fighter.blastOne},
//             {label:"Blast 2",value:fighter.blastTwo},
//             {label:"Ultimate",value:fighter.ultimateBlast}
//         ]}
//     />

// }

function PinIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" style={{transform:"rotate(320deg)"}} viewBox="0 0 384 512" fill="currentColor" height={"1em"}><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3L32 352c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 384l64 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96z"/></svg>
}