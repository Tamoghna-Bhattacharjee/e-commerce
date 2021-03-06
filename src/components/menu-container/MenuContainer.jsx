import React, {Component} from 'react';
import './MenuContainer.scss';
import MenuItem from '../menu-item/MenuItem.jsx';

class MenuContainer extends Component {
    constructor() {
        super();
        this.state = {
            section: [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: ''
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: ''
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: ''
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: ''
                }
            ]              
        }

    }

    render() {
        return (
            <div className='menu-container'>
                {
                    this.state.section.map(({id, ...otherProps}) => {
                            return <MenuItem key={id} {...otherProps}/>
                        }
                    )
                }
            </div>
        );
        
    }
}

export default MenuContainer;