import React from "react";
import { Routes, Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import './shop.styles.scss';

const ShopPage = () => (
    <div className='shop-page'>
        <Routes>
            <Route path='/' element={<CollectionsOverview />}></Route>
            <Route path='/:collectionId' element={<CollectionPage />}></Route>
        </Routes>
    </div>
);

export default ShopPage;