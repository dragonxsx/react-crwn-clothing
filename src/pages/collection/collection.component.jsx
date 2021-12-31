import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shop.selectors";

import './collection.styles.scss';

const CollectionPage = () => {
    const params = useParams();
    const collectionId = params.collectionId;

    const collection = useSelector(selectCollection(collectionId));

    return (
        <div className="collection-page">
            <h2>COLLECTION PAGE: {collection.title}</h2>
        </div>
    );
} 

export default CollectionPage;