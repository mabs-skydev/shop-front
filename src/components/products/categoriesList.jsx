import React from 'react';

const CategoriesList = ({categories, selectedCategory, onClick}) => {
    return ( 
        <React.Fragment>
            <ul className="list-group">
                {categories.map(category => <li className={`list-group-item ${(selectedCategory === category._id)? 'active': ''}`}
                                                key={category._id}
                                                onClick={() => {onClick(category._id)}}>
                                                    {category.name}
                                                    </li>)}
            </ul> 
        </React.Fragment>
    );
}
 
export default CategoriesList;