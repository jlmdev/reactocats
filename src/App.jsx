import React, { Component } from 'react'
import { PageHeader } from './lib/PageHeader'
import { Article } from './lib/Article'
import Octocats from './lib/Octocats.json'

class App extends Component {
  render() {
    const octocatsFromData = Octocats.map(octocat => (
      <Article
        key={octocat.id}
        bigImageLink={octocat.bigImageLink}
        bigImage={octocat.bigImage}
        bigImageAlt={octocat.bigImageAlt}
        octodexNumber={octocat.octodexNumber}
        authorOneLink={octocat.authorOneLink}
        authorOneSrc={octocat.authorOneSrc}
        authorOneAlt={octocat.authorOneAlt}
      />
    ))

    return (
      <div>
        <PageHeader />
        <div className="spacer"></div>
        <body>
          <main>
            <section>
              {octocatsFromData}
              {/* <Article
                bigImageLink="https://octodex.github.com//terracottocat/"
                bigImage="https://octodex.github.com//images/Terracottocat_Single.png"
                bigImageAlt="Terracottocat"
                octodexNumber="#149:"
                authorOneLink="https://github.com/chubbmo"
                authorOneSrc="https://github.com/chubbmo.png"
                authorOneAlt="chubbmo"
              />
              <Article
                bigImageLink="https://octodex.github.com//octogatos/"
                bigImage="https://octodex.github.com//images/Octogatos.png"
                bigImageAlt="Octogatos"
                octodexNumber="#148:"
                authorOneLink="https://github.com/cameronfoxly"
                authorOneSrc="https://github.com/cameronfoxly.png"
                authorOneAlt="cameronfoxly"
              />
              <Article
                bigImageLink="https://octodex.github.com//sentrytocat/"
                bigImage="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
                bigImageAlt="Sentrytocat"
                octodexNumber="#143:"
                authorOneLink="https://github.com/cameronmcefee"
                authorOneSrc="https://github.com/cameronmcefee.png"
                authorOneAlt="cameronfoxly"
              />
              <Article
                bigImageLink="https://octodex.github.com//boxertocat/"
                bigImage="https://octodex.github.com//images/boxertocat_octodex.jpg"
                bigImageAlt="Boxertocat"
                octodexNumber="#141:"
                authorOneLink="https://github.com/rubyjazzy"
                authorOneSrc="https://github.com/rubyjazzy.png"
                authorOneAlt="rubyjazzy"
              />
              <Article
                bigImageLink="https://octodex.github.com//suftocat/"
                bigImage="https://octodex.github.com//images/surftocat.png"
                bigImageAlt="Surftocat"
                octodexNumber="#140:"
                authorOneLink="https://github.com/jeejkang"
                authorOneSrc="https://github.com/jeejkang.png"
                authorOneAlt="jeejkang"
              />
              <Article
                bigImageLink="https://octodex.github.com//scubatocat/"
                bigImage="https://octodex.github.com//images/scubatocat.png"
                bigImageAlt="Scubatocat"
                octodexNumber="#138:"
                authorOneLink="https://github.com/cameronfoxly"
                authorOneSrc="https://github.com/cameronfoxly.png"
                authorOneAlt="cameronfoxly"
              />
              <Article
                bigImageLink="https://octodex.github.com//dinotocat/"
                bigImage="https://octodex.github.com//images/dinotocat.png"
                bigImageAlt="Dinotocat"
                octodexNumber="#130:"
                authorOneLink="https://github.com/kimestoesta"
                authorOneSrc="https://github.com/kimestoesta.png"
                authorOneAlt="kimestoesta"
              />
              <Article
                bigImageLink="https://octodex.github.com//spidertocat/"
                bigImage="https://octodex.github.com//images/spidertocat.png"
                bigImageAlt="Spidertocat"
                octodexNumber="#88:"
                authorOneLink="https://github.com/jeejkang"
                authorOneSrc="https://github.com/jeejkang.png"
                authorOneAlt="jeejkang"
              />
              <Article
                bigImageLink="https://octodex.github.com//octoqueer/"
                bigImage="https://octodex.github.com//images/Octoqueer.png"
                bigImageAlt="Octoqueer"
                octodexNumber="#150:"
                authorOneLink="https://github.com/cameronfoxly"
                authorOneSrc="https://github.com/cameronfoxly.png"
                authorOneAlt="cameronfoxly"
              />
              <Article
                bigImageLink="https://octodex.github.com//fintechtocat/"
                bigImage="https://octodex.github.com//images/Fintechtocat.png"
                bigImageAlt="Fintechtocat"
                octodexNumber="#146:"
                authorOneLink="https://github.com/ceciliorz"
                authorOneSrc="https://github.com/ceciliorz.png"
                authorOneAlt="ceciliorz"
              />
              <Article
                bigImageLink="https://octodex.github.com//filmtocats/"
                bigImage="https://octodex.github.com//images/filmtocats.png"
                bigImageAlt="Filmtocats"
                octodexNumber="#149:"
                authorOneLink="https://github.com/heyhayhay"
                authorOneSrc="https://github.com/heyhayhay.png"
                authorOneAlt="heyhayhay"
              />
              <Article
                bigImageLink="https://octodex.github.com//hulatocat/"
                bigImage="https://octodex.github.com//images/hula_loop_octodex03.gif"
                bigImageAlt="Hulatocat"
                octodexNumber="#139:"
                authorOneLink="https://github.com/heyhayhay"
                authorOneSrc="https://github.com/heyhayhay.png"
                authorOneAlt="heyhayhay"
              /> */}
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
