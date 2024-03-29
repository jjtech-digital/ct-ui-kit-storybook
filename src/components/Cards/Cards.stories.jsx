import { CardComponent } from "./Card";

export default {
  title: "Example/Cards",
  component: CardComponent,
};

export const Raised = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h2>theme: light</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: none</h4>
            <CardComponent theme={"light"} type={"raised"} insetScale={"none"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: s</h4>
            <CardComponent theme={"light"} type={"raised"} insetScale={"s"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: m</h4>
            <CardComponent theme={"light"} type={"raised"} insetScale={"m"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: l</h4>
            <CardComponent theme={"light"} type={"raised"} insetScale={"l"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: xl</h4>
            <CardComponent theme={"light"} type={"raised"} insetScale={"xl"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio. asperiores sequi illo tempore in quos
                quis, vel maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>
        </div>
      </div>

      {/* dark */}
      <div>
        <h2>theme: dark</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: none</h4>
            <CardComponent theme={"dark"} type={"raised"} insetScale={"none"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: s</h4>
            <CardComponent theme={"dark"} type={"raised"} insetScale={"s"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: m</h4>
            <CardComponent theme={"dark"} type={"raised"} insetScale={"m"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: l</h4>
            <CardComponent theme={"dark"} type={"raised"} insetScale={"l"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: xl</h4>
            <CardComponent theme={"dark"} type={"raised"} insetScale={"xl"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio. asperiores sequi illo tempore in quos
                quis, vel maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

// flat
export const Flat = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div>
        <h2>theme: light</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: none</h4>
            <CardComponent theme={"light"} type={"flat"} insetScale={"none"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: s</h4>
            <CardComponent theme={"light"} type={"flat"} insetScale={"s"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: m</h4>
            <CardComponent theme={"light"} type={"flat"} insetScale={"m"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: l</h4>
            <CardComponent theme={"light"} type={"flat"} insetScale={"l"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: xl</h4>
            <CardComponent theme={"light"} type={"flat"} insetScale={"xl"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio. asperiores sequi illo tempore in quos
                quis, vel maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>
        </div>
      </div>

      {/* dark */}
      <div>
        <h2>theme: dark</h2>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: none</h4>
            <CardComponent theme={"dark"} type={"flat"} insetScale={"none"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: s</h4>
            <CardComponent theme={"dark"} type={"flat"} insetScale={"s"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: m</h4>
            <CardComponent theme={"dark"} type={"flat"} insetScale={"m"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: l</h4>
            <CardComponent theme={"dark"} type={"flat"} insetScale={"l"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <h4>insetScale: xl</h4>
            <CardComponent theme={"dark"} type={"flat"} insetScale={"xl"}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis officiis accusantium labore aliquam quam reiciendis quia
                quas autem fuga asperiores sequi illo tempore in quos quis, vel
                maxime? Porro, distinctio. asperiores sequi illo tempore in quos
                quis, vel maxime? Porro, distinctio.
              </p>
            </CardComponent>
          </div>
        </div>
      </div>
    </div>
  );
};
