import * as React from 'react'
import Layout from '../components/Layout'

const Contact = () => (
  <Layout>
    <main className="page">
      <section className="contact-page">
        <article className="contact-info">
          <h3>Want to get In Touch?</h3>
          <p>
            Four dollar toast biodiesel plaid salvia actually pickled banjo
            bespoke mlkshk intelligentsia edison bulbp synth.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            quo.
          </p>
          <p>
            est repudiandae dolores vel earum. Illo voluptatem facere ullam
            maiores amet aperiam recusandae quidem alias commodi, iusto ad
            aspernatur mollitia?
          </p>
        </article>

        <article>
          <form className="form contact-form">
            <div className="form-row">
              <label htmlFor="name">your name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-row">
              <label htmlFor="email">your email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="form-row">
              <label htmlFor="message">message</label>
              <textarea name="" id=""></textarea>
            </div>
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </form>
        </article>
      </section>
    </main>
  </Layout>
)

export default Contact
