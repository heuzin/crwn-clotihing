import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverView from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectoinsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverView)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectoinsStartAsync } = this.props;

        fetchCollectoinsStartAsync();
    };

    render() {
        const { match, isCollectionFetching, isCollectionloaded } = this.props;
        return (
            <div className='shop-page'>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    render={(props) => 
                        <CollectionsOverViewWithSpinner 
                            isLoading={isCollectionFetching} 
                            {...props}
                        />} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPage}
                    render={(props => (
                        <CollectionPageWithSpinner 
                            isLoading={!isCollectionloaded} 
                            {...props}
                        />
                    ))}
                />
            </div>
        )
    }
};

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionloaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectoinsStartAsync: () => dispatch(fetchCollectoinsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);