// Assets
import "./styles.scss";
import chef1Image from "../../../../assets/chef1.jpeg";
import chef2Image from "../../../../assets/chef2.jpeg";

const OurStory = () => {
  return (
    <section className="container grid our-story-section">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Pakistan</h2>
        <p>
          Lorem ipsum odor amet, consectetuer adipiscing elit. Integer convallis duis sollicitudin, quam turpis ante nulla non fusce. Viverra taciti class dolor leo etiam consequat fringilla. Velit
          class rutrum torquent parturient ante morbi tellus odio. Praesent urna tortor auctor purus primis aptent commodo fames vestibulum. Mus accumsan nostra nec molestie donec lacus pharetra
          pulvinar. Justo auctor elementum facilisis luctus neque integer eget pellentesque nisl. Aptent turpis dignissim odio conubia malesuada. Ipsum fermentum posuere augue vehicula sem augue
          finibus nullam. Dapibus convallis erat dis praesent augue aliquam magna nostra. Lacus iaculis placerat natoque magnis ad massa. Vestibulum fames nullam senectus lacinia; hac fringilla nisi.
          Tellus elit bibendum odio netus ornare pharetra fames. Augue consectetur ultrices vehicula purus; facilisi quam. Sapien interdum orci adipiscing purus curae integer. Tempus pretium sodales
          nisl sem aliquet venenatis posuere fringilla habitant. Porttitor enim ante nunc amet placerat dui imperdiet. Integer ligula consequat pellentesque eros nisl. Curabitur fusce pellentesque
          justo neque varius sagittis iaculis eget sed.
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chef1Image} alt="Chefs Mario and Adrian" />
        <img src={chef2Image} alt="Chefs Mario and Adrian" />
      </div>
    </section>
  );
};

export default OurStory;
