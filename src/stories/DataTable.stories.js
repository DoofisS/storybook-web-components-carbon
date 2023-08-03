import "@carbon/web-components/es/components/tile/index.js";
import "@carbon/web-components/es/components/button/index.js";

export default {
  title: "Custom Web Component ",
};

export const Default = () => {
  console.log("asDASD");
  return (
    <>
      <h2 className="my-selector">Type scale 5 title</h2>
      <cds-tile>
        <div>
          <p>Some random text</p>
          <cds-button href="https://www.ibm.com"> Button </cds-button>
        </div>
      </cds-tile>
    </>
  );
};

// export const Primary = () => (
//   <bx-btn size="sm" kind={"primary"}>
//     Button
//   </bx-btn>
// );
