import React, { Component } from "react";
import defaultProps from "../defaultProps";
import defaultPropTypes from "../defaultPropTypes";
import pick from "lodash.pick";
import xor from "lodash.xor";
import omit from "lodash.omit";

const pickProperties = ["width", "height", "fillClassName"];
const excludeProperties = xor(Object.keys(defaultProps), pickProperties);

const DEFAULT_PROPS = pick(defaultProps, pickProperties);

const DEFAULT_PROPTYPES = pick(defaultPropTypes, pickProperties);

export default class FloatFull extends Component {
  static defaultProps = DEFAULT_PROPS;
  static propTypes = DEFAULT_PROPTYPES;

  render() {
    const { fillClassName, ...rest } = omit(this.props, excludeProperties);

    return (
      <svg {...rest} viewBox="0 0 18 18">
        <path
          className={fillClassName}
          d="M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z"
        />
        <path
          className={fillClassName}
          d="M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z"
        />
        <rect
          className={fillClassName}
          x="2"
          y="6"
          width="14"
          height="6"
          rx="1"
          ry="1"
        />
      </svg>
    );
  }
}
