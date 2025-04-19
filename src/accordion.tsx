import {
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Button,
  DisclosureStateContext,
} from "react-aria-components";
import { cn } from "./utils";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";

const Provider = ({
  children,
  ...props
}: React.ComponentProps<typeof DisclosureGroup>) => {
  return <DisclosureGroup {...props}>{children}</DisclosureGroup>;
};

const Item = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Disclosure>) => {
  return (
    <Disclosure
      {...props}
      className={({ isExpanded }) =>
        cn(
          "collapse bg-base-100 border border-base-300 p-1",
          {
            "collapse-open": isExpanded,
          },
          className
        )
      }
    >
      {children}
    </Disclosure>
  );
};

const Trigger = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button> & React.PropsWithChildren) => {
  const context = useContext(DisclosureStateContext);

  return (
    <Button
      {...props}
      slot="trigger"
      className={cn(
        "collapse-title text-left font-semibold flex gap-2 pr-4",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn("transition-transform duration-200 ml-auto", {
          "rotate-180": context?.isExpanded,
        })}
      />
    </Button>
  );
};

const Content = ({
  children,
  ...props
}: React.ComponentProps<typeof DisclosurePanel>) => {
  return (
    <DisclosurePanel {...props} className={cn("collapse-content")}>
      {children}
    </DisclosurePanel>
  );
};

export { Provider, Item, Trigger, Content };
