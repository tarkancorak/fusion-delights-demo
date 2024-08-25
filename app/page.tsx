"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { BubbleChat } from "flowise-embed-react";

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-gray-100 text-gray-800'>
      {/* Notification Banner */}
      <div className='sticky top-0 w-full bg-gray-800 text-white text-center text-lg py-4 z-50'>
        Diese Seite dient nur Demonstrationszwecken und stellt kein echtes
        Restaurant dar!
      </div>

      {/* Navbar */}
      <nav className='bg-white shadow-lg'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='text-2xl font-bold text-gray-800'>
            Fusion Delights - Demo
          </div>
          <div className='hidden md:flex'>
            <a href='#about' className='text-gray-800 hover:text-gray-600 px-4'>
              Über uns
            </a>
            <a href='#menu' className='text-gray-800 hover:text-gray-600 px-4'>
              Speisekarte
            </a>
            <a
              href='#reservations'
              className='text-gray-800 hover:text-gray-600 px-4'
            >
              Reservierungen
            </a>
            <a
              href='#contact'
              className='text-gray-800 hover:text-gray-600 px-4'
            >
              Kontakt
            </a>
            <a
              href='#disclaimer'
              className='text-gray-800 hover:text-gray-600 px-4'
            >
              Disclaimer
            </a>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='focus:outline-none'>
              {menuOpen ? (
                <FaTimes className='w-6 h-6 text-gray-800' />
              ) : (
                <FaBars className='w-6 h-6 text-gray-800' />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className='md:hidden bg-white px-4 py-2'>
            <a
              href='#about'
              className='block text-gray-800 hover:text-gray-600 py-2'
              onClick={toggleMenu}
            >
              Über uns
            </a>
            <a
              href='#menu'
              className='block text-gray-800 hover:text-gray-600 py-2'
              onClick={toggleMenu}
            >
              Speisekarte
            </a>
            <a
              href='#reservations'
              className='block text-gray-800 hover:text-gray-600 py-2'
              onClick={toggleMenu}
            >
              Reservierungen
            </a>
            <a
              href='#contact'
              className='block text-gray-800 hover:text-gray-600 py-2'
              onClick={toggleMenu}
            >
              Kontakt
            </a>
            <a
              href='#disclaimer'
              className='block text-gray-800 hover:text-gray-600 py-2'
              onClick={toggleMenu}
            >
              Disclaimer
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className='bg-cover bg-center'
        style={{ height: "50vh", backgroundImage: "url('/herobanner.jpg')" }}
      >
        <div className='flex items-center justify-center h-full bg-black bg-opacity-50'>
          <div className='text-center text-white'>
            <h1 className='text-5xl font-bold mb-4'>
              Willkommen bei Fusion Delights - Demo
            </h1>
            <p className='text-xl mb-8'>
              Erleben Sie das Beste aus asiatischer und internationaler
              Fusionsküche
            </p>
            <a
              href='#reservations'
              className='bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-400'
            >
              Reservieren Sie jetzt
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-8'>Über uns</h2>
          <div className='max-w-xl mx-auto'>
            <p className='text-center'>
              Willkommen bei Fusion Delights - Demo, Ihrem fiktiven
              kulinarischen Reiseziel für außergewöhnliche Fusion-Küche, die
              asiatische und internationale Aromen auf innovative Weise vereint.
              Diese Seite dient nur Demonstrationszwecken und stellt kein echtes
              Restaurant dar.
            </p>
            <div
              className='mt-4 bg-blue-50 border-t-4 border-blue-400 rounded-b text-blue-900 px-4 py-3 shadow-md'
              role='alert'
            >
              <div className='flex'>
                <div className='py-1'>
                  <svg
                    className='fill-current h-6 w-6 text-blue-500 mr-4'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                  >
                    <path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z' />
                  </svg>
                </div>
                <div>
                  <p className='text-sm'>
                    Nutze das Icon unten rechts, um eine Unterhaltung mit Milo,
                    unserem virtuellen Restaurantassistenten, zu beginnen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id='menu' className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-8'>
            Unsere Speisekarte
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-bold mb-2'>Pad Thai mit Garnelen</h3>
              <p className='text-gray-700'>
                Reisnudeln, Tofu, Erdnüsse und Gemüse in einer Tamarindensauce.
                Optional mit Garnelen.
              </p>
              <p className='text-yellow-500 font-bold mt-4'>€15.00</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-bold mb-2'>Vegane Buddha Bowl</h3>
              <p className='text-gray-700'>
                Quinoa, Avocado, Süßkartoffeln, Kichererbsen und Grünkohl,
                serviert mit einem Sesam-Ingwer-Dressing.
              </p>
              <p className='text-yellow-500 font-bold mt-4'>€12.00</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-2xl font-bold mb-2'>
                Gegrillter Lachs mit asiatischem Gemüse
              </h3>
              <p className='text-gray-700'>
                Frischer Lachs, gegrillt und serviert mit einer Auswahl an
                asiatischem Gemüse und Reis.
              </p>
              <p className='text-yellow-500 font-bold mt-4'>€17.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id='reservations' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-8'>
            Reservierungen
          </h2>
          <form className='max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg'>
            <div className='mb-4'>
              <label htmlFor='firstName' className='block text-gray-700'>
                Vorname:
              </label>
              <input
                type='text'
                id='firstName'
                className='w-full px-4 py-2 border rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='lastName' className='block text-gray-700'>
                Nachname:
              </label>
              <input
                type='text'
                id='lastName'
                className='w-full px-4 py-2 border rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-700'>
                E-Mail:
              </label>
              <input
                type='email'
                id='email'
                className='w-full px-4 py-2 border rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='phone' className='block text-gray-700'>
                Telefon (optional):
              </label>
              <input
                type='tel'
                id='phone'
                className='w-full px-4 py-2 border rounded-lg'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='date' className='block text-gray-700'>
                Reservierungsdatum:
              </label>
              <input
                type='date'
                id='date'
                className='w-full px-4 py-2 border rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='time' className='block text-gray-700'>
                Reservierungszeit:
              </label>
              <input
                type='time'
                id='time'
                className='w-full px-4 py-2 border rounded-lg'
                required
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='guests' className='block text-gray-700'>
                Anzahl der Gäste:
              </label>
              <select
                id='guests'
                className='w-full px-4 py-2 border rounded-lg'
                required
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='more'>Mehr als 10</option>
              </select>
            </div>
            <div className='mb-4'>
              <label htmlFor='notes' className='block text-gray-700'>
                Besondere Wünsche oder Anmerkungen (optional):
              </label>
              <textarea
                id='notes'
                className='w-full px-4 py-2 border rounded-lg'
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-yellow-500 text-gray-800 px-4 py-2 rounded hover:bg-yellow-400'
            >
              Reservierung abschicken
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-8'>Kontakt</h2>
          <div className='text-center max-w-xl mx-auto'>
            <p className='mb-4'>
              Adresse: 1234 Imaginary Lane, Kulinarien, 56789 Gourmetstadt
            </p>
            <p className='mb-4'>Telefon: +99 123 456 7890</p>
            <p className='mb-4'>E-Mail: contact@fusiondelights.fake</p>
            <p className='mb-4'>Website: www.fusion.fake</p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section id='disclaimer' className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-4xl font-bold text-center mb-8'>Disclaimer</h2>
          <div className='text-center max-w-2xl mx-auto'>
            <p>
              Diese Seite dient ausschließlich Demonstrationszwecken und stellt
              kein echtes Restaurant dar. Alle angegebenen Informationen sind
              fiktiv und dienen nur zur Veranschaulichung.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-gray-400 py-6'>
        <div className='container mx-auto text-center'>
          <p>
            &copy; 2024{" "}
            <a href='https://metamare.de' target='_blank'>
              METAMARE
            </a>
            . Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
      <BubbleChat
        chatflowid={process.env.NEXT_PUBLIC_CHATFLOW_ID!}
        apiHost={process.env.NEXT_PUBLIC_CHATFLOW_API_HOST}
        theme={{
          button: {
            backgroundColor: "#202A37",
            right: 20,
            bottom: 20,
            size: 60,
            dragAndDrop: true,
            iconColor: "white",
            customIconSrc: "/milo_avatar.png",
          },
          chatWindow: {
            showTitle: true,
            title: "Fusion Delights - Demo",
            welcomeMessage:
              "Hallo! Ich bin Milo, dein virtueller Gastgeber. Wie kann ich dir heute helfen?",
            textInput: {
              placeholder: "Bitte Frage eingeben",
              sendButtonColor: "#202A37",
              textColor: "#202A37",
            },
            userMessage: {
              showAvatar: true,
              avatarSrc: "/account.png",
              backgroundColor: "#F4EBC0",
              textColor: "#202A37",
            },
            botMessage: {
              backgroundColor: "#f7f8ff",
              textColor: "#303235",
              showAvatar: true,
              avatarSrc: "/milo_avatar_transparent.png",
            },
            footer: {
              showFooter: true,
              company: "METAMARE",
              companyLink: "https://metamare.de/",
            },
          },
        }}
      />
    </div>
  );
};

export default Home;
