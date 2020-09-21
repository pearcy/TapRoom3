import React from "react";
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div className="flex">
        <div onClick = {() => props.whenKegClicked(props.id)}>
              <div className="flex">
                <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{props.brand}</h4>
                </div>
                <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{props.varietal}</h4>
                </div>
                <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{props.price}</h4>
                </div>
                <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{props.abv}</h4>
                </div>  
                {/* <div className="flex-grow text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
                    <h4>{props.pintCount}</h4>
                </div>  */}
             </div> 
        </div>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  brand: PropTypes.string,
  varietal: PropTypes.string,
  price: PropTypes.string,
  abv: PropTypes.string,
  whenKegClicked: PropTypes.func
};


export default Keg;

