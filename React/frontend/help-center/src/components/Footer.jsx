import "./Footer.css";

export default function Footer() {
  return (
    <>
      <section className="contact">
        <div className="contact-info">
          <div className="first-info">
            <h4>Abstract</h4>
            <p>
              <a>Branches</a>
            </p>
          </div>

          <div className="second-info">
            <h4>Resources</h4>
            <p>
              <a>Blog</a>
              <br />
              <a>Help Center</a>
              <br />
              <a>Release Notes</a>
              <br />
              <a>Status</a>
            </p>
          </div>

          <div className="third-info">
            <h4>Community</h4>
            <p>
              <a>Twitter</a>
              <br />
              <a>Linkedin</a>
              <br />
              <a>Facebook</a>
              <br />
              <a>Dribble</a>
              <br />
              <a>Podcast</a>
            </p>
          </div>

          <div className="fourth-info">
            <h4>Company</h4>
            <p>
              <a>About Us</a>
              <br />
              <a>Careers</a>
              <br />
              <a>Legal</a>
            </p>
            <br />

            <h5>Contact Us</h5>
            <p>chetansmankar360@gmail.com</p>
          </div>

          <div className="five">
            <p>
              © Copyright @2022. Abstract Studio Design and by CM360. All Rights
              Reserved.{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
