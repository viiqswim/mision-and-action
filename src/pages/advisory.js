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
            Asesoria
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Asesoria profesional a cambio de donaciones
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
      id="asesoria"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Abogados</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Detalles van aqui
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Fotógrafos</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Detalles van aqui

          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      id="asesoria"
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">Aplicaciones web/telefonos</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Detalles van aqui
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Videógrafos</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Detalles van aqui
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
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
