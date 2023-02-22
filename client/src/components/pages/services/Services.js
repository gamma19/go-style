import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <>
      <section class="cards">
        <div class="card">
          <div class="card__image-container">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
            />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">
              Card-1 test
            </p>
            <div class="card__info">
              <p class="text--medium">30 Min</p>
              <p class="card__price text--medium">Free</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card__image-container">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
            />
          </div>
          <div class="card__content">
            <p class="card__title text--medium">
              Card-2 test
            </p>
            <div class="card__info">
              <p class="text--medium">30 Min</p>
              <p class="card__price text--medium">Free</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
