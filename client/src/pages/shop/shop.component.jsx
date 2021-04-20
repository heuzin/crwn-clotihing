import React, { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { ShopPageContainer } from './shop.styles';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverViewContainer = lazy(() => import('../../components/collections-overview/collections-overview.component'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <ShopPageContainer className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverViewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </Suspense>
        </ShopPageContainer>
    )
};


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);