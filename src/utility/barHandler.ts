export default function (tasks: any) {
    //create sum of work, break and meeting time for past week
    let day:any = [];
    for(let i=0;i<7;i++){
        let tempDate=new Date();
        tempDate.setDate(tempDate.getDate() - i);
        let date=new Date(tempDate).toLocaleDateString('en-CA');
        console.log(tasks,date);
        // tasks.reduce((accumulated, current) => {
        //     if (
        //         String(date) === String(current.startTime) &&
        //         String(current.taskType) === 'Work'
        //     ) {
        //         return accumulated + current.duration * 1;
        //     }
        // }, 0),
        let tempDay={}
        tempDay["name"]=tempDate.getDate();
        tempDay["work"]=tasks.reduce((accumulated:number,current:any)=>{
            if(String(date)===String(current.startTime) && String(current.taskType)==="Work"){
                return accumulated+=current.duration*1;
            }
            return accumulated;
        },0);
        tempDay["break"]=tasks.reduce((accumulated:number,current:any)=>{
            if(String(date)===String(current.startTime) && String(current.taskType)==="Break"){
                return accumulated+=current.duration*1;
            }
            return accumulated;
        },0);
        tempDay["meeting"]=tasks.reduce((accumulated:number,current:any)=>{
            if(String(date)===String(current.startTime) && String(current.taskType)==="Meeting"){
                return accumulated+=current.duration*1;
            }
            return accumulated;
        },0);
        day.push(tempDay);
    }
    console.log(day);
    return day;
}
