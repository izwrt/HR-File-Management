import React, { useState } from 'react';
import Close from "../../assets/images/close.png";

const clients = ['One Inc', 'Slide', 'Metaz'];
const statuses = ['Active', 'Inactive', 'Relieved'];

const Filter = ({ onClose, onApply }) => {
    const [selectedClients, setSelectedClients] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const handleClientChange = (client) => {
        setSelectedClients(prev =>
            prev.includes(client) ? prev.filter(c => c !== client) : [...prev, client]
        );
    };

    const handleStatusChange = (status) => {
        setSelectedStatuses(prev =>
            prev.includes(status) ? prev.filter(s => s !== status) : [...prev, status]
        );
    };

    const applyFilters = () => {
        onApply(selectedClients, selectedStatuses);
        onClose();
    };

    return (
        <div className="flex flex-col gap-4 py-4 px-6 ">
            <div className="custom-font-mavan-pro text-lg flex items-center justify-between font-semibold  text-gray-950 text-opacity-70">Search filters
            <button className="cursor-pointer w-5 h-fit rounded-full overflow-hidden transition-all ease-in-out  duration-300 hover:scale-90 hover:opacity-60 focus:bg-slate-200" onClick={onClose}>
                <img src={Close} alt="" />
            </button>
            </div>
            <div>
            <span className="flex gap-20">
                <div className="flex flex-col gap-2">
                    <h4 className="border-b border-gray-500 custom-font-mavan-pro pb-2 pr-16 mb-2 text-base">Client</h4>
                    {clients.map(client => (
                        <label key={client} className={`custom-font-mavan-pro text-base  ${selectedClients.includes(client) ? 'opacity-90' : 'opacity-70'}`}>
                            <input 
                                type="checkbox"
                                checked={selectedClients.includes(client)} 
                                onChange={() => handleClientChange(client)}
                                className="mr-2"/>
                            {client}
                        </label>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="border-b border-gray-500 custom-font-mavan-pro pb-2 pr-16 mb-2 text-base">Status</h4>
                    {statuses.map(status => (
                        <label key={status} className={`custom-font-mavan-pro text-base  ${selectedStatuses.includes(status) ? 'opacity-90 ' : 'opacity-70'}`}>
                            <input 
                                type="checkbox"
                                checked={selectedStatuses.includes(status)} 
                                onChange={() => handleStatusChange(status)} 
                                className="mr-2 custom-font-mavan-pro"/>
                            {status}
                        </label>
                    ))}
                </div>

            </span>
            
            </div>
            <button className="text-black customColorBlue-lite h-fit rounded-lg cursor-pointer px-4 py-2 w-fit custom-font-mavan-pro self-center mt-2 text-opacity-80 hover:opacity-70 hover:scale-95 transition-all duration-100" onClick={applyFilters}>
                Apply
            </button>


        </div>
    );
};

export default Filter;
