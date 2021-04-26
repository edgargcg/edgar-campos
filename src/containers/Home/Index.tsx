import React from 'react'

import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SocialMedia } from '../../components/SocialMedia'
import { Technologies } from '../../components/Technologies'
import { Experience } from '../../components/Experience'
import { Repositories } from '../../components/Repositories'
import { Footer } from '../../components/Footer'

import { getMenuOptions } from '../../getters/getMenuOptions'
import { getSocialMedia } from '../../getters/getSocialMedia'
import { getTechnologies } from '../../getters/getTechnologies'
import { getExperience } from '../../getters/getExperience'
import { getRepositories } from '../../getters/getRepositories'

export const Home = () => {

  const options = getMenuOptions();
  const socialMedia = getSocialMedia();
  const technologies = getTechnologies()
  const experience = getExperience();
  const repositories = getRepositories()

  const resume = (
    <>
      <p>
        I'm a <strong>.NET developer</strong> with more than 5 year of experience with .NET technologies as a C#, MVC and recently with Blazor WebAssembly, but not all is .NET that's why I'm a <strong>React dev</strong> too, maybe a newie but a <strong>good one</strong>.
      </p>
      <p>
        I'm responsible and <strong>perfectionist</strong>, passionate about technology looking to grow up as a professional developer.
      </p>
    </>
  )

  return (
    <>
      <Header
        title="Edgar Campos"
        description=".NET FullStack Dev"
        options={options}
      />
      <Profile resume={resume} />
      <SocialMedia socialMedia={socialMedia} />
      <Technologies technologies={technologies} />
      <Experience experience={experience} />
      <Repositories repositories={repositories} />
      <Footer />
    </>
  )
}
