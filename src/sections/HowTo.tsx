import featureHighlightImage from '../assets/feature-highlight.png'

export default function HowTo() {
  return (
    <section className="calender" id="product">
      <div className="section-container unlock2">
        <div className="illustration-wrapper">
          <img
            src={featureHighlightImage}
            alt="Unlock Illustration"
            className="unlock-main-img"
          />
        </div>
        <div className="frame-6">
          <div className="frame-5">
            <h2 className="how-to-design-your-site-footer-like-we-did">
              How to design your site footer like we did
            </h2>
            <p className="one-event-calendar-shared-across-national-regional-and-club-events-to-simplify-your-event-experience-allowing-you-to-create-waiting-lists-share-data-capture-issue-credential-for-course-completion-apply-smart-purchasing-rules-and-much-more">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
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
