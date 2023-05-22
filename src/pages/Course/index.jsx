import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ArrowLeft } from 'phosphor-react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
import StarRating from '../../components/StarRating';
import useCourseData from '../../hook/useCourseData';

export default function Course() {
  const params = useParams()
  const navigate = useNavigate()
  const { course, isLoading } = useCourseData(params.id);

  return (
    <div className="items-center justify-center">
      <Header showBanner={ false } />

      <main className="items-center justify-center">
        {isLoading && <Loading />}
        <div className="flex flex-col items-center justify-center mt-8 mb-8">
          <div className="flex flex-row justify-between w-3/5 mb-4">
            <button
              type="button"
              className="flex flex-row items-center justify-right text-violet-500"
              onClick={ () => navigate(-1) }
            >
              <ArrowLeft size={ 24 } />
              <p className="text-lg">
                Voltar
              </p>
            </button>
            <button
              type="button"
              className="text-center drop-shadow-md w-52 h-[36px] text-white rounded-full text-xl font-medium bg-[#5599fe]"
            >
              Inscrever-se
            </button>
          </div>
          <div className="flex items-center justify-right w-3/5">
            {
              course.imageUrl && (
                <img
                  className="flex h-48 mr-8 object-cover rounded-2xl"
                  src={ course.imageUrl }
                  alt={ course.title }
                />
              )
            }

            <div className="item-center justify-center text-left">
              <h3 className="text-4xl">
                { course.title }
              </h3>
              <p className="text-base mb-9">
                Instrutor:&nbsp;
                { course.author }
              </p>
              {
                course.stars && (
                  <StarRating
                    justifyLeft
                    ratingStarNumber={ course.stars }
                    countRatingPeople={ course.avaliations }
                  />
                )
              }
              <p className="text-base text-gray-400">
                { `R$ ${ course.price }/hora` }
              </p>
            </div>
          </div>
          <div className="flex flex-col px-4 items-right justify-right w-3/5">
            <h3 className="text-2xl mt-3">
              Descrição
            </h3>
            <p className="text-justify text-lg mt-2">
              { course.description }
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
