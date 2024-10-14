import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

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
    ( <div className="mt-16 ml-[220px] 2xl:ml-[230px] md:ml-0 h-full pl-8 pr-12">
                <section className="flex items-center gap-8 text-4xl py-6">
                    <div className="w-[140px] h-[140px] rounded-full overflow-hidden bg-yellow-500 flex justify-center items-center">
                        <img className="object-cover w-[140px] h-[140px] image-container" src={empData.empImg}/>
                    </div>
                    <div className="flex flex-col custom-font-mavan-pro ">
                        <div className='font-semibold opacity-75 text-3xl'>
                            {empData.name}
                        </div>
                        <div className='text-xl font-medium opacity-70'>
                            {empData.empid}
                        </div>
                    </div>
                </section>

                <section className='w-full'>
                    <nav className='flex flex-wrap gap-3 gap-x-8 custom-font-mavan-pro text-sm font-medium opacity-85 '>
                        <NavLink to="about" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            About
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Interviews
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Salary Slip
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Salary Discussion
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Offer Confirmation
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Offer Letter
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Onboarding
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Verify Background
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Performance Appraisal
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            certification
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            HR Screening
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            Exit Formalities
                        </NavLink>
                        <NavLink to="abc" className={({isActive}) =>{
                           return (isActive ? 'pb-2 border-b-2 border-customBlue' : 'pb-2')
                        }}>
                            client History
                        </NavLink>

                    </nav>
                </section>
                <section>
                    <Outlet/>
                </section>
        </div>)

    )
}

export default ViewEmployeeDetails;