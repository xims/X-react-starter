import React, { Component} from 'react'
import { Link } from 'react-router'

export default class User extends Component {

	constructor (props) {
		super(props)

		this.state = {}
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<section id='User'>
				<div id='page-container'>
					<h1>User profile</h1>

					<h2>TODO</h2>
					<button type='submit' onClick={this.saveUser.bind(this)} className='button'><span>SAVE <span className='fa fa-caret-right'></span></span></button>

				</div>
			</section>
		)
	}

//	------------------------	------------------------	------------------------

	saveUser (e) {
		this.context.router.push('/')
	}

}

User.propTypes = {
	params: React.PropTypes.any
}

User.contextTypes = {
  router: React.PropTypes.object.isRequired
}