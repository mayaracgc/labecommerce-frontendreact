import React from 'react';

function Filters() {
  return (  
    <header className="header" style={{background:'red'}}>
      <div className="container" style={{maxWidth:'800px', margin:'0 auto'}}>
        <form>
          <input 
            type="serach"
            placeholder="Busca"
            className="serch__input"
            required
          />
          <button type="submit" className="search__button">
      icone
          </button>
        </form>
      </div>
    </header>
  );
}

export default Filters;
