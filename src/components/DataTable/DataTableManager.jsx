import { DataTableManager } from "@commercetools-frontend/ui-kit";
import { IntlProvider } from "react-intl";

export const TableManager = ({
  columns,
  children,
  displaySettings,
  columnManager,
  onSettingsChange,
  topBar,
  managerTheme,
}) => {
  return (
    <IntlProvider locale="en">
      <DataTableManager
        columns={columns}
        displaySettings={displaySettings}
        columnManager={columnManager}
        onSettingsChange={onSettingsChange}
        topBar={topBar}
        managerTheme={managerTheme}
      >
        {children}
      </DataTableManager>
    </IntlProvider>
  );
};
