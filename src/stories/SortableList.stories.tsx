import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SortableList } from "../SortableList";

export default {
  title: "Drag & Drop/Nested Sortable List",
  component: SortableList,
} as ComponentMeta<typeof SortableList>;

const Template: ComponentStory<typeof SortableList> = () => <SortableList />;

export const Default = Template.bind({});
