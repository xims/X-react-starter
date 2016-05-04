import React, { Component} from 'react'
import { Link } from 'react-router'

export default class Home extends Component {

	constructor (props) {
		super(props)

		this.state = {visible: true}
	}

	componentDidMount () {
		// hide the component if you are not on the root
		this.setState({visible: window.location.pathname == '/' || window.location.pathname == ''})
		this.context.router.listen(this.onRouteChange.bind(this))
	}
	onRouteChange (e) {
		// console.log ('onRouteChange ', e.pathname)
		this.setState({visible: e.pathname === '/'})
	}

//	------------------------	------------------------	------------------------

	render () {
		if (!this.state.visible) return null

		return (
		<section id='Home'>
			<div id='page-container'>
				<h1>Home</h1>

				<h3>This is a simple example of React.js stack based website</h3>
				<br/>
				<h4>Major libraries used:</h4>
				<ul className='simple_list'>
					<li>react</li>
					<li>webpack</li>
					<li>babel</li>
					<li>react-router</li>
					<li>ampersand</li>
					<li>sass</li>
					<li>jest</li>
				</ul>

				<br/>
				<h3>Configurable with external XML file - <a href="./ws_conf.xml" target='blank'>ws_conf.xml</a></h3>

				<br/><br/>
				<h2>For demonstration purposes.</h2>
				<br/>

				<button type='submit' onClick={this.start.bind(this)} className='button'><span>LOG IN <span className='fa fa-caret-right'></span></span></button>

			</div>
		</section>
		)
	}

//	------------------------	------------------------	------------------------

	start (e) {
		this.context.router.push('/user')
	}

}

Home.propTypes = {
	params: React.PropTypes.any
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}