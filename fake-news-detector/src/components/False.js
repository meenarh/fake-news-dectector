import React from "react";

const False = () => {
  return (
    <div>
      <h1 style={{
         color: 'black', fontSize: '50px', textAlign: 'center', marginTop: '200px'
      }}>
        This news is confirmed to be <span style={{color: 'red'}}>FAKE!!!</span> Please report the source to the
        appropriate authorities
      </h1>
    </div>
  );
};

export default False;
