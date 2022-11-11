import React from 'react';

import Footer from '../../components/Footer';
import { Highlights } from '../../components/Highlights';
import { OurServices } from '../../components/OurServices';

function Home() {
  return (
    <div className="items-center justify-center">
      <header className="w-full h-96 p-14 bg-violet-400 items-center justify-center">
        <div className="flex gap-4">
          <img src="logo-part1.png" alt="Play Button" />
          <img src="logo-part2.png" alt="My Video Time" />
        </div>
        <img className="absolute h-auto w-[160px] top-0 ml-80 mt-24" src="img-woman-header.png" alt="Woman with her cellphone" />
      </header>

      <main>
        <div className="max-w-7xl m-auto">
          <h2 className="m-4 text-black text-3xl">
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <OurServices title="Cursos" imageSrc="cursos.png" />
            <OurServices title="Professores" imageSrc="teachers.png " />
            <OurServices title="Idiomas" imageSrc="idiomas.png" />
            <OurServices title="Consultorias" imageSrc="consultorias.png" />
            <OurServices title="Consultas" imageSrc="consultas.png" />
          </div>
        </div>

        <div className="max-w-7xl m-auto mt-8 mb-8">
          <h2 className="m-4 text-black text-3xl">
            Em destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Highlights title="Cursos do João" subtitle="João" ratingStarNumber={ 3 } countRatingPeople={ 300 } pricePerHour={ 20 } imgSrc="eua.png" />
            <Highlights title="Cursos da Marlene" subtitle="Marlene" ratingStarNumber={ 2 } countRatingPeople={ 20 } pricePerHour={ 20.5 } imgSrc="eua.png" />
            <Highlights title="Cursos da Ana" subtitle="Ana" ratingStarNumber={ 1 } countRatingPeople={ 100 } pricePerHour={ 50 } imgSrc="eua.png" />
            <Highlights title="Cursos do José" subtitle="José" ratingStarNumber={ 5 } countRatingPeople={ 1000 } pricePerHour={ 1.99 } imgSrc="eua.png" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
