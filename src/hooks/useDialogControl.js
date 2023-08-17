import { useState } from 'react';

/**
 * @callback OpenDialog
 * @param {{ data?: any; before?: () => void; after?: () => void }} [param0]
 */

/**
 * @callback CloseDialog
 * @param {{ before?: () => void; after?: () => void }} [param0]
 */

/**
 * @returns {{
 *   open: boolean;
 *   openDialog: OpenDialog;
 *   closeDialog: CloseDialog;
 *   props: object & {
 *     open: boolean;
 *     closedialog: CloseDialog;
 *   };
 * }}
 */
export const useDialogControl = () => {
  const [open, setOpen] = useState(false);
  const [props, setProps] = useState(null);

  /**
   * @type {OpenDialog}
   */
  const openDialog = (param = null) => {
    const { data = null, before = () => {}, after = () => {} } = param || {};

    setProps(data);
    before();
    setOpen(true);
    after();
  };

  /**
   * @type {CloseDialog}
   */
  const closeDialog = (param = null) => {
    const { before = () => {}, after = () => {} } = param || {};

    before();
    setOpen(false);
    after();
  };

  return {
    open,
    openDialog,
    closeDialog,
    props: {
      open,
      closeDialog,
      ...props,
    },
  };
};
