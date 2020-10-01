import React from 'react';

const ShowData = () => {
    return (
        <div className="my-3 p-3 bg-white rounded shadow-sm">
            <h6 className="border-bottom border-gray pb-2 mb-0">Ùltimas Reservas</h6>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>User name</th>
                        <th>Key name</th>
                        <th>Key number</th>
                        <th>Delivered at</th>
                        <th>Returned at</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ShowData;