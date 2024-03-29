import { Constraint } from "./Constraints";

export default {
  title: "Example/Constraints",
  component: Constraint,
};

export const Horizontal = {
  args: {
    max: 7,
    children: (
      <p>
        {" "}
        Lorem ipsum dolor sit amet, id labitur perpetua vix. An graece iisque
        corpora sit, erant nihil signiferumque et pro, cu ius minim altera
        temporibus.{" "}
      </p>
    ),
  },
  render: () => {
    return (
      <div style={{ position: "relative", width: "790px" }}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            position: "absolute",
            height: "100%",
          }}
        >
          <div style={{ width: "84px", backgroundColor: "#ffcca8" }}>
            Column 1
          </div>
          <div style={{ width: "84px", backgroundColor: "#ffcca8" }}>
            Column 2
          </div>
          <div style={{ width: "84px", backgroundColor: "#ffcca8" }}>
            Column 3
          </div>
          <div style={{ width: "84px", backgroundColor: "#ffcca8" }}>
            Column 4
          </div>
          <div style={{ width: "84px", backgroundColor: "#ffcca8" }}>
            Column 5
          </div>
          <div style={{ width: "84px", backgroundColor: "#ffcca8" }}>
            Column 6
          </div>
          <div style={{ width: "84px", backgroundColor: "#ffcca8" }}>
            Column 7
          </div>
        </div>

        {/* constraints */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            textAlign: "center",
            paddingTop: "32px",
          }}
        >
          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "42px",
            }}
          >
            <Constraint max={1}>
              <small>
                <b>1</b> <br></br>var(--constraint-1, 42px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "84px",
            }}
          >
            <Constraint max={2}>
              <small>
                <b>2</b> <br></br>var(--constraint-2, 84px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "142px",
            }}
          >
            <Constraint max={3}>
              <small>
                <b>3</b> <br></br>var(--constraint-3, 142px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "184px",
            }}
          >
            <Constraint max={4}>
              <small>
                <b>4</b> <br></br>var(--constraint-4, 184px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "242px",
            }}
          >
            <Constraint max={5}>
              <small>
                <b>5</b> <br></br>var(--constraint-5, 242px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "284px",
            }}
          >
            <Constraint max={6}>
              <small>
                <b>6</b> <br></br>var(--constraint-6, 284px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "342px",
            }}
          >
            <Constraint max={7}>
              <small>
                {" "}
                <b>7</b> <br></br>var(--constraint-7, 342px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "384px",
            }}
          >
            <Constraint max={8}>
              <small>
                {" "}
                <b>8</b> <br></br>var(--constraint-8, 384px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "442px",
            }}
          >
            <Constraint max={9}>
              <small>
                {" "}
                <b>9</b> <br></br>var(--constraint-9, 442px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "484px",
            }}
          >
            <Constraint max={10}>
              <small>
                {" "}
                <b>10</b> <br></br>var(--constraint-10, 484px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "542px",
            }}
          >
            <Constraint max={11}>
              <small>
                {" "}
                <b>11</b> <br></br>var(--constraint-11, 542px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "584px",
            }}
          >
            <Constraint max={12}>
              <small>
                {" "}
                <b>12</b> <br></br>var(--constraint-12, 584px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "642px",
            }}
          >
            <Constraint max={13}>
              <small>
                {" "}
                <b>13</b> <br></br>var(--constraint-13, 642px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "684px",
            }}
          >
            <Constraint max={14}>
              <small>
                {" "}
                <b>14</b> <br></br>var(--constraint-14, 684px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "742px",
            }}
          >
            <Constraint max={15}>
              <small>
                {" "}
                <b>15</b> <br></br>var(--constraint-15, 742px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              maxWidth: "784px",
            }}
          >
            <Constraint max={17}>
              <small>
                {" "}
                <b>16</b> <br></br>var(--constraint-16, 784px)
              </small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              width: "100%",
            }}
          >
            <Constraint max={"scale"}>
              <small>scale</small>
            </Constraint>
          </div>

          <div
            style={{
              position: "relative",
              backgroundColor: "#34b2a7",
              color: "white",
              borderRadius: "6px",
              width: "auto",
            }}
          >
            <Constraint max={"auto"}>
              <small>auto</small>
            </Constraint>
          </div>
        </div>
      </div>
    );
  },
};
