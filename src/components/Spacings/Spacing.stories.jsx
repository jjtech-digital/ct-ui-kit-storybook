import SpacingCt from "./Spacing";
import Inline from "@commercetools-uikit/spacings-inline";
const sizes = [
  { name: "xs", pixels: "4px" },
  { name: "s", pixels: "8px" },
  { name: "m", pixels: "16px" },
  { name: "l", pixels: "24px" },
  { name: "xl", pixels: "32px" },
  { name: "xxl", pixels: "48px" },
  { name: "xxxl", pixels: "64px" },
];
export default {
  title: "Example/Spacing",
  component: SpacingCt,
};
export const inline = {
  render: () => {
    return (
      <div>
        {sizes.map((size) => (
          <div style={{ display: "block", margin: "8px 0 0" }} key={size.name}>
            <div
              style={{
                backgroundColor: "#e1ffdd",
                display: "inline-flex",
                alignItems: "stretch",
                height: "100px",
              }}
            >
              <div
                style={{
                  alignSelf: "center",
                  width: "75px",
                  textAlign: "center",
                }}
              >
                <div scale="s" alignItems="center">
                  <h4 as="h4">
                    {size.name.toUpperCase()}
                    <p>{size.pixels}</p>
                  </h4>
                </div>
              </div>
              <Inline
                scale={size.name}
                alignItems="center"
                justifyContent="center"
              >
                <div
                  style={{
                    backgroundColor: "#65ff4f",
                    height: " 100px",
                    width: " 100px",
                    alignItems: "center",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#65ff4f",
                    height: " 100px",
                    width: " 100px",
                    alignItems: "center",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#65ff4f",
                    height: " 100px",
                    width: " 100px",
                    alignItems: "center",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#65ff4f",
                    height: " 100px",
                    width: " 100px",
                    alignItems: "center",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#65ff4f",
                    height: " 100px",
                    width: " 100px",
                    alignItems: "center",
                  }}
                ></div>
              </Inline>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
export const stack = {
  render: () => {
    return (
      <div style={{ display: "flex" }}>
        {sizes.map((size) => (
          <div style={{ display: "block", margin: "0px 8px " }} key={size.name}>
            <div
              style={{
                backgroundColor: " #d4e0ec",
                display: "inline-flex",
                flexDirection: "column",
                alignItems: "stretch",
             
              }}
            >
              <div
                style={{
                  alignSelf: "center",
                  width: "20px",
                  textAlign: "center",
                }}
              >
                <div scale="s" alignItems="center">
                  <h4 as="h4">
                    {size.name.toUpperCase()}
                    <p>{size.pixels}</p>
                  </h4>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: `${size.pixels}`,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#2d68a0",
                    height: " 100px",
                    width: " 100px",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#2d68a0",
                    height: " 100px",
                    width: " 100px",
                    // alignItems: "center",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#2d68a0",
                    height: " 100px",
                    width: " 100px",
                    alignItems: "center",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#2d68a0",
                    height: " 100px",
                    width: " 100px",
                    alignItems: "center",
                  }}
                ></div>
                <div
                  style={{
                    backgroundColor: "#2d68a0",
                    height: " 100px",
                    width: " 100px",
                    alignItems: "center",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  },
};
