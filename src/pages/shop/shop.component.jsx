import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverView from '../../components/collections-overview/collections-overview.component';
import CategoryPage from '../catergory/category.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverView} />
    
    </div>
);

export default ShopPage;