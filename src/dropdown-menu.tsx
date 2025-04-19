import {
  MenuTrigger,
  Button,
  Popover,
  Menu,
  MenuItem,
} from "react-aria-components";
import { cn } from "./utils";

const Provider = ({
  children,
  ...props
}: React.ComponentProps<typeof MenuTrigger>) => {
  return <MenuTrigger {...props}>{children}</MenuTrigger>;
};

const Trigger = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button {...props} className={cn("btn", className)}>
      {children}
    </Button>
  );
};

const Portal = ({
  children,
  ...props
}: React.ComponentProps<typeof Popover>) => {
  return <Popover {...props}>{children}</Popover>;
};

const Content = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Menu>) => {
  return (
    <Menu
      {...props}
      className={cn(
        "menu bg-base-200 rounded-box w-[var(--trigger-width)] min-w-max",
        className
      )}
    >
      {children}
    </Menu>
  );
};

const Item = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuItem> & React.PropsWithChildren) => {
  return (
    <MenuItem {...props} className={className}>
      {({ isFocused, isDisabled }) => (
        <li
          className={cn({
            "menu-disabled": isDisabled,
          })}
        >
          <span className={cn({ "menu-focus": isFocused })}>{children}</span>
        </li>
      )}
    </MenuItem>
  );
};

export { Provider, Trigger, Portal, Content, Item };
