import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'


export default class SignupForm extends React.Component {
  state = {
    username: undefined,
    password: undefined,
    email: undefined,
    contact_number: undefined,
    city: undefined,
    post_code: undefined,
    tags: []
  }

  createUserOnServer = () => {
    const { username, password, email, contact_number, city, post_code, tags } = this.state

    fetch('http://192.168.1.40:5000/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        contact_number: contact_number,
        city: city,
        post_code: post_code,
        tags: tags
      })
    })
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


  render () {
    const { username, password, email, contact_number, city, post_code, tags } = this.state

    return(
    <React.Fragment><br></br>
    <div className="float-center">
      <h3>Create an account</h3>
      <Form>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Username' type='username' name='username' value={username} onChange={this.handleChange} placeholder='username'/>
        </Form.Group>
            <Form.Input fluid label='Email' type='email' name='email' value={email} onChange={this.handleChange} placeholder='email'/>
              <Form.Input
                fluid label='Password'
                id='password'
                placeholder='password'
                onChange={this.handleChange}
                margin='normal'
                name='password'
                type='password'
              />
        <Form.Field>
            <label>Contact Number </label>
            <input name='contact_number' value={contact_number} onChange={this.handleChange} placeholder='contact number'/>
        </Form.Field>
        <Form.Group widths='equal'>
                <Form.Input fluid label='City' type='city' name='city' value={city} onChange={this.handleChange} placeholder='city'/>
                <Form.Input fluid label='Post code' type='post_code' name='post_code' value={post_code} onChange={this.handleChange} placeholder='post code'/>
        </Form.Group>
        <Form.Checkbox label='I agree to the Terms and Conditions'/><br></br>
        <button className="button" onClick={this.createUserOnServer}>Submit</button>
      </Form>
      </div>
      </React.Fragment>
    )
  }

  }
