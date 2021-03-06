import React from 'react';
import Button from '../components/Button';
// import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

export default () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Misión & Acción
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Nuestra misión es ayudar a dejarle un mejor planeta a futuras generaciones por medio de
            acción frecuente y constante.
          </p>
          {/* <p className="mt-8 md:mt-12">
            <Button size="lg" href="#visión">
              Ver mas
            </Button>
          </p>
          <p className="mt-4 text-gray-600">Aprende sobre nuestra visión</p> */}
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    {/* <section id="visión" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service One</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Two</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Service Three</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section> */}

    <SplitSection
      id="sobre-nosotros"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Sobre nosotros</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            La organizacion de "Misión y Acción" fue creada en Agosto 30, 2020 a partir de un sueño de un grupo de jovenes emprendedores cansados de ver las ineficiencias del mundo con respecto a el manejo de recursos destinados a ayudar a mejorar nuestro planeta.
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Buscamos asegurarnos que todo el tiempo, dinero, y esfuerzo dedicados a ayudar a el planeta sea utilizado de la mejor manera posible para así conseguir un planeta del cual podamos sentirnos orgullosos, al igual que tener la consciencia limpia sabiendo que le estaremos dejando un mejor lugar a futuras generaciones.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Visión</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Creemos que depositando un granito de arena cada semana, en algunos años podremos ver
            una gran montaña de generosidad y mejoras hacia el planeta creada por nuestro gran
            labor.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Objetivos</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Para finales de el 2021 nos gustaría haber apoyado a 25 mascotas a conseguir un nuevo
            hogar.
          </p>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Adicionalmente, para finales del mismo año, nos gustaría haber apoyado a 1 albergue a
            incrementar su número de likes a 2,000 personas.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Nuestros Valores</h3>
          <ul className="mt-8 text-xl font-light leading-relaxed">
            <li>- Amor por el planeta</li>
            <li>- Respeto</li>
            <li>- Acción</li>
            <li>- Trabajo en equipo</li>
            <li>- Honestidad</li>
            <li>- Mejora constante</li>
          </ul>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Resultados</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="1,134" secondaryText="Kilos de comida donados" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="4" secondaryText="Personas ayudando" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="3" secondaryText="Tareas completadas" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="0" secondaryText="Mascotas adoptadas" />
          </div>
        </div>
      </div>
    </section>
    <section id="asesoria-profesional" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Listos para cambiar el mundo?</h3>
      <p className="mt-8 text-xl font-light">
        Contáctanos! Manda un correo a v.dozal@live.com para ver como continuar apoyando a la misión
        por medio de acción.
      </p>
      <p className="mt-8">
        <Button size="xl">Empezar ahora</Button>
      </p>
    </section>
  </Layout>
);
