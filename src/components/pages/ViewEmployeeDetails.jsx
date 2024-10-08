import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ViewEmployeeDetails = () => {
    const [empData, setEmpData] = useState(null);
    console.log(empData);
    const {id} = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:5000/api/employees/${id}`)
        .then((response) => {
            setEmpData(response.data);
        })
        .catch((error) => {
            console.error(
              `There was a error fetching the employees ${error}`
            );
        })
    }, []);

    console.log(empData);

    return(
        empData === null ? (<div className="mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 bg-red-400">loading</div>) 
        :
    ( <section className="mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 bg-red-400 h-full">
                <div className="bg-green-500 flex items-center gap-5 text-4xl">
                    <div className="w-[300px] h-[300px] rounded-full overflow-hidden bg-yellow-500 flex justify-center items-center">
                        <img className="object-cover h-[300px] w-[300px] " src={empData.empImg}/>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            {empData.empid}
                        </div>
                        <div>
                            {empData.name}
                        </div>
                    </div>
                </div>
        </section>)

    )
}

export default ViewEmployeeDetails;