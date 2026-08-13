import howToImage from '../assets/how-to.png'

export default function FeatureHighlight() {
  return (
    <section className="unlock" id="feature">
      <div className="section-container unlock2">
        <div className="illustration-wrapper">
          <img
            src={howToImage}
            alt="Pixelgrade Illustration"
            className="unlock-main-img"
          />
        </div>
        <div className="frame-6">
          <div className="frame-5">
            <h2 className="the-unseen-of-spending-three-years-at-pixelgrade">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="when-joining-the-just-go-community-your-success-becomes-our-success-in-other-words-our-customer-success-team-will-be-on-hand-from-day-one-to-ensure-we-understand-your-requirements-share-your-goals-and-work-with-you-for-a-smooth-adoption-of-our-software">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
          </div>
          <a href="#learn-more" className="button">
            <div className="label">Learn More</div>
          </a>
        </div>
      </div>
    </section>
  )
}
