import { JSX } from "preact";
import { useCallback } from "preact/hooks";

interface SubmitButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  buttonLabel: string | undefined;
  isLastQuestion: boolean;
  focus?: boolean;
}

export const SubmitButton = ({
  buttonLabel,
  isLastQuestion,
  tabIndex = 1,
  focus = false,
  onClick,
  disabled,
  type,
  ...props
}: SubmitButtonProps) => {
  const buttonRef = useCallback(
    (currentButton: HTMLButtonElement | null) => {
      if (currentButton && focus) {
        setTimeout(() => {
          currentButton.focus();
        }, 200);
      }
    },
    [focus]
  );

  return (
    <button
      {...props}
      dir="auto"
      ref={buttonRef}
      type={type}
      tabIndex={tabIndex}
      autoFocus={focus}
      className="bg-brand border-submit-button-border text-on-brand focus:ring-focus rounded-custom flex items-center border px-3 py-3 text-base font-medium leading-4 shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
      onClick={onClick}
      disabled={disabled}>
      {buttonLabel || (isLastQuestion ? "Finish" : "Next")}
    </button>
  );
};
