import React from 'react'
import {ShopData} from './ShopData'; 
import { CollectionPreview } from '../../components/Collection-Preview/CollectionPreview';
import './ShopPage.scss'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: ShopData
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...others}) => {
                        return <CollectionPreview key={id} {...others}/>
                    })
                }
            </div>
        );
    }
}

export default ShopPage;