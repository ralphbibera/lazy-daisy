import {
  Button as RACButton,
  Dialog,
  DialogTrigger,
  Modal,
  Heading,
} from "react-aria-components";
import { Button } from "./button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const Provider = ({
  children,
  ...props
}: React.ComponentProps<typeof DialogTrigger>) => {
  return <DialogTrigger {...props}>{children}</DialogTrigger>;
};

const Trigger = ({
  children,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return <Button {...props}>{children}</Button>;
};

const portalVariants = cva("modal modal-open", {
  variants: {
    placement: {
      top: "modal-top",
      middle: "modal-middle",
      bottom: "modal-bottom",
      start: "modal-start",
      end: "modal-end",
    },
  },
});

const Portal = ({
  isDismissable = true,
  placement = "middle",
  children,
  ...props
}: React.ComponentProps<typeof Modal> &
  React.PropsWithChildren &
  VariantProps<typeof portalVariants>) => {
  return (
    <Modal {...props} isDismissable={isDismissable}>
      <Dialog className={cn(portalVariants({ placement }))}>
        {children}
        <form method="dialog" className="modal-backdrop">
          <RACButton slot="close">close</RACButton>
        </form>
      </Dialog>
    </Modal>
  );
};

const Content = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div {...props} className={cn("modal-box", className)}>
      {children}
    </div>
  );
};

const Header = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={cn(
        "mb-[calc(0.25rem*6)] flex flex-col gap-2 text-center sm:text-left",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Title = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Heading>) => {
  return (
    <Heading
      {...props}
      slot="title"
      className={cn("text-lg leading-none font-semibold", className)}
    >
      {children}
    </Heading>
  );
};

const Footer = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div {...props} className={cn("modal-action", className)}>
      {children}
    </div>
  );
};

const Close = ({ children, ...props }: React.ComponentProps<typeof Button>) => {
  return (
    <Button {...props} slot="close">
      {children}
    </Button>
  );
};

export { Provider, Trigger, Portal, Content, Header, Title, Footer, Close };
