import './uses.scss'

import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

type UsesContent = {
  title: string
  texts: string[]
}

const usesData: UsesContent[] = [
  {
    title: 'Development 👨‍💻',
    texts: ['VS Code', 'Google Chrome', 'Notion', 'Netlify', 'AWS'],
  },
  {
    title: 'At Office 🏠',
    texts: [
      'Macbook Pro mid 2017 - silver',
      'LG 27UK850 x 2',
      'Magic Keyboard with Numeric Keypad - silver',
      'Magic Trackpad 2 - silver',
      'Sony MDR 1000x',
      'Bang & Olufsen Beoplay E8',
    ],
  },
  {
    title: 'At Home 🏢',
    texts: [
      'Windows 10 Pro Desktop',
      'Macbook Air mid 2019 - silver',
      '32inch QHD monitor x 2',
      'GK893B Electrostatic Capacitive System Keyboard',
      'Gaming mouse',
    ],
  },
  {
    title: 'Mobile Devices',
    texts: ['Samsung Galaxy Note 10+', 'IPad Pro 3rd 12.9 inch'],
  },
]
export default function UsesPage() {
  return (
    <div className="uses">
      <Layout>
        <div className={`body is-article-visible`}>
          <div id="wrapper">
            {usesData.map(use => (
              <>
                <h1 key={use.title}>{use.title}</h1>
                <ul>
                  {use.texts.map(text => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </>
            ))}
            <Link to="/">Move to main</Link>
          </div>
          <div id="bg"></div>
        </div>
      </Layout>
    </div>
  )
}
