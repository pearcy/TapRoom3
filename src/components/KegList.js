import React from "react";
import PropTypes from 'prop-types';
import Keg from "./Keg";

function KegList(props) {
  return (
    <React.Fragment>
     <div className="p-10">
      <header>Keg List</header> 
         <div className="border shadow rounded-lg p-10">
            <div className="max-w-xl flex-column">
              {Object.values(props.kegList).map((keg) => 
              <Keg
                whenKegClicked = { props.onKegSelection }
                brand={keg.brand}
                varietal={keg.varietal}
                price={keg.price}
                abv={keg.abv}
                // pintCount={keg.pintCount}
                id={keg.id}
                key={keg.id} />
            )}
            </div>
         </div>
     </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;