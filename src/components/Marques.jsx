import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadMarques } from '../store/entities/marques';

const Marques = () => {
    const dispatch = useDispatch()
    const marques = useSelector(state => state.entities.marques.list)

    useEffect(() => dispatch(loadMarques()), [dispatch])

    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-md-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Marques</li>
                        </ol>
                    </nav>
                </div>

            </div>
            <div className="row mt-3">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {marques.map(marque => <tr key={marque._id}>
                                <td>{marque.name}</td>
                                <td></td>
                            </tr>)}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Marques;