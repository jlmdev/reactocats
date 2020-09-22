import React, { Component } from 'react'
import { PageHeader } from './lib/PageHeader'
import { Octocat } from './lib/Octocat'
import Octocats from './lib/Octocats.json'

class App extends Component {
  render() {
    const octocatsFromData = Octocats.map(octocat => (
      <Octocat
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
            <section>{octocatsFromData}</section>
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
