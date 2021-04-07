import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectoinsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    return disptach => {
        const collectionRef = firestore.collection('collections');
        disptach(fetchCollectionsStart())

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            disptach(fetchCollectoinsSuccess(collectionsMap))            
        }).catch(error => disptach(fetchCollectionsFailure(error.message)));
    }
};