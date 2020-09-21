import React, { Component } from 'react'
import { PageHeader } from './lib/PageHeader'
import { Article } from './lib/Article'

// class Octocat extends React.Component {
//   render() {

//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div className="spacer"></div>
        <body>
          <main>
            <section>
              <Article
                bigImageLink="https://octodex.github.com//terracottocat/"
                bigImage="https://octodex.github.com//images/Terracottocat_Single.png"
                bigImageAlt="Terracottocat"
                octodexNumber="#149:"
                linkText="Terracottocat"
                authorOneLink="https://github.com/chubbmo"
                authorOneSrc="https://github.com/chubbmo.png"
                authorOneAlt="chubbmo"
              />
              {/* <article>
                <a href="https://octodex.github.com//terracottocat/">
                  <img
                    src="https://octodex.github.com//images/Terracottocat_Single.png"
                    width="400"
                    height="400"
                    alt="Terracottocat"
                  />
                </a>
                <ul>
                  <li>
                    #149:
                    <a href="https://octodex.github.com//terracottocat/">
                      <strong>Terracottocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/chubbmo">
                      <img
                        src="https://github.com/chubbmo.png"
                        width="24px"
                        height="24px"
                        alt="chubbmo"
                      />
                    </a>
                  </li>
                </ul>
              </article> */}

              <article>
                <a href="https://octodex.github.com//octogatos/">
                  <img
                    src="https://octodex.github.com//images/Octogatos.png"
                    width="400"
                    height="400"
                    alt="Octogatos"
                  />
                </a>
                <ul>
                  <li>
                    #148:
                    <a href="https://octodex.github.com//octogatos/">
                      <strong>Octogatos</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cameronfoxly">
                      <img
                        src="https://github.com/cameronfoxly.png"
                        width="24px"
                        height="24px"
                        alt="cameronfoxly"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//sentrytocat/">
                  <img
                    src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                    width="400"
                    height="400"
                    alt="Sentrytocat"
                  />
                </a>
                <ul>
                  <li>
                    #143:
                    <a href="https://octodex.github.com//sentrytocat/">
                      <strong>Sentrytocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cameronmcefee">
                      <img
                        src="https://github.com/cameronmcefee.png"
                        width="24px"
                        height="24px"
                        alt="cameronfoxly"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//boxertocat/">
                  <img
                    src="https://octodex.github.com//images/boxertocat_octodex.jpg"
                    width="400"
                    height="400"
                    alt="Boxertocat"
                  />
                </a>
                <ul>
                  <li>
                    #141:
                    <a href="https://octodex.github.com//boxertocat/">
                      <strong>Boxertocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/rubyjazzy">
                      <img
                        src="https://github.com/rubyjazzy.png"
                        width="24px"
                        height="24px"
                        alt="rubyjazzy"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//suftocat/">
                  <img
                    src="https://octodex.github.com//images/surftocat.png"
                    width="400"
                    height="400"
                    alt="Surftocat"
                  />
                </a>
                <ul>
                  <li>
                    #140:
                    <a href="https://octodex.github.com//suftocat/">
                      <strong>Surftocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jeejkang">
                      <img
                        src="https://github.com/jeejkang.png"
                        width="24px"
                        height="24px"
                        alt="jeejkang"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//scubatocat/">
                  <img
                    src="https://octodex.github.com//images/scubatocat.png"
                    width="400"
                    height="400"
                    alt="Scubatocat"
                  />
                </a>
                <ul>
                  <li>
                    #138:
                    <a href="https://octodex.github.com//scubatocat/">
                      <strong>Scubatocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cameronfoxly">
                      <img
                        src="https://github.com/cameronfoxly.png"
                        width="24px"
                        height="24px"
                        alt="cameronfoxly"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//dinotocat/">
                  <img
                    src="https://octodex.github.com//images/dinotocat.png"
                    width="400"
                    height="400"
                    alt="Dinotocat"
                  />
                </a>
                <ul>
                  <li>
                    #130:
                    <a href="https://octodex.github.com//dinotocat/">
                      <strong>Dinotocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kimestoesta">
                      <img
                        src="https://github.com/kimestoesta.png"
                        width="24px"
                        height="24px"
                        alt="kimestoesta"
                      />
                    </a>
                    <a href="https://github.com/heyhayhay">
                      <img
                        src="https://github.com/heyhayhay.png"
                        width="24px"
                        height="24px"
                        alt="heyhayhay"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//spidertocat/">
                  <img
                    src="https://octodex.github.com//images/spidertocat.png"
                    width="400"
                    height="400"
                    alt="Spidertocat"
                  />
                </a>
                <ul>
                  <li>
                    #88:
                    <a href="https://octodex.github.com//spidertocat/">
                      <strong>Spidertocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/jeejkang">
                      <img
                        src="https://github.com/jeejkang.png"
                        width="24px"
                        height="24px"
                        alt="jeejkang"
                      />
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="https://octodex.github.com//octoqueer/">
                  <img
                    src="https://octodex.github.com//images/Octoqueer.png"
                    width="400"
                    height="400"
                    alt="Octoqueer"
                  />
                </a>
                <ul>
                  <li>
                    #150:
                    <a href="https://octodex.github.com//octoqueer/">
                      <strong>Octoqueer</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/cameronfoxly">
                      <img
                        src="https://github.com/cameronfoxly.png"
                        width="24px"
                        height="24px"
                        alt="cameronfoxly"
                      />
                    </a>
                    <a href="https://github.com/johncreek">
                      <img
                        src="https://github.com/johncreek.png"
                        width="24px"
                        height="24px"
                        alt="johncreek"
                      />
                    </a>
                    <a href="https://github.com/tonyjaramillo">
                      <img
                        src="https://github.com/tonyjaramillo.png"
                        width="24px"
                        height="24px"
                        alt="tonyjaramillo"
                      />
                    </a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="https://octodex.github.com//fintechtocat/">
                  <img
                    src="https://octodex.github.com//images/Fintechtocat.png"
                    width="400"
                    height="400"
                    alt="Fintechtocat"
                  />
                </a>
                <ul>
                  <li>
                    #146:
                    <a href="https://octodex.github.com//fintechtocat/">
                      <strong>Fintechtocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ceciliorz">
                      <img
                        src="https://github.com/ceciliorz.png"
                        width="24px"
                        height="24px"
                        alt="ceciliorz"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//filmtocats/">
                  <img
                    src="https://octodex.github.com//images/filmtocats.png"
                    width="400"
                    height="400"
                    alt="Filmtocats"
                  />
                </a>
                <ul>
                  <li>
                    #149:
                    <a href="https://octodex.github.com//filmtocats/">
                      <strong>Filmtocats</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/heyhayhay">
                      <img
                        src="https://github.com/heyhayhay.png"
                        width="24px"
                        height="24px"
                        alt="heyhayhay"
                      />
                    </a>
                  </li>
                </ul>
              </article>

              <article>
                <a href="https://octodex.github.com//hulatocat/">
                  <img
                    src="https://octodex.github.com//images/hula_loop_octodex03.gif"
                    width="400"
                    height="400"
                    alt="Hulatocat"
                  />
                </a>
                <ul>
                  <li>
                    #139:
                    <a href="https://octodex.github.com//hulatocat/">
                      <strong>Hulatocat</strong>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/heyhayhay">
                      <img
                        src="https://github.com/heyhayhay.png"
                        width="24px"
                        height="24px"
                        alt="heyhayhay"
                      />
                    </a>
                  </li>
                </ul>
              </article>
            </section>
          </main>
          <footer>
            <div>
              <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </div>
    )
  }
}

export default App
