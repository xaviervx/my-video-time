import React from 'react';

import PropTypes from 'prop-types';

import StarRating from '../StarRating';

export function Highlights(props) {
  const {
    title,
    subtitle,
    imgSrc,
    ratingStarNumber,
    pricePerHour,
    countRatingPeople
  } = props;

  return (
    <div className=" flex items-center justify-center">
      <div className="flex-row items-center justify-center">
        {
          imgSrc && (
          <img
            className="flex h-48 w-full object-cover rounded-2xl"
            src={ imgSrc }
            alt="Hightlight"
          />
          )
        }

        <div className="item-center justify-center text-center">
          <h3 className="text-2xl">
            {title}
          </h3>
          <p className="text-base">
            {subtitle}
          </p>
          {
            ratingStarNumber
              && (
              <StarRating
                ratingStarNumber={ ratingStarNumber }
                countRatingPeople={ countRatingPeople }
              />
              )
          }
          <p className="text-base text-gray-400">
            {`R$ ${ pricePerHour }/hora`}
          </p>
        </div>
      </div>
    </div>
  );
}

Highlights.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  pricePerHour: PropTypes.number.isRequired,
  countRatingPeople: PropTypes.number,
  ratingStarNumber: PropTypes.number,
}

Highlights.defaultProps = {
  countRatingPeople: null,
  ratingStarNumber: null
}
