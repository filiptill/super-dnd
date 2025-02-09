import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Draggable } from "../Draggable";

export default {
  title: "Drag & Drop/Draggable",
  component: Draggable,
} as ComponentMeta<typeof Draggable>;

const Template: ComponentStory<typeof Draggable> = (args) => (
  <Draggable {...args}>
    <div className="p-4 bg-blue-500 text-white rounded-md">Drag Me!</div>
  </Draggable>
);

export const Default = Template.bind({});