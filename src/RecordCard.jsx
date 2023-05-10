import React from 'react';

const RecordCard = ({ record }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
        <div className="text-xs font-medium text-gray-500"><strong><b>Class:</b></strong> {record.class} <strong><b>DNS Record:</b></strong> {record.type}</div>
        <div className="text-lg font-bold"><strong><b>Host: </b></strong> {record.host}</div>
        <ul className="text-sm text-gray-600">
            <li><strong>TTL: </strong>{record.ttl}</li>
            {record.type === 'A' && <li><strong>IP: </strong>{record.ip}</li>}
            {record.type === 'AAAA' && <li><strong>IPv6: </strong>{record.ipv6}</li>}
            {record.type === 'MX' && <li><strong>PRI: </strong>{record.pri}</li>}
            {record.type === 'MX' && <li><strong>TARGET: </strong>{record.target}</li>}
            {record.type === 'TXT' && <li style={{'word-wrap':'break-word'}}><strong>VALUE: </strong>{record.txt}</li>}
            {record.type === 'SRV' && <>
            <li><strong>PRIORITY: </strong>{record.priority}</li>
            <li><strong>WEIGHT: </strong>{record.weight}</li>
            <li><strong>PORT: </strong>{record.port}</li>
            <li><strong>TARGET: </strong>{record.target}</li>
            </>}
        </ul>
        </div>
    );
};

export default RecordCard;