/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Talktext } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import DataRow from "./DataRow";
import { Collection } from "@aws-amplify/ui-react";
export default function DataRowCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Talktext,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "DataRowCollection")}
      {...rest}
    >
      {(item, index) => (
        <DataRow
          talktext={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></DataRow>
      )}
    </Collection>
  );
}
