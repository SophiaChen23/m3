import React from 'react';

function index({ registrations }) {
    return (
        <div>
            {registrations.length ? (
                <table className="listing-table table-dark table-striped">
                    <tr>
                        <th style={{ verticalAlign: 'middle' }}>Name</th>
                        <th style={{ verticalAlign: 'middle' }}>Email</th>
                        <th style={{ verticalAlign: 'middle' }}>Username</th>
                        <th style={{ verticalAlign: 'middle' }}>Password</th>
                    </tr>
                    {registrations.map((registration, index) => (
                        <tr key={index}>
                            <td style={{ verticalAlign: 'middle' }}>{registration.name}</td>
                            <td style={{ verticalAlign: 'middle' }}>{registration.email}</td>
                            <td style={{ verticalAlign: 'middle' }}>{registration.username}</td>
                            <td style={{ verticalAlign: 'middle' }}>{registration.password}</td>
                        </tr>
                    ))}
                </table>
            ) : (
                <p>No registrations yet :(</p>
            )}
        </div>
    );
}

export default index;
