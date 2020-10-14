import React, { Component } from 'react';
//
import data from '../../data.json'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            product: {},
            number: 1, 
        }
    }
    componentDidMount(){
        this.getProduct()
    }
    getProduct = () => {
        let id = this.props.match.params.id
        let prod = data.products.filter((p) => p.id === +id )[0]
        this.setState({product:prod})
    }
    calcCount = (e) => {
        this.setState({
            number: e.target.value ,
        })
    }
    addToCart = (e) => {
        e.preventDefault()
        let isExist = false
        let currentOrder = JSON.parse(localStorage.getItem('currentOrder'))
        currentOrder.forEach(prod => {
            if(prod.product.id===this.state.product.id){
                prod.n = this.state.number
                isExist = true
            }
        });
        isExist = isExist ? isExist : currentOrder.push({product: this.state.product, n: this.state.number})

        localStorage.setItem('currentOrder', JSON.stringify(currentOrder))
    
    }
    render() { 
        
        return (
            <div class="row mt-5">
                <br/> <br/> <br/>
                <div class="col-lg-6 pb-5 pb-lg-0">
                <br/> <br/> <br/>
                    <img src={'/images/flowers/'+this.state.product.img} class="card-img w-100 img-rounded " alt="..." />
                </div>

                <div class="col-lg-6">
                <br/> <br/> <br/>
                    <div class="pl-4">
                        <h2 class="pb-4 text-danger text-center"> {this.state.product.name} </h2>
                        <h4 class="pb-4 text-center"> {this.state.product.price} EGP </h4>
                        <p class="card-text container">
                            {this.state.product.description}
                        </p>
                        
                        
                        {localStorage.getItem('logged')==='yes' 
                            ?
                                <React.Fragment>
                                    <form class='d-flex justify-content-between' onSubmit={this.submit}>
                                        <input id='n' type='number' min="1" defaultValue='1' class="form-control w-25" onChange={this.calcCount} />
                                        <button type='submit' id='buy' class='btn btn-success' onClick={this.addToCart}>Buy</button>
                                    </form>
                                    <div class='d-flex justify-content-center'>
                                        <p>Total <b>{this.state.product.price*this.state.number}</b> EGP</p>
                                    </div>
                                </React.Fragment>
                            : 
                            <></>   
                        }

                    </div>
                </div>
            </div>
         );
    }
}
 
export default Product;