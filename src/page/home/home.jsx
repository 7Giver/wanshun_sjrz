import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actionCreator";
import { Button } from 'antd';

class Home extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            size: 'large'
        }
    }
    render() {
        const { a, getA } = this.props
        const {size}= this.state
        return (
            <Fragment>
                {a}
                <button onClick={getA}>更改数据</button>
                <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
            </Fragment>
        );
    };

}

const mapStateToProps = store => {
    return {
        a: store.getIn(["home", "a"])
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getA(){
            dispatch(actionCreator.getAaction())
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);