import {
  Spacings,
  Text,
  Grid,
  AngleDownIcon,
} from "@commercetools-frontend/ui-kit";
import { IconsComponent } from "./Icons";
import { InlineSvgs } from "./InlineSvgs";
import { Leading } from "./Leading";

export default {
  title: "Example/Icons",
};

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13.7324356,13 C13.3866262,13.5978014 12.7402824,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,11.2597176 10.4021986,10.6133738 11,10.2675644 L11,7 L11,7 C11,6.44771525 11.4477153,6 12,6 C12.5522847,6 13,6.44771525 13,7 L13,10.2675644 C13.303628,10.4432037 13.5567963,10.696372 13.7324356,11 L15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L13.7324356,13 Z M12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 Z M12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 Z"/></svg>`;

export const Icons = () => {
  return <IconsComponent />;
};

export const InlineSVG = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: "750px",
      }}
    >
      <Text.Body>Clean SVG</Text.Body>
      <Text.Headline as="h2">Rendered:</Text.Headline>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Text.Body as="p" isBold={true}>
          color: solid
        </Text.Body>
        <div style={{ height: "100%" }}>
          <Grid
            gridGap={"16px"}
            gridAutoColumns="1fr"
            gridTemplateColumns={`repeat(9, 1fr)`}
            alignItems="center"
          >
            <InlineSvgs color={"solid"} size={"small"} svg={svg} />
            <InlineSvgs color={"solid"} size={"medium"} svg={svg} />
            <InlineSvgs color={"solid"} size={"big"} svg={svg} />
            <InlineSvgs color={"solid"} size={"scale"} svg={svg} />
          </Grid>
        </div>
      </div>

      {/* neutral60 */}
      <Spacings.Stack scale="m">
        <Text.Body as="p" isBold={true}>
          color: neutral60
        </Text.Body>
        <div style={{ height: "100%" }}>
          <Grid
            gridGap={"16px"}
            gridAutoColumns="1fr"
            gridTemplateColumns={`repeat(9, 1fr)`}
            alignItems="center"
          >
            <InlineSvgs color={"neutral60"} size={"small"} svg={svg} />
            <InlineSvgs color={"neutral60"} size={"medium"} svg={svg} />
            <InlineSvgs color={"neutral60"} size={"big"} svg={svg} />
            <InlineSvgs color={"neutral60"} size={"scale"} svg={svg} />
          </Grid>
        </div>
      </Spacings.Stack>

      {/* surface */}
      <Spacings.Stack scale="m">
        <Text.Body as="p" isBold={true}>
          color: surface
        </Text.Body>
        <div style={{ height: "100%", backgroundColor: "#1a1a1a" }}>
          <Grid
            gridGap={"16px"}
            gridAutoColumns="1fr"
            gridTemplateColumns={`repeat(9, 1fr)`}
            alignItems="center"
          >
            <InlineSvgs color={"surface"} size={"small"} svg={svg} />
            <InlineSvgs color={"surface"} size={"medium"} svg={svg} />
            <InlineSvgs color={"surface"} size={"big"} svg={svg} />
            <InlineSvgs color={"surface"} size={"scale"} svg={svg} />
          </Grid>
        </div>
      </Spacings.Stack>

      {/* info */}
      <Spacings.Stack scale="m">
        <Text.Body as="p" isBold={true}>
          color: info
        </Text.Body>
        <div style={{ height: "100%" }}>
          <Grid
            gridGap={"16px"}
            gridAutoColumns="1fr"
            gridTemplateColumns={`repeat(9, 1fr)`}
            alignItems="center"
          >
            <InlineSvgs color={"info"} size={"small"} svg={svg} />
            <InlineSvgs color={"info"} size={"medium"} svg={svg} />
            <InlineSvgs color={"info"} size={"big"} svg={svg} />
            <InlineSvgs color={"info"} size={"scale"} svg={svg} />
          </Grid>
        </div>
      </Spacings.Stack>

      {/* primary */}
      <Spacings.Stack scale="m">
        <Text.Body as="p" isBold={true}>
          color: primary
        </Text.Body>
        <Grid
          gridGap={"16px"}
          gridAutoColumns="1fr"
          gridTemplateColumns={`repeat(9, 1fr)`}
          alignItems="center"
        >
          <InlineSvgs color={"primary"} size={"small"} svg={svg} />
          <InlineSvgs color={"primary"} size={"medium"} svg={svg} />
          <InlineSvgs color={"primary"} size={"big"} svg={svg} />
          <InlineSvgs color={"primary"} size={"scale"} svg={svg} />
        </Grid>
      </Spacings.Stack>

      {/* primary40 */}
      <Spacings.Stack scale="m">
        <Text.Body as="p" isBold={true}>
          color: primary40
        </Text.Body>
        <Grid
          gridGap={"16px"}
          gridAutoColumns="1fr"
          gridTemplateColumns={`repeat(9, 1fr)`}
          alignItems="center"
        >
          <InlineSvgs color={"primary40"} size={"small"} svg={svg} />
          <InlineSvgs color={"primary40"} size={"medium"} svg={svg} />
          <InlineSvgs color={"primary40"} size={"big"} svg={svg} />
          <InlineSvgs color={"primary40"} size={"scale"} svg={svg} />
        </Grid>
      </Spacings.Stack>

      {/* warning */}
      <Spacings.Stack scale="m">
        <Text.Body as="p" isBold={true}>
          color: warning
        </Text.Body>
        <Grid
          gridGap={"16px"}
          gridAutoColumns="1fr"
          gridTemplateColumns={`repeat(9, 1fr)`}
          alignItems="center"
        >
          <InlineSvgs color={"warning"} size={"small"} svg={svg} />
          <InlineSvgs color={"warning"} size={"medium"} svg={svg} />
          <InlineSvgs color={"warning"} size={"big"} svg={svg} />
          <InlineSvgs color={"warning"} size={"scale"} svg={svg} />
        </Grid>
      </Spacings.Stack>

      {/* error */}
      <Spacings.Stack scale="m">
        <Text.Body as="p" isBold={true}>
          color: error
        </Text.Body>
        <Grid
          gridGap={"16px"}
          gridAutoColumns="1fr"
          gridTemplateColumns={`repeat(9, 1fr)`}
          alignItems="center"
        >
          <InlineSvgs color={"error"} size={"small"} svg={svg} />
          <InlineSvgs color={"error"} size={"medium"} svg={svg} />
          <InlineSvgs color={"error"} size={"big"} svg={svg} />
          <InlineSvgs color={"error"} size={"scale"} svg={svg} />
        </Grid>
      </Spacings.Stack>

      {/* success */}
      <Spacings.Stack scale="m">
        <Text.Body as="p" isBold={true}>
          color: success
        </Text.Body>
        <Grid
          gridGap={"16px"}
          gridAutoColumns="1fr"
          gridTemplateColumns={`repeat(9, 1fr)`}
          alignItems="center"
        >
          <InlineSvgs color={"success"} size={"small"} svg={svg} />
          <InlineSvgs color={"success"} size={"medium"} svg={svg} />
          <InlineSvgs color={"success"} size={"big"} svg={svg} />
          <InlineSvgs color={"success"} size={"scale"} svg={svg} />
        </Grid>
      </Spacings.Stack>
    </div>
  );
};

export const LeadingIcon = () => {
  return <Leading icon={<AngleDownIcon />} />;
};
