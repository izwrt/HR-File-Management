const EmployeeBusinessLog = ({employeeName,client,startDate,endDate,status,action,color}) => {
    return(
        <div>
            <div className={`text-black font-semibold text-sm 2xl:text-base p-3 custom-font-mavan-pro ${color} flex justify-between`}>
              <span className="opacity-60">{employeeName}</span>
              <span className="opacity-60">{client} </span>
              <span className="opacity-60">{startDate} </span>
              <span className="opacity-60">{endDate} </span>
              <span className="opacity-60">{status} </span>
              <span className="opacity-60">{action} </span>
            </div>
          </div>
    )
}

export default EmployeeBusinessLog;