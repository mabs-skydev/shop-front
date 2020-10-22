import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCategories } from '../store/entities/categories';
import { Link } from 'react-router-dom';

const Categories = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.entities.categories.list)

    useEffect(() => {
        dispatch(loadCategories())
    }, [dispatch])

    return ( 
        <React.Fragment>
            <div className="row">
                <div className="col-md-3">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Categories</li>
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
                            {categories.map(category => <tr key={category._id}>
                                <td>{category.name}</td>
                                <td></td>
                            </tr>)}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Categories;