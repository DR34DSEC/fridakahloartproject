import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './artworks.css'

const Artworks = (props) => {
  return (
    <div className="artworks-container">
      <Helmet>
        <title>Artworks - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="Artworks - Spotless Hungry Crocodile"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="artworks-navbar-interactive">
        <div data-thq="thq-navbar-nav" className="artworks-desktop-menu">
          <nav className="artworks-links">
            <Link to="/" className="artworks-navlink">
              <span>Home</span>
              <br></br>
            </Link>
            <Link to="/about-frida-kahlo" className="artworks-navlink1">
              <span>About</span>
              <br></br>
            </Link>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="artworks-burger-menu">
          <svg viewBox="0 0 1024 1024" className="artworks-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="artworks-mobile-menu">
          <div className="artworks-nav">
            <div className="artworks-top">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="artworks-logo"
              />
              <div data-thq="thq-close-menu" className="artworks-close-menu">
                <svg viewBox="0 0 1024 1024" className="artworks-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="artworks-links1">
              <span className="artworks-text04">About</span>
              <span className="artworks-text05">Features</span>
              <span className="artworks-text06">Pricing</span>
              <span className="artworks-text07">Team</span>
              <span className="artworks-text08">Blog</span>
            </nav>
            <div className="artworks-buttons">
              <button className="artworks-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="artworks-icon04"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="artworks-icon06"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="artworks-icon08"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <img
        alt="image"
        src="/external/frida-deer-1500w.jpg"
        className="artworks-image"
      />
      <span className="artworks-text09">
        <span>The Wounded Deer</span>
        <br></br>
        <span className="artworks-text12">I</span>
        <span className="artworks-text13">
          n this painting, Frida used a young deer with the head of herself and
          was fatally wounded by a bunch of arrows. The background is the forest
          with dead trees and broken branches, which implied the feeling of fear
          and desperation. Far away is the stormy, lightning-lit sky which
          brings some hope but the dear will never be able to reach it.
        </span>
        <br className="artworks-text14"></br>
        <br></br>
      </span>
      <img
        alt="image"
        src="/external/viva-la-vida-watermelons-1500w.jpg"
        className="artworks-image1"
      />
      <div className="artworks-container01">
        <span className="artworks-text16">
          <span className="artworks-text17">Viva la Vida Watermelons</span>
          <br></br>
        </span>
        <span className="artworks-text19">
          <span className="artworks-text20">V</span>
          <span>
            iva la Vida, Watermelons is the last painting that Frida Kahlo did.
            A vibrant conclusion to the short life of Frida Kahlo, Viva la Vida,
            Watermelons features rich color contrasts, curves and angles, and a
            final message from the artist herself. Kahlo put the finishing
            touches on her watermelon-themed painting just a few days before her
            death in 1954.
          </span>
          <br></br>
          <br></br>
          <span>
            Frida Kahlo inscribed &quot;Vida la Viva&quot; on the central melon
            wedge at the bottom of the canvas, which translates as &quot;Long
            live life&quot;, just eight days before she died. This may have been
            a straightforward statement as she neared death. It may also have
            been an ironic commentary on her pain-filled existence due to polio,
            a bus accident, and multiple surgeries.
          </span>
        </span>
        <img
          alt="image"
          src="/external/the-two-fridas-1500w.jpg"
          className="artworks-image2"
        />
        <h1 className="artworks-text25">The Two Fridas</h1>
        <span className="artworks-text26">
          <span className="artworks-text27">T</span>
          <span className="artworks-text28">
            his painting was completed shortly after her divorce with Diego
            Rivera. This portrait shows Frida&apos;s two different
            personalities. One is the traditional Frida in Tehuana costume, with
            a broken heart, sitting next to an independent, modern dressed
            Frida. In Frida&apos;s diary, she wrote about this painting and said
            it is originated from her memory of an imaginary childhood friend.
            Later she admitted it expressed her desperation and loneliness with
            the separation from Diego.
          </span>
          <br className="artworks-text29"></br>
          <br className="artworks-text30"></br>
          <span className="artworks-text31">
            In this painting, the two Fridas are holding hands. They both have
            visible hearts and the heart of the traditional Frida is cut and
            torn open. The main artery, which comes from the torn heart down to
            the right hand of the traditional Frida, is cut off by the surgical
            pincers held in the lap of the traditional Frida. The blood keeps
            dripping on her white dress and she is in danger of bleeding to
            death. The stormy sky filled with agitated clouds may reflect
            Frida&apos;s inner turmoil.
          </span>
        </span>
        <img
          alt="image"
          src="/external/roots-1500w.jpg"
          className="artworks-image3"
        />
        <div className="artworks-container02"></div>
        <div className="artworks-container03"></div>
        <div className="artworks-container04"></div>
        <div className="artworks-container05"></div>
        <div className="artworks-container06">
          <div className="artworks-container07"></div>
          <div className="artworks-container08"></div>
        </div>
        <div className="artworks-container09"></div>
      </div>
      <div className="artworks-container10"></div>
      <div className="artworks-container11">
        <h1 className="artworks-text32">Roots</h1>
      </div>
      <span>
        <span className="artworks-text34">I</span>
        <span className="artworks-text35">
          n this painting, Roots, 1943, Frida stated her faith that all life can
          join in a single flow. In this painting, Frida is depicted as her
          torso opens up like a window and gives birth to a vine. It&apos;s her
          dream of being able to give birth as a childless woman. Frida&apos;s
          blood circulates the vine and reach beyond the leaves&apos; veins and
          feed the parched earth. She is dreaming to be a tree of life with her
          elbow supporting her head on a pillow. Also with her Catholic
          religious background it&apos;s possible she is trying to mimic
          Christ&apos;s sacrifice by having her blood flowing to the grapevine.
          This implication of a sacrificial victim is also reflected in a few of
          her other paintings.
        </span>
        <br></br>
      </span>
      <img
        alt="image"
        src="/external/me-and-my-parrots-1500w.jpg"
        className="artworks-image4"
      />
      <div className="artworks-container12">
        <h1>Me And My Parrots</h1>
      </div>
      <span>
        <span className="artworks-text39">F</span>
        <span className="artworks-text40">
          rida Kahlo remarried to Diego Rivera in December of 1940 after they
          separated for a few years. After this Frida&apos;s life seems to be
          settled down to some extent of calmer routine. They remained to live
          separably through even they have married again. Frida still lives with
          her animals, dolls, and flowers in the countryside that she is
          interested in. They are still the main part of her life.
        </span>
      </span>
      <div className="artworks-container13"></div>
      <div className="artworks-container14"></div>
    </div>
  )
}

export default Artworks
