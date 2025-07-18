import type { FunctionComponent, PropsWithChildren } from 'react';
import type { Subject } from 'rxjs';

type IProps = {
  onClick$?: Subject<void>;
};

/**
 * Button component for user interactions.
 *
 * @component
 *
 * @uxguidelines
 * - Use clear, action-oriented text (e.g., "Save" instead of "OK")
 * - Keep button text concise (1-3 words)
 * - Use primary buttons for main actions, secondary buttons for alternative actions
 * - Maintain consistent button styling throughout the application
 * - Provide visual feedback on hover/active states
 * - Ensure sufficient touch target size (minimum 44x44px) for mobile users
 * - Position primary actions on the right for multi-button layouts
 *
 * @accessibility
 * - Ensure adequate color contrast (4.5:1 minimum ratio)
 * - Provide focus styles for keyboard navigation
 * - Use appropriate ARIA attributes when needed
 */
export const Button: FunctionComponent<PropsWithChildren<IProps>> = ({
  children,
  onClick$,
}) => {
  return (
    <button
      type={'button'}
      className="bg-primary-500 py-2 px-4 rounded hover:bg-primary-600"
      onClick={() => {
        if (onClick$) {
          onClick$.next();
        }
      }}
    >
      {children}
    </button>
  );
};
