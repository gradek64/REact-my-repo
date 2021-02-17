import React, { Component } from 'react';
import PropTypes from 'prop-types';

// custom
import Card from '../Item/Card';
import data from '../../data/data_test';
import variables from './carusel-style.scss';

// css setup;
const {
	showFrontImages,
	itemWidth: width,
	itemWidthSmallDesktop,
	smallDesktop,
} = variables;
// class component
class Carusel extends Component {
	state = {
		allItems: null,
		index: 0,

		setTimer: this.props.timer,
		showFrontImagesNumber: showFrontImages,
		itemWidth: width,
	};

	componentDidMount = () => {
		// that would be async call;
		const { setTimer } = this.state;
		this.setState({ allItems: data.items });
		// if timer
		if (setTimer) this.moveItemsTimer();
		this.goLeft = true;

		//devision for next images set
		this.devision = 7 % showFrontImages;
		console.log('showFrontImages', showFrontImages);
		console.log('this.devision,this.devision', this.devision);

		// addListener is a listener for matchMedia goes back to IE10
		window
			.matchMedia(`(max-width: ${smallDesktop})`)
			.addListener(this.addMediaBreakPoint);
	};

	componentDidUnMount = () => {
		// remmeber to remove once the component is dismputed/destroyed
		window
			.matchMedia(`(max-width: ${smallDesktop})`)
			.removeListener(this.addMediaBreakPoint);
	};

	addMediaBreakPoint = (e) => {
		if (e.matches) {
			// If media query matches
			this.setState({ itemWidth: itemWidthSmallDesktop });
		} else {
			this.setState({ itemWidth: width });
		}
	};

	moveItemsTimer = () => {
		const { delay } = this.props;
		this.timer = setInterval(() => {
			const { index, allItems, setTimer } = this.state;
			!setTimer ? clearInterval(this.timer) : false;
			if (setTimer) {
				index !== 0 && !this.goLeft
					? (this.prevItem(), (this.goLeft = false))
					: (this.goLeft = true);

				index !== allItems.length - showFrontImages && this.goLeft
					? (this.nextItem(), (this.goLeft = true))
					: (this.goLeft = false);
			}
		}, delay);
	};

	nextItem = (e) => {
		// diable timer on manual click next;
		if (e) this.setState({ setTimer: false });
		const { index } = this.state;

		this.setState({
			index: index < 8 ? index + 1 : 1,
		});
	};

	prevItem = (e) => {
		// diable timer on manual click prev;
		if (e) this.setState({ setTimer: false });
		const { index } = this.state;
		this.setState({
			index: index - 1,
		});
	};

	render() {
		const { allItems, index, showFrontImagesNumber, itemWidth } = this.state;
		console.log('index', index);
		return (
			<div className="App">
				<button
					type="button"
					className="hideForMobile"
					onClick={this.nextItem}
					// in order to test disabled state all conditions have to be on the state for testing to set up
					/* 	disabled={
						allItems && index === allItems.length - showFrontImagesNumber
					} */
					// disabled={allItems && index === allItems.length}
				>
					Next
				</button>
				<button
					type="button"
					className="hideForMobile"
					onClick={this.prevItem}
					/* 	disabled={index === 0} */
				>
					Prev
				</button>

				<div
					className="carusel-box"
					style={{
						// transform: `translateX(-${index.index * (100 / properties.length)}%)`,
						flexDirection: index < 0 ? 'row-reverse' : 'row',
					}}
				>
					<ul
						className="cards-slider-inner"
						style={{
							// transform: `translateX(-${index.index * (100 / properties.length)}%)`,
							transform: `translateX(${(this.devision - index) * itemWidth}%)`,
						}}
					>
						{
							/* eslint-disable no-underscore-dangle */
							data.items
								? data.items.map((item) => <Card key={item._id} {...item} />)
								: null
						}
					</ul>
					<ul
						className="cards-slider-inner"
						style={{
							// transform: `translateX(-${index.index * (100 / properties.length)}%)`,
							transform: `translateX(${(this.devision - index) * itemWidth}%)`,
						}}
					>
						{
							/* eslint-disable no-underscore-dangle */
							data.items
								? data.items.map((item) => <Card key={item._id} {...item} />)
								: null
						}
					</ul>
				</div>
			</div>
		);
	}
}

Carusel.propTypes = {
	timer: PropTypes.bool,
	delay: PropTypes.number,
};
Carusel.defaultProps = {
	timer: false,
	delay: 2000,
};
export default Carusel;
