import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {getList,updateList,getUpdatedList} from "./../Action/Action";


export  class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickedItem: [1, 2]
    };
  }
  componentWillMount() {
    this.props.getUpdatedList();
  }
  render() {
    console.log(this.props)
    const { pickedItem } = this.state;
    //console.log(pickedItem);
    return (
      <div className="PaymentPage">
        <div className="pageWrapper">
          <form noValidate autoComplete="off">
            <h1>Payment Details</h1>
            <TextField
              id="outlined-name"
              label="Card Type"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Card Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              id="outlined-name"
              label="Card Number"
              margin="normal"
              variant="outlined"
            />
            <div className="clm-2-inp">
              <TextField
                id="outlined-name"
                label="Expiry Date (MM/YYYY)"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-name"
                label="CVV"
                margin="normal"
                variant="outlined"
              />
            </div>
          </form>
          <div className="itemsection">
            <h2>Summery</h2>
            <div className="item-list">
              <div className="logoWarapper">
                <img
                  src="https://rukminim1.flixcart.com/image/660/792/jmdrr0w0/shirt/q/q/r/xxl-tblwtshirtful-sh4-tripr-original-imaf9ajwb3mfbhmh.jpeg?q=50"
                  width="100"
                  height="100"
                  alt=""
                />
              </div>
              <div className="itemWarapper">
                <h3>Item Name</h3>
                <p>
                  <span>&#8377;</span>
                  <span>3000</span>
                </p>
              </div>
            </div>

            <Button variant="contained" color="primary">
              Submit Purchase
            </Button>
          </div>
        </div>
      </div>
    );
  }
}


Payment.propTypes = {
  list: PropTypes.object,
  getList: PropTypes.func,
  updateList:PropTypes.func,
  getUpdatedList:PropTypes.func
}
function mapStateToProps(state,ownProps){
  console.log(state,ownProps)
  const Items= state
  return {
    list : Items.list
  }
}


const mapDispatchToProps = {
  getList,
  updateList,
  getUpdatedList
};
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Payment));

