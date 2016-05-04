import React, { Component} from 'react'
import { Link } from 'react-router'

export default class Txt_page extends Component {

	constructor (props) {
		super(props)

		this.state = {}
	}

//	------------------------	------------------------	------------------------

	render () {
		const { page } = this.props.params
		const page_x = app.settings.ws_conf.pgs[page]

		if (!page || !page_x) return null

		return (
			<section id='Txt_page'>
				<div id='page-container'>
					<h1>{page_x.pg_name}</h1>

					<div dangerouslySetInnerHTML={{__html: page_x.__cdata}} />
				</div>
			</section>
		)
	}

}

Txt_page.propTypes = {
	params: React.PropTypes.any
}

Txt_page.contextTypes = {
  router: React.PropTypes.object.isRequired
}