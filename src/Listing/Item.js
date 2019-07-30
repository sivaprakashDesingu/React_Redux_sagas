import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom";
import { gateway as MoltinGateway } from "@moltin/sdk";
import {getList,updateList} from "./../Action/Action";
import { connect } from "react-redux";
import Icon from '@material-ui/core/Icon'; 
import Payment from "./../Payment/Payment";
import Tick from './done.png'
export class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.pickItem = this.pickItem.bind(this);
  }
  UpdateList ={}
  pickItem(pickedItem, id) {
    //console.log(pickedItem,id)
    document.getElementById(id).classList.toggle("active")
    this.UpdateList = pickedItem.map(function(data,i){
        if(data.id == id && i<=5 && data.pickedItem!=='Yes'){
          data.pickedItem = 'Yes'
          return data
        }else{
          data.pickedItem = 'No'
          return data
        }
    });
  }
  componentWillMount() {
    this.props.getList();
  }
  updateList(){
    //console.log(this.UpdateList)
    this.props.updateList(this.UpdateList)
    this.props.history.push({
      pathname: '/Payment',
    });
  }
  render() {
    //const { pickedItem } = this.state;
    const  {list} = this.props
    let filtereDate;
    if(list!==undefined && list.length>0){
      filtereDate = list.map(function(data,i){
        if(i<=5){
          return(
            <div key={data.id} ref={data.id} id={data.id} onClick={this.pickItem.bind(this, list, data.id )} className='item-list'>
              <span className="tickMark"><img src={Tick} /></span>
              <div className="logoWarapper">
                <img
                  src="https://rukminim1.flixcart.com/image/660/792/jmdrr0w0/shirt/q/q/r/xxl-tblwtshirtful-sh4-tripr-original-imaf9ajwb3mfbhmh.jpeg?q=50"
                  width="100"
                  height="100"
                  alt=""
                />
              </div>
              <div className="itemWarapper">
                <h3>{data.name}</h3>
                <p>
                  <span>&#8377;</span>
                  <span>{data.id}</span>
                </p>
              </div>
            </div>
          )
        }
        
      }.bind(this));

    }
   
    return (
      <div className="ItemPage">
        <header>
          <h1>Online shopping</h1>
          <h2>Visit | Pick | Pay</h2>
        </header>

        {filtereDate}
        <div className="btnWrp">
          <button onClick={this.updateList.bind(this)} className="button">Make Payment</button>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  list: PropTypes.object,
  getList: PropTypes.func,
  updateList:PropTypes.func
}
function mapStateToProps(state){
  const Items= state
  return {
    list : Items.list
  }
}

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList()),
  updateList: (list) =>
    dispatch(updateList(list))
})
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Item));
