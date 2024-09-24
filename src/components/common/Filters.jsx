import React, { useState } from 'react';

const clients = ['One Inc', 'Slide', 'Metaz'];
const statuses = ['Active', 'Inactive'];

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
        <div className="flex gap-10 p-5">
            <span className="flex gap-5">
                <div className="flex flex-col gap-2">
                    <h4>Client</h4>
                    {clients.map(client => (
                        <label key={client}>
                            <input 
                                type="checkbox"
                                checked={selectedClients.includes(client)} 
                                onChange={() => handleClientChange(client)} />
                            {client}
                        </label>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <h4>Status</h4>
                    {statuses.map(status => (
                        <label key={status}>
                            <input 
                                type="checkbox"
                                checked={selectedStatuses.includes(status)} 
                                onChange={() => handleStatusChange(status)} />
                            {status}
                        </label>
                    ))}
                </div>
            </span>
            <div className="bg-slate-200 h-fit px-2 rounded-full cursor-pointer" onClick={applyFilters}>
                Apply Filters
            </div>
            <div className="bg-slate-200 h-fit px-2 rounded-full cursor-pointer" onClick={onClose}>
                X
            </div>
        </div>
    );
};

export default Filter;
