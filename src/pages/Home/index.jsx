import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Highlights } from '../../components/Highlights';
import { Loading } from '../../components/Loading';
import { OurServices } from '../../components/OurServices';
import useCoursesData from '../../hook/useCoursesData';
import useServicesData from '../../hook/useServicesData';

function Home() {
  const { isLoading: servicesLoading, data: servicesData } = useServicesData();
  const { courses, isLoading } = useCoursesData();

  return (
    <div className="items-center justify-center">
      <Header />

      <main>
        <div className="max-w-7xl m-auto">
          <h2 className="m-4 text-black text-3xl">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {servicesLoading && <Loading />}
            {servicesData.map((service) => (
              <OurServices
                key={ service.id }
                title={ service.title }
                imageSrc={ service.imageUrl }
                alt={ service.title }
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl m-auto mt-8 mb-8">
          <h2 className="m-4 text-black text-3xl">
            Em destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {isLoading && <Loading />}
            {courses.map((course) => (
              <NavLink to={ `course/${ course.id }` }>
                <Highlights
                  key={ course.id }
                  title={ course.title }
                  subtitle={ course.author }
                  ratingStarNumber={ course.stars }
                  countRatingPeople={ course.avaliations }
                  pricePerHour={ course.price }
                  imgSrc={ course.imageUrl }
                  alt={ course.title }
                />
              </NavLink>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
