import React, { Component } from 'react';

class Cart extends Component {
    state = {}
    constructor(props) {
        super(props);
        this.state = { 
            currentOrder: JSON.parse(localStorage.getItem('currentOrder')), // list of obj
            totalPrice: 0
        }
    }

    componentDidMount = ()=>{
        this.calcTotalPrice()
    }

    calcTotalPrice = ()=>{
        let totalPrice = 0
        this.state.currentOrder.forEach( ord => {
            totalPrice += ord.n * ord.product.price
        });
        this.setState({totalPrice: totalPrice})
    }

    buy = ()=>{
        localStorage.setItem('currentOrder','[]')
        this.setState({
            currentOrder: [],
            totalPrice: 0
        })
    }
    render() { 
        return ( 
            <div>
                <br/> <br/> <br/> <br/>
            <div class='container'>
            <h2 class="text-danger text-center">current order</h2> <br/> <br/>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">price</th>
                        <th scope="col">count</th>
                        <th scope="col">total</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.currentOrder.map( (ord)=> (
                        <tr onClick={0}>
                            <td>{ord.product.name}</td>
                            <td>{ord.product.price}</td>
                            <td>{ord.n}</td>
                            <td>{ord.product.price * ord.n}</td>
                        </tr>
                        
                    )
                )}
                </tbody>
            </table>
            <h3>Total Price: {this.state.totalPrice} EGP</h3>
            <button type="button" class="btn btn-danger btn-block" onClick={this.buy}>BUY NOW</button>
            </div>
            </div>
         );
    }
}
 
export default Cart;