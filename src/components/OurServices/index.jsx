import React from 'react';

import ProptTypes from 'prop-types';

export function OurServices(props) {
  const {
    title,
    imageSrc,
  } = props;

  return (
    <div className="flex items-center justify-center">
      <div className="flex-row items-center justify-center">
        {
          imageSrc
          && <img className="flex h-56 w-56 rounded-full object-cover" src={ imageSrc } alt="OurServices" />
        }
        <div className="items-center justify-center text-center">
          <h3 className="text-2xl">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

OurServices.propTypes = {
  title: ProptTypes.string.isRequired,
  imageSrc: ProptTypes.string.isRequired,
}
