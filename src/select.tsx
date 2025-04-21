import {
  Select,
  SelectValue,
  Popover,
  ListBox,
  ListBoxItem,
  Button,
} from "react-aria-components";
import { cn } from "./utils";
import { Check } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

const Provider = ({
  children,
  ...props
}: React.ComponentProps<typeof Select>) => {
  return <Select {...props}>{children}</Select>;
};

const triggerVariants = cva("select", {
  variants: {
    color: {
      neutral: "select-neutral",
      primary: "select-primary",
      secondary: "select-secondary",
      accent: "select-accent",
      info: "select-info",
      success: "select-success",
      warning: "select-warning",
      error: "select-error",
    },
    style: {
      ghost: "select-ghost",
    },
    size: {
      xs: "loading-xs",
      sm: "loading-sm",
      md: "loading-md",
      lg: "loading-lg",
      xl: "loading-xl",
    },
  },
  defaultVariants: {
    color: "neutral",
    size: "md",
  },
});

const Trigger = ({
  className,
  color,
  style,
  size,
  ...props
}: React.ComponentProps<typeof Button> &
  VariantProps<typeof triggerVariants>) => {
  return (
    <Button
      {...props}
      className={cn(triggerVariants({ color, style, size }), className)}
    />
  );
};

const Value = ({ ...props }: React.ComponentProps<typeof SelectValue>) => {
  return <SelectValue {...props} className="list-none" />;
};

const Portal = ({
  children,
  ...props
}: React.ComponentProps<typeof Popover>) => {
  return <Popover {...props}>{children}</Popover>;
};

const Content = ({
  children,
  ...props
}: React.ComponentProps<typeof ListBox>) => {
  return (
    <ListBox
      {...props}
      className="menu bg-base-200 rounded-box w-[var(--trigger-width)] min-w-max"
      slot="select"
    >
      {children}
    </ListBox>
  );
};

const Item = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof ListBoxItem> & {
  children: string;
}) => {
  return (
    <ListBoxItem {...props} className={className} textValue={children}>
      {({ isSelected, isFocused, isDisabled }) => (
        <li className={cn(isDisabled && "menu-disabled")}>
          <span className={cn(isFocused && "menu-focus")}>
            {
              <>
                {children}
                {isSelected && <Check className="ml-auto h-4 w-4" />}
              </>
            }
          </span>
        </li>
      )}
    </ListBoxItem>
  );
};

export { Provider, Trigger, Portal, Value, Item, Content };
