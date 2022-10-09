export default function(tasks:any){
    const filteredToday=tasks.filter((task:any)=>{
        var currentDate = new Date()
        var dateWithoutTime=new Date(currentDate).toLocaleDateString('en-CA');
        if (String(task.startTime) === String(dateWithoutTime)) {
            // console.log(String(dateWithoutTime)+" equals "+task.startTime);
            return true;
        }
        return false;
    });
    const filteredYesterday=tasks.filter((task:any)=>{
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayFormatted=new Date(yesterday).toLocaleDateString('en-CA');
        if (String(task.startTime) === String(yesterdayFormatted)) {
            // console.log(String(yesterdayFormatted) + ' equals ' + task.startTime);
            return true;
        }
        return false;
    });
    var dataToday = [
        {
            title: 'Work',
            value: 0,
            color: '#ff4d4d'
        },
        {
            title: 'Meeting',
            value: 0,
            color: '#82ca5d'
        },
        {
            title: 'Break',
            value: 0,
            color: '#3366ff'
        }
    ];
    var dataYesterday = JSON.parse(JSON.stringify(dataToday));
    filteredYesterday.forEach((element:any)=>{
        if(element.taskType==="Work"){
            dataYesterday[0].value+=Number(element.duration);
        }
        else if(element.taskType==="Meeting"){
            dataYesterday[1].value+=Number(element.duration);
        }
        else if(element.taskType==="Break"){
            dataYesterday[2].value+=Number(element.duration);
        }
    });
    filteredToday.forEach((element:any)=>{
        if(element.taskType==="Work"){
            dataToday[0].value+=Number(element.duration);
        }
        else if(element.taskType==="Meeting"){
            dataToday[1].value+=Number(element.duration);
        }
        else if(element.taskType==="Break"){
            dataToday[2].value+=Number(element.duration);
        }
    });
    dataToday=dataToday.filter((element:any)=>{
        return ((element.value!==0)?true:false);
    });
    dataYesterday=dataYesterday.filter((element:any)=>{
        return ((element.value!==0)?true:false);
    });
    // console.log(dataToday, dataYesterday);
    return [dataToday,dataYesterday];
}
