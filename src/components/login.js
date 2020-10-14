import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            mail: '',
            logged: false
         }
    }
    change = (e) => {
        let name = e.target.name ,    
            val = e.target.value 
        this.setState({
            [name]: val  
        })
    }
    submit = (e) => {
        e.preventDefault()
        let error = ''
        error = (this.state.mail) ? error : 'enter your mail'
        error = (this.state.username) ? error : 'enter your username'
        this.setState({
            massage: error ? <div className='alert alert-danger'>{error}</div> : '' 
        })

        if( this.state.username === localStorage.getItem('username') &&
            this.state.mail === localStorage.getItem('mail'))
        { // success
            localStorage.setItem('logged', 'yes')
            this.props.update()
        }else{ // fails
            this.setState({
                massage: <div className='alert alert-danger'>
                            invalide username or mail (-_-)
                        </div>
            })
        }

    }

    render() { 
        return ( 
            <div>
                                <br/> <br/> <br/>  <br/> <br/> <br/>

            <div class="row justify-content-center">
                <form class='col-md-4 text-center py-5 shadow rounded loginform' onSubmit={this.submit}>

                    <h3 class="mb-5 text-danger">log in</h3>
                    {this.state.massage}
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="text-light h4">username</label>
                        <input type="text" class="form-control" name="username" placeholder="username" onChange={this.change} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1" class="text-light h4">mail</label>
                        <input type='mail' class="form-control" name="mail" aria-describedby="emailHelp" placeholder="someone@ex.com" onChange={this.change}/>
                    </div>
                    <button type='submit' class='btn btn-outline-danger btn-block' >Log In</button>
                </form>
            </div>
            </div>
         );
    }
}
 
export default Login;