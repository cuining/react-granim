import React, { Component } from 'react';
import PropsType from 'prop-types';
import granim from 'granim';

export default class Granim extends Component {
  static propsType = {
    id: PropsType.string,
    name: PropsType.string,
    elToSetClassOn: PropsType.string,
    direction: PropsType.oneOf('diagonal', 'left-right', 'top-bottom', 'radial'),
    isPausedWhenNotInView: PropsType.bool,
    opacity: PropsType.arrayOf(PropsType.number).isRequired,
    stateTransitionSpeed: PropsType.number,
    defaultStateName: PropsType.string,
    states: PropsType.object.isRequired
  }

  static defaultProps = {
    id: `granim-canvas-${Math.random().toString(36).substring(2)}`,
    defaultStateName: 'default-state'
  }

  get config() {
    // default
    return {
      element: `#${this.props.id}`,
      opacity: [1, 1],
      states : {
        [this.props.defaultStateName]: {
          gradients: [
            ['#EB3349', '#F45C43'],
            ['#FF8008', '#FFC837'],
            ['#4CB8C4', '#3CD3AD'],
            ['#24C6DC', '#514A9D'],
            ['#FF512F', '#DD2476'],
            ['#DA22FF', '#9733EE']
          ],
          transitionSpeed: 2000
        }
      }
    }
  }

  get style() {
    return {
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  }

  componentDidMount() {
    this.granim = new granim(Object.assign({}, this.config, this.props));
  }

  render() {
    const { id, style } = this.props;
    return (
      <canvas id={id} style={style || this.style}></canvas>
    )
  }
}
