const EmployeeBusinessLog = ({employeeName,client,startDate,endDate,status,action,color,fontWeight,position,id}) => {
    return(
        <div>
            <div className={`text-black ${fontWeight} text-sm p-3 pr-12 custom-font-mavan-pro ${color} ${position} flex justify-between`}>
              <span className="opacity-60 w-[100px]">{id}</span>
              <span className="opacity-60 w-[200px]">{employeeName}</span>
              <span className="opacity-60 w-[100px]">{client} </span>
              <span className="opacity-60 w-[100px]">{startDate} </span>
              <span className="opacity-60 w-[100px]">{endDate} </span>
              <span className="opacity-60 w-[100px]">{status} </span>
              <span className="opacity-60 w-[100px] flex justify-center">{action} </span>
            </div>
          </div>
    )
}

export default EmployeeBusinessLog;