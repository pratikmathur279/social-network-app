import React, { Component } from 'react';

import classes from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    setStyle(){
       if(window.screen.width > 500){
        return{
            transform: this.props.show ? 'translateY(25px)' : 'translateY(-130vh)',
            opacity: this.props.show ? '1' : '0'
        }   

       }
       else {
           return{
                transform: this.props.show ? 'translateY(-25px)' : 'translateY(-130vh)',
                opacity: this.props.show ? '1' : '0'
           }
       } 
    }

    render () {
        return (
            <Auxiliary>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                
                <div
                    className={classes.Modal}
                    style={this.setStyle()}>
                    <img src="https://img.icons8.com/metro/26/000000/multiply.png" className={classes.CloseButton} onClick={this.props.modalClosed}></img>
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}

export default Modal;