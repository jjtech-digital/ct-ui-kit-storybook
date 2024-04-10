import { useState } from "react";
import { CollapsibleMotionPanel } from "./CollapsibleMotionPanel";
import { Spacings, Text } from "@commercetools-frontend/ui-kit";
import { Collapsible } from "./Collapsible";

export default {
  title: "Example/Panels",
  component: CollapsibleMotionPanel,
};

export const CollapsibleMotion = () => {
  const customContainerStyles = {
    background: "red",
    minHeight: "250px",
  };

  const controlledContainerStyles = {
    background: "red",
  };
  const [close, setClose] = useState(true);

  const handleToggle = () => setClose((prevState) => !prevState);

  return (
    <Spacings.Inline>
      <div>
        <h2>Uncontrolled example</h2>
        <CollapsibleMotionPanel>
          {({ isOpen, toggle, containerStyles, registerContentNode }) => (
            <div>
              <button data-testid="button" onClick={toggle}>
                {isOpen ? "Close" : "Open"}
              </button>
              <div
                data-testid="container-node"
                style={{ ...containerStyles, ...customContainerStyles }}
              >
                <div data-testid="content-node" ref={registerContentNode}>
                  Content
                </div>
              </div>
            </div>
          )}
        </CollapsibleMotionPanel>
      </div>

      <div>
        <h2>Controlled example</h2>
        <button onClick={() => setClose(true)}>Open</button>
        <button onClick={() => setClose(false)}>Close</button>
        <div>
          <div>Some content before</div>
          <CollapsibleMotionPanel
            isClosed={close}
            onToggle={handleToggle}
            minHeight={250}
          >
            {({ toggle, containerStyles, registerContentNode }) => (
              <div>
                <div>
                  <button onClick={toggle}>Toggle</button>
                </div>
                <div
                  data-testid="container-node"
                  style={{ ...containerStyles, ...controlledContainerStyles }}
                >
                  <div
                    data-testid="content-node"
                    ref={registerContentNode}
                    style={{ display: !close && "none" }}
                  >
                    Content
                  </div>
                </div>
              </div>
            )}
          </CollapsibleMotionPanel>
          <div>Some content afterwards</div>
        </div>
      </div>
    </Spacings.Inline>
  );
};

export const CollapsiblePanel = () => {
  const [isPanelClose, setIsPanelClose] = useState(false);
  return (
    <Collapsible
      header={<Text.Headline as="h1">Header</Text.Headline>}
      secondaryHeader={<Text.Subheadline as="h2">Subtitle</Text.Subheadline>}
      headerControls={<Text.Headline as="h3">headerControls</Text.Headline>}
      description={"description"}
      isClosed={isPanelClose}
      isDisabled={false}
      isSticky={false}
      tone={"primary"}
      onToggle={() => setIsPanelClose(!isPanelClose)}
    >
      <Text.Body as="p">Sample text</Text.Body>
    </Collapsible>
  );
};
