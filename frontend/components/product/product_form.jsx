import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductForm extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = Object.assign( {}, { photoFiles: "", photoUrls: ""} , this.props.product)
        // this.handleSubmit = this.handleSubmit.bind(this);

    }


    // componentDidMount() {
    //     console.log(this.props)
    // }
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', this.state.price);
        formData.append('product[user_id]', this.state.user_id);
        formData.append('product[category]', this.state.category);
        formData.append('product[quantity]', this.state.quantity);


        if (this.state.photoFiles) {
                formatData.append('product[photo]', photoFiles);
            }

        this.props.processForm(formData)
            .then(payload => {
                this.props.history.push(`/products/${payload.product.id}`)
            });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        return (
            <div className="product-form">
                <h1>Add a new listing</h1>
                {this.renderErrors()}
                <div className="photo-container">
                    <div className="photo-info">
                    <h2>Photos</h2>
                    <p className="product-p1">Add as many as you can so buyers can see every detail.</p>
                            <div className="photo-list">
                            <p className="product-p2">Use up to ten photos to show your item's most important
                                qualities.
                            </p>
                            <p className="product-p3">
                                Tips:
                            </p>
                            <li>
                                Use natural light and no flash.
                            </li>
                            <li>
                                Include a common object for scale.
                            </li>
                            <li>
                                Show the tiem being held, worn, or used.
                            </li>
                            <li>
                                Shoot against a clean, simple background.
                            </li>
                        </div>
                    </div>
                </div>

                <form className="detail-container" onSubmit={this.handleSubmit}>
                    <h2>Listing details</h2>
                    <p>Tell the world all about your item and why they'll love it.</p>
                    <label>Title
                        <input type="text" value={this.state.title} onChange={this.update("title")}/>
                    </label>
                    
                    <label className="detail-select">Category
                            <select id="category" 
                                value={this.state.category}
                                onChange={this.update("category")}>
                                <option value="default">--Select a Category--</option>
                                <option value="jewelry & accessories">Jewelry & Accessories</option>
                                <option value="clothing & shoes">Clothing & Shoes</option>
                                <option value="home & living">Home & Living</option>
                                <option value="toys & entertainment">Toys & Entertainment</option>
                                <option value="art & collectibles">Art & Collectibles</option>
                                <option value="craft supplies">Craft Supplies</option>
                                <option value="vintage">Vintage</option>
                            </select>
                    </label>
    
                    <label>Quantity
                            <input type="number" value={this.state.number} onChange={this.update("quantity")}/>
                    </label>

                    <label>Price
                        <input type="number" value={this.state.price} 
                            onChange={this.update("price")} 
                            placeholder="0.00"/>
                    </label>

                    <label>
                        Description
                        <div id="description">
                            <textarea id="details" value={this.state.description} onChange={this.update("description")}></textarea>
                        </div>
                    </label>

                    <div className="submission-buttons">
                        <input type="submit" value="Save and Continue"/>
                    </div>

                </form>
            </div>

        );
    }

};


export default withRouter(ProductForm);