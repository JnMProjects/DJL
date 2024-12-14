import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@jackatdjl/djl-ui";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
};

export default meta;

export const Primary = () => {
  return <Button>Text</Button>;
};
