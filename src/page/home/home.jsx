import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import * as actionCreator from "./store/actionCreator";

class Home extends PureComponent {

    render() {
        const { a, getA } = this.props

        return (
            <Fragment>
                {a}
                <button onClick={getA}>更改数据</button>
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