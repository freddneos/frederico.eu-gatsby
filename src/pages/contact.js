import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import { navigate } from 'gatsby-link'
import Layout from "../components/layout"


const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}
const ContactPage = ({ data }) => {

  const { site } = data;
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{ backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0 }}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>

          <form
            className="form-container"
            action="/who-i-am/"
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />

            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <p>
              <label>Name: <input type="text" name="name" onChange={handleChange} /></label>
            </p>
            <p>
              <label>Whatsapp/Telegram: <input type="phone" name="phone" onChange={handleChange} /></label>
            </p>
            <p>
              <label>Email: <input type="email" name="email" onChange={handleChange} /></label>
            </p>
            <p>
              <label>Message: <textarea name="message" onChange={handleChange}></textarea></label>
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input type="submit" className="button -primary" style={{ marginRight: 0 }} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`