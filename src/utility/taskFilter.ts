const isValidDate=(dateString:string)=> {
    return !isNaN(Date.parse(dateString));
}

export default function taskFilter(tasks:any, filterDate:{ date:string, isFilter:boolean}) {
    if(!isValidDate(filterDate.date) || !filterDate.isFilter){
        return tasks;
    }
    else{
        return tasks.filter((task:any)=>{
            return task.startTime === filterDate.date;
        });
    }
}