import "./App.css";
import { Notification } from "@carbon/icons-react";
import { Search } from "@carbon/icons-react";
import { Switcher } from "@carbon/icons-react";

function App() {
  console.log("asdasdsa");
  return (
    <>
      <div>
        <cds-table expandable>
          <cds-table-head>
            <cds-table-header-row>
              <cds-table-header-cell>Name</cds-table-header-cell>
              <cds-table-header-cell>Status</cds-table-header-cell>
            </cds-table-header-row>
          </cds-table-head>
          <cds-table-body>
            <cds-table-row>
              <cds-table-cell>Load Balancer 1</cds-table-cell>
              <cds-table-cell>Disabled</cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row>
              <h6>Expandable row content</h6>
              <div>Description here</div>
            </cds-table-expanded-row>
            <cds-table-row>
              <cds-table-cell>Load Balancer 2</cds-table-cell>
              <cds-table-cell>Starting</cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row>
              <h6>Expandable row content</h6>
              <div>Description here</div>
            </cds-table-expanded-row>
            <cds-table-row>
              <cds-table-cell>Load Balancer 3</cds-table-cell>
              <cds-table-cell>Active</cds-table-cell>
            </cds-table-row>
            <cds-table-expanded-row>
              <h6>Expandable row content</h6>
              <div>Description here</div>
            </cds-table-expanded-row>
          </cds-table-body>
        </cds-table>
      </div>
    </>
  );
}

export default App;
