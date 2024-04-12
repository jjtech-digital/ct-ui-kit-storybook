import { useState } from "react";
import { DataTablee } from "./DataTable";
import {
  IconButton,
  InformationIcon,
  CheckboxInput,
  DataTable as Table,
} from "@commercetools-frontend/ui-kit";
import { TableManager } from "./DataTableManager";

export default {
  title: "Example/DataTable",
};

const items = [
  {
    id: "5e188c29791747d9c54250e2",
    name: "Morgan Bean",
    customRenderer: "CYCLONICA",
    phone: "+1 (895) 529-3300",
    age: 23,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c295ae0bb19afbb115f",
    name: "Franklin Cochran",
    customRenderer: "TINGLES",
    phone: "+1 (835) 571-3268",
    age: 36,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c298f0ea901553c517f",
    name: "Salazar Craig",
    customRenderer: "ECRAZE",
    phone: "+1 (944) 445-2594",
    age: 21,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c29b09bb748df833ed0",
    name: "Pamela Noble",
    customRenderer: "FILODYNE",
    phone: "+1 (875) 421-3328",
    age: 34,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c29bc14e3b97ab2ad7d",
    name: "Terra Morrow",
    customRenderer: "DAISU",
    phone: "+1 (807) 436-2026",
    age: 30,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c296c9b7cf486a0479c",
    name: "Cline Hansen",
    customRenderer: "ULTRIMAX",
    phone: "+1 (934) 402-3675",
    age: 21,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c29b45c669d8e60303f",
    name: "Jefferson Rosario",
    customRenderer: "COMTOURS",
    phone: "+1 (874) 437-2581",
    age: 32,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c29ca865647af147b4a",
    name: "Tania Waller",
    customRenderer: "DOGSPA",
    phone: "+1 (964) 585-3040",
    age: 35,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c2910b83f907e9c66ab",
    name: "Butler Shepard",
    customRenderer: "HOUSEDOWN",
    phone: "+1 (888) 434-2153",
    age: 21,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
  {
    id: "5e188c29a9ece9123d6a87a1",
    name: "Diana Wise",
    customRenderer: "SPEEDBOLT",
    phone: "+1 (992) 535-2912",
    age: 27,
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu dictum varius duis at consectetur lorem donec.",
  },
];

const customCellRenderer = (type) => {
  const options = {
    Link: (row) => (
      <a
        href="https://uikit.commercetools.com/"
        style={{ textDecoration: "none" }}
      >
        {row.customRenderer}
      </a>
    ),
    Text: (row) => (
      <Value
        defaultValue={row.customRenderer}
        render={(value, onChange) => (
          <TextInput
            type="text"
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
          />
        )}
      />
    ),
    Select: () => (
      <Value
        render={(value, onChange) => (
          <SelectInput
            value={value}
            menuPortalTarget={document.body}
            onChange={(event) => {
              onChange(event.target.value);
            }}
            options={[
              { value: "one", label: "One" },
              { value: "two", label: "Two" },
            ]}
          />
        )}
      />
    ),
    Number: () => (
      <Value
        render={(value, onChange) => (
          <NumberInput
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
          />
        )}
      />
    ),
  };

  return options[type];
};

const initialColumnsState = [
  {
    key: "name",
    label: "Name",
    isSortable: true,
  },
  {
    key: "customRenderer",
    label: "Custom Column",
    renderItem: customCellRenderer("Link"),
    headerIcon: (
      <IconButton
        icon={<InformationIcon />}
        label="Custom Column Information"
        size="small"
        onClick={() =>
          alert(
            "This Column can be customized using the controls at the bottom of this page!"
          )
        }
      />
    ),
  },
  {
    key: "phone",
    label: "Phone",
    shouldIgnoreRowClick: true,
  },
  {
    key: "age",
    label: "Age",
    align: "center",
    isSortable: true,
  },
  {
    key: "about",
    label: "About",
    isTruncated: true,
    width: "minmax(150px, auto)",
  },
];

export const DataTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };
  return (
    <DataTablee
      rows={items}
      columns={[
        {
          key: "checkbox",
          label: <CheckboxInput isChecked={selectedRows.length !== 0} />,
          shouldIgnoreRowClick: true,
          align: "center",
          disableResizing: true,
          renderItem: (row) => (
            <CheckboxInput
              isChecked={selectedRows.includes(row.id)}
              onChange={() => handleCheckboxChange(row.id)}
            />
          ),
        },
        ...initialColumnsState,
      ]}
      maxWidth={659}
      maxHeight={"400px"}
      onRowClick={(item, index) => alert(`Row click: Row number ${index}`)}
      footer={"This is Footer"}
    />
  );
};

const initialVisibleColumns = [
  {
    key: "name",
    label: "Name",
    isSortable: true,
  },
  {
    key: "customRenderer",
    label: "Custom Column",
    renderItem: (row) => (
      <a href="https://uikit.commercetools.com/">{row.customRenderer}</a>
    ),
  },
  {
    key: "phone",
    label: "Phone",
    shouldIgnoreRowClick: true,
  },
  {
    key: "age",
    label: "Age",
    align: "center",
    isSortable: true,
  },
  {
    key: "about",
    label: "About",
    width: "minmax(150px, auto)",
  },
];

export const DataTableManager = () => {
  return (
    <TableManager
      columns={initialVisibleColumns}
      displaySettings={{
        disableDisplaySettings: false,
        isWrappingText: true,
      }}
      columnManager={{ disableColumnManager: false }}
    >
      <Table rows={items} />
    </TableManager>
  );
};
