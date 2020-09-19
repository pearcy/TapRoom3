import React from "react";
import KegList from './KegList';
import KegForm from './KegForm';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class KegControl extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            formVisibleOnPage: false,
            selectedKeg: null,
            editing: false
        };
    }

      handleClick = () => {
        if (this.state.selectedKeg != null) {
            this.setState({
                formVisibleOnPage: false,
                selectedKeg: null,
                editing: false
            });
        } else {
            this.setState(prevState => ({
                formVisibleOnPage: !prevState.formVisibleOnPage,
            }));
        }
      }

      handleAddingNewKegToList = (newKeg) => {
          const { dispatch } = this.props;
          const { id, brand, varietal, price, abv } = newKeg;
          const action = {
            type: 'ADD_KEG',
            id: id,
            brand: brand,
            varietal: varietal,
            price: price,
            abv: abv,
          }
          dispatch(action);
          this.setState({formVisibleOnPage: false});
        }

 
      handleEditingKegInList = (kegToEdit) => {
          const { dispatch } = this.props;
          const { id, brand, varietal, price, abv } = kegToEdit;
          const action = {
              type: 'ADD_KEG',
              id: id,
              brand: brand,
              varietal: varietal,
              price: price,
              abv: abv,
          }
          dispatch(action);
          this.setState({
              editing: false,
              selectedKeg: null
          });
      }

      handleChangingSelectedKeg = (id) => {
          const selectedKeg = this.state.masterKegList[id];
          this.setState({selectedKeg: selectedKeg
        });
      }

      handleDeletingKeg = (id) => {
          const { dispatch } = this.props;
          const action = {
              type: 'DELETE_KEG',
              id: id
          }
          dispatch(action);
          this.setState({selectedKeg: null
        });
      }

    // handlePintPour = (id) => {
    //     const keg = this.state.masterKegList
    //     .filter(keg => keg.id === id)[0];
    //     if (keg.pintCount > 0) {
    //         keg.pintCount --;
    //         }
    //         const changedMasterKegList = this.state.masterKegList
    //         .filter(keg => keg.id !== this.state.selectedKeg.id)
    //         .concat(keg);
    //         this.setState({
    //             masterKegList: changedMasterKegList,
    //             editing: false,
    //         });
    //     }
      
        render() {
            let currentlyVisibleState = null;
            let buttonText = null;

            if (this.state.selectedKeg !=null) {
                currentlyVisibleState = <KegDetail 
                keg = {this.state.selectedKeg} 
                // onPintPour = {this.handlePintPour}
                />
                buttonText = "Return to List";
            }

                else if (this.state.formVisibleOnPage) {
                currentlyVisibleState = <KegForm 
                onNewKegCreation={this.handleAddingNewKegToList} />;
                buttonText = "Return to List"; 
                } else {
                currentlyVisibleState = <KegList 
                kegList={this.props.masterKegList} 
                onKegSelection={this.handleChangingSelectedKeg}
                 />;
                buttonText = "Add Keg" 
                }
                
                return (
                <React.Fragment>
                    {currentlyVisibleState}
                    <button onClick={this.handleClick}>{buttonText}</button>
                </React.Fragment>
            );
        }

};

KegControl.propTypes = {
    masterKegList: PropTypes.object
}

const mapStateToProps = state => {
    return {
        masterKegList: state
    }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;