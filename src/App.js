import React from 'react';
import Masonry from 'react-masonry-css'

const breakpointColumnsObj = {
  default: 3,
  980: 2,
  700: 1
};
 

const App = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            <div className="text-center">
              <h2>Baob ab</h2>
              <p>Adonsonia</p>
              <img className="w-100 mb-2" src="https://dummyimage.com/400x600/dedede/000" alt="tree" />
              <button className="btn btn-sm btn-green">Show Image</button>
            </div>
            <div className="text-center">
              <h2>Baob ab</h2>
              <p>Adonsonia</p>
              <img className="w-100 mb-2" src="https://dummyimage.com/300x500/dedede/000" alt="tree" />
              <button className="btn btn-sm btn-green">Show Image</button>
            </div>
            <div className="text-center">
              <h2>Baob ab</h2>
              <p>Adonsonia</p>
              <img className="w-100 mb-2" src="https://dummyimage.com/200x300/dedede/000" alt="tree" />
              <button className="btn btn-sm btn-green">Show Image</button>
            </div>
            <div className="text-center">
              <h2>Baob ab</h2>
              <p>Adonsonia</p>
              <img className="w-100 mb-2" src="https://dummyimage.com/400x400/dedede/000" alt="tree" />
              <button className="btn btn-sm btn-green">Show Image</button>
            </div>
            <div className="text-center">
              <h2>Baob ab</h2>
              <p>Adonsonia</p>
              <img className="w-100 mb-2" src="https://dummyimage.com/400x600/dedede/000" alt="tree" />
              <button className="btn btn-sm btn-green">Show Image</button>
            </div>
            <div className="text-center">
              <h2>Baob ab</h2>
              <p>Adonsonia</p>
              <img className="w-100 mb-2" src="https://dummyimage.com/300x500/dedede/000" alt="tree" />
              <button className="btn btn-sm btn-green">Show Image</button>
            </div>
            <div className="text-center">
              <h2>Baob ab</h2>
              <p>Adonsonia</p>
              <img className="w-100 mb-2" src="https://dummyimage.com/200x300/dedede/000" alt="tree" />
              <button className="btn btn-sm btn-green">Show Image</button>
            </div>
            <div className="text-center">
              <h2>Baob ab</h2>
              <p>Adonsonia</p>
              <img className="w-100 mb-2" src="https://dummyimage.com/400x400/dedede/000" alt="tree" />
              <button className="btn btn-sm btn-green">Show Image</button>
            </div>
          </Masonry>
        </div>
      </div>
    </div>
  );
}

export default App;
