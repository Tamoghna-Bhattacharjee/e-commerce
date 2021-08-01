import React from 'react'
import {ShopData} from './ShopData'; 
import { CollectionPreview } from '../../components/Collection-Preview/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = ShopData;
    }
    render() {
        return (
            <div className='shop-page'>
                <CollectionPreview/>
            </div>
        );
    }
}

export default ShopPage;