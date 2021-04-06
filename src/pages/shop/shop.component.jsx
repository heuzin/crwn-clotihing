import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectoinsStartAsync } from '../../redux/shop/shop.actions'

import CollectionsOverViewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectoinsStartAsync } = this.props;

        fetchCollectoinsStartAsync();
    };

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverViewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchCollectoinsStartAsync: () => dispatch(fetchCollectoinsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);